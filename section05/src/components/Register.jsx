import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  
  const onChangeName = (e) => {
    setName(e.target.value); // name 스테이트에 최종적으로 전달완료
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };
  
  return (
    <div>
      <div>
        <input 
          value={name}
          placeholder={'이름'}
          onChange={onChangeName}
          />
      </div>
      <div>
        <input 
          type="date"
          value={birth}
          onChange={onChangeBirth}
        />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio}>
          {bio}
        </textarea>
      </div>
    </div>
  )
}

export default Register;