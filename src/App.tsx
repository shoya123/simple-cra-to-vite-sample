import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "Counter/Counter";
import { arrayMoveMutable } from "array-move";

let array = [1, 2, 3, 4, 5];
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 環境変数を開発サーバーとjestで参照できるかを確認
    console.log("count", count, process.env.REACT_APP_HELLO);

    // ES Modulesのライブラリをjestで動かせるか確認
    arrayMoveMutable(array, 0, -1);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <div>{process.env.REACT_APP_HELLO}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
