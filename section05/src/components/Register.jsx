import { useState, useRef } from "react";

// let count = 0; 두 개의 컴포넌트가 하나의 변수를 공유 => 권장하지 않는다.

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });
  
  const countRef = useRef(0);
  // console.log('Register 리렌더링'); // useRef()는 컴포넌트 내부에서 렌더링영향에 미치지 않는다.
  // console.log(useRef()); // {current: undefined}
  const inputRef = useRef();

  // let count = 0;

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    // count++;
    // console.log(count); // 1만 계속 출력(1고정)
    // useState(), useRef() 컴포넌트가 리렌더링된다고해서 다시 리셋되지 않음
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    if(input.name === '') {
      // 이름을 입력하는 DOM 요소에 포커스
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <input 
          ref={inputRef}
          name="name"
          value={input.name}
          placeholder={'이름'}
          onChange={onChange}
          />
      </div>
      <div>
        <input 
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select 
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio" 
          value={input.bio}
          onChange={onChange}
        />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register;