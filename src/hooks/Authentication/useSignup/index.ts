// ■ useAuthHelperのための追加
import { useEffect } from "react";
import { useRef } from "react";
// ■ useAuthHelperのための追加(リダイレクト用の関数)
import { useNavigate } from "react-router-dom";
import { FireSignupType } from "src/utils/Firebase/signup";
import { signup as fireSignup } from "src/utils/Firebase/signup";
import { useInsertUserMutation } from "src/utils/graphql/generated";
// ■ useAuthHelperで定義した型(SetErrorFn)と、認証のための雛形関数をインポート
import { SetErrorFn, useAuthHelper } from "src/hooks/Authentication/useAuthHelper";

// email, passwordに加えて、nameを追加
export type SignupPropsType = {
  name: string;
} & FireSignupType;

export const useSignup = () => {
  // ユーザーが入力した値を読み取るための`ref`
  // それぞれのrefに<input />要素の直接の参照を格納する
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // ■ useAuthHelperのための追加
  // リダイレクト用の関数
  const navigate = useNavigate();

  // エラーが発生したら全てここに格納する
  // const [error, setError] = useState<Error>();

  // サインアップの処理が実行されている間、trueになる。
  // const [loading, setLoading] = useState<boolean>(false);

  // userを追加するためのGraohQL Mutation Hooks
  const [insertMutation, { error: apolloError }] = useInsertUserMutation();

  // ■ useAuthHelperのための追加
  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false;

    // Nameフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!nameRef.current?.value) {
      setError("name", "名前が入力されていません。");
      invalidValidation = true;
    }

    // Emailフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!emailRef.current?.value) {
      setError("email", "メールアドレスを入力してください。");
      invalidValidation = true;
    }

    // Passwordフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!passwordRef.current?.value) {
      setError("password", "パスワードを入力してください。");
      invalidValidation = true;
    }

    // バリデーションが有効か無効化を返す
    return invalidValidation;
  };

  // 実際のサインアップのロジック
  const signup = async () => {
    // Firebaseのサインアップ処理を実行
    const { user } = await fireSignup({
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    });

    if (!user?.uid) {
      throw new Error("ユーザーの登録に失敗しました。");
    }

    // Hasuraにuserを作成する
    const apolloResponse = await insertMutation({
      variables: {
        id: user.uid,
        name: nameRef.current?.value || "",
        email: emailRef.current?.value || "",
      },
    });

    if (apolloResponse.data?.insert_users_one?.id) {
      // `/`へリダイレクト
      navigate("/");
    } else {
      throw new Error("ユーザーの登録に失敗しました。");
    }
  };

  // useAuthHelperを使用して、実際に認証に使用する関数を生成する
  const { authExecute, error, setErrorHandler, loading } = useAuthHelper(
    signup,
    formValidation
  );

  // GraphQLのエラーがあったら、ここでキャッチして、エラー処理を行う
  // 今回は、エラーメッセージを表示するだけ。
  useEffect(() => {
    if (apolloError?.message) {
      setErrorHandler("main", apolloError.message);
    }
  }, [apolloError]);

  return {
    ref: {
      nameRef,
      emailRef,
      passwordRef,
    },
    signup: authExecute,
    error,
    loading,
  };

  // return {
  //   ref: {
  //     nameRef,
  //     emailRef,
  //     passwordRef,
  //   },
  //   signup,
  //   error,
  //   loading,
  // };
};

