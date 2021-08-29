import { Navigate, useRoutes } from "react-router-dom";

import { HomeLayout } from "src/layouts/Home";
import { SideLessHomeLayout } from "src/layouts/SideLessHome";
import { SimpleLayout } from "src/layouts/Simple";
import { Home } from "src/pages/Home";
import { Upload } from "src/pages/Upload";
import { Watch } from "src/pages/Watch";
import { Login } from "src/pages/Login";

export const RootRouter = () => {
  return useRoutes([

    // HeaderとSidebarがあるデザインのページ
    // elementに指定したコンポーネントをページのレイアウトデザインとして使用する
    {
      element: <HomeLayout />,

      // childrenでは、pathに指定したURLで、使用するコンポーネントを指定する
      children: [
        { path: "/", element: <Home /> },
        { path: "upload", element: <Upload /> },
      ],
    },

    // Headerのみのデザインのページ
    {
      element: <SideLessHomeLayout />,
      children: [
        { path: "watch", element: <Navigate to="/" /> },
        { path: "watch/:videoId", element: <Watch /> }
      ],
    },

    // HeaderもSidebarもないページのデザイン
    {
      element: <SimpleLayout />,
      children: [
        { path: "login", element: <Login /> },
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
