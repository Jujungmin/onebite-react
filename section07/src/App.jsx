import "./App.css";
import Viewer from "./components/Viewer"
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setSCount] = useState(0);

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount'); // 처음에만 출력. 최초로 한 번 실행
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update'); // 배열(deps)없으면 계속 실행
  });

  // 3. 언마운트 : 죽음
  // Even.jsx

  const clickCount = (value) => {
    if(value === 0) {
      setSCount(0);
    } else {
      setSCount(count + value);
    }
  }

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {/* 홀수일 때 unmount 호출 */}
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onCountClick={clickCount} />
      </section>
    </div>
  )
}

export default App;
