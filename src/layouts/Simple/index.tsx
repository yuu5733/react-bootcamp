// src/layouts/Simple/index.tsx と言うファイルを作成する
// 以下は、index.tsxのコード
import { Outlet } from "react-router-dom";

export const SimpleLayout = () => {
  return (
    <div>
      <h1>Simple</h1>
      <Outlet />
    </div>
  );
};
