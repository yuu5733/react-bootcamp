import { Navigate, useRoutes } from "react-router-dom";

// 下記のファイルはまだ作成されていないので、次項で作成する。
import { HomeLayout } from "./layouts/Home";
import { SideLessHomeLayout } from "./layouts/SideLessHome";
import { SimpleLayout } from "./layouts/Simple";

export const RootRouter = () => {
  // useRoutesを使用することで、ルーティング用のコンポーネントをいい感じにライブラリが作成してくれる
  // v6.0.0-beta.1から追加された便利機能
  return useRoutes([

    // HeaderとSidebarがあるデザインのページ
    // elementに指定したコンポーネントをページのレイアウトデザインとして使用する

    {
      element: <HomeLayout />,

      // childrenでは、pathに指定したURLで、使用するコンポーネントを指定する
      children: [{ path: "/", element: <div>Home</div> }],
    },

    // Headerのみのデザインのページ
    {
      element: <SideLessHomeLayout />,
      children: [
        { path: "watch", element: <Navigate to="/" /> },
        { path: "watch/:videoId", element: <div>watch</div> }
      ],
    },

    // HeaderもSidebarもないページのデザイン
    {
      element: <SimpleLayout />,
      children: [
        { path: "login", element: <div>ログイン</div> },
        { path: "signup", element: <div>新規作成</div> },
        { path: "forget", element: <div>パスワードリセット</div> },
        { path: "404", element: <div>Not Found</div> },

        // pathに"*"を指定することで、「全て」のURLとして指定する
        // Navigateを指定することで、リダイレクト処理
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
};
