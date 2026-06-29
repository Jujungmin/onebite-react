import "./App.css";
import Viewer from "./components/Viewer"
import Controller from "./components/Controller";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  // 1. 상태를 공통 부모인 App으로 끌어올림(스테이트 리프팅(State Lifting))
  const [count, setSCount] = useState(0);

  const clickCount = (value) => {
    if(value === 0) {
      setSCount(0);
    } else {
      setSCount(count + value);
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      {/* 2. 자식들에게 데이터를 위에서 아래로 전달(단방향 흐름) */}
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onCountClick={clickCount} />
      </section>

      <section>
        <Header isLoggedIn={isLoggedIn} />
        <Main isLoggedIn={isLoggedIn} onLoginClick={toggleLogin} />
      </section>
    </div>
  )
}

export default App;
