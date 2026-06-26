import { useState } from 'react';
import useInput from './../hooks/useInput';

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 등 내부에서만 호출 가능(자바스크립트 함수 내에서는 안됨) => use사용
// 2. 조건부로 호출될 수 없다.
// 3. 중요! 커스텀 훅을 직접 만들 수 있다.

// 커스텀 훅
// src > hooks > useInput.jsx 파일로 따로 뺀다.
// function useInput() {
//   const [input, setInput] = useState('');
//   const onChange = (e) => {
//     setInput(e.target.value);
//   }
//   return [input, onChange];
// }

const HookExam = () => {
  const [name, onChangeName] = useInput();
  const [birth, onChangeBirth] = useInput();

  return (
    <>
    <input value={name} onChange={onChangeName} />
    <input value={birth} onChange={onChangeBirth} type="date" />
    </>
  )
}

export default HookExam;