import "./App.css";
import Viewer from "./components/Viewer"
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  const [count, setSCount] = useState(0);
  const [input, setInput] = useState('');


  // useEffect: count 스테이트 값들이 바뀌었을 때 원하는 동작 수행
  // count 스테이트 값이 바뀔 때마다 첫번째 인수인 콜백함수 실행
  // useState는 비동기로 작동, useEffect를 이용해서 변경된 state값 바로 이용 가능
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);
  // 배열 값에 따라 다르게 동작: 의존성 배열(dependency array[deps])
  // 값을 여러개 넣어도 가능

  const clickCount = (value) => {
    if(value === 0) {
      setSCount(0);
    } else {
      setSCount(count + value);
    }
    console.log(count); // useState 상태변화함수 비동기로 동작
  }

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {setInput(e.target.value)}} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onCountClick={clickCount} />
      </section>
    </div>
  )
}

export default App;
