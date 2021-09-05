// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "src/Route";
// meratial-ui
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
// apollo: React で GraphQL を簡単に使用できるにするライブラリ群
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// Recoil: グローバルステートの管理
import { RecoilRoot } from "recoil";
// Style
import GlobalStyle from "src/GlobalStyle";

const theme = createTheme();

// GraphQl APIのエンドポイントを指定する
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_END_POINT_ORIGIN,
});

// GraphQLのリクエストりくえすとお送信する際に付与するRequest Headersなどをここで指定する
// 本来であれば認証情報などをここで取得し、トークンをHeadersに付与する。
const authLink = setContext(async () => {
  return {
    headers: {
      // 本来であれば、シークレットキーを直接Request Headersに乗せてリクエストを行うことはご法度です。
      // 今回は例外的に手っ取り早くApolloを使うために直接指定しています。
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET_KEY,
    },
  };
});

// Apollo Clientのインスタンスをここで作成している。
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),

  // Apollo Clientには強力なキャッシュ機能が搭載されています。
  // Apollo Clientを使う理由にこのキャッシュ機能のために使うと言っても過言ではありません。
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        {/*  Apollo Clientを初期化して、アプリケーション全体でApollo Clientを使えるようにする  */}
        <ApolloProvider client={apolloClient}>
          <BrowserRouter>
            <CssBaseline />
            <GlobalStyle />
            <RootRouter />
          </BrowserRouter>
        </ApolloProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);