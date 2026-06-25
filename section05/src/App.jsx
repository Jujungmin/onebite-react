import './App.css';
import { useState } from 'react';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

function App() {
  const [light, setLight] = useState('Off');
  return (
    <>
      <Bulb />
      <Counter />
    </>
  )
}

export default App;

// count를 클릭 해도 Bulb 콘솔이 계속 출력.
// 1. 자신이 관리하는 state값이 변경될 때
// 2. 제공받는 props값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링된다.
// Bulb와 같은 자식컴포넌트가 많아지면 성능이 저하될 수 밖에 없다.
// 따라서 관련없는 두개의 state를 하나의 컴포넌트에 몰아넣는게 좋다.