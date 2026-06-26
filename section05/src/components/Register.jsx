import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// 객체로 만들어서 하나의 스테이트 묶음
const Register = () => {

  const [num, setNum] = useState(0);
  console.log(num);
  console.log(typeof setNum);

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  // 여러 개 비슷하게 동작하는 이벤트 하나로 묶음 : 통합 이벤트 핸들러
  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value
      // 각 input의 name값 호출
    })
  }
  // setInput상태변화 함수 호출
  // 스프레드 연산자로 기존 input값 나열
  
  // const onChangeName = (e) => {
  //   setInput({
  //     ...input, // 스프레드기법(모두 가져오기)
  //     name: e.target.value // 변경하고자하는 자식(properties) 값
  //   });
  // };
  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value
  //   });
  // };
  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value
  //   });
  // };
  // const onChangeBio = (e) => {
  //   setInput(
  //     {
  //     ...input,
  //     bio: e.target.value
  //   }
  //   );
  // };
  
  return (
    <div>
      <div>
        <input 
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
    </div>
  )
}

export default Register;