// src/App.tsx

import "./App.css";
import { useState } from "react";

function App() {
  // new Date()は現在時刻を取得します。
  const [state, setState] = useState(new Date());

  return (
    <div className="App">
      <header className="App-header">
        {/*
          JSX内で変数を画面表示したい場合は、{}で変数を囲む必要があります。
        */}
        <p>{state.toLocaleTimeString()}</p>
      </header>
    </div>
  );
}

export default App;

