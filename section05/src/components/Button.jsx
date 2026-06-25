const Button = ({children, text, color = 'black'}) => {
  // 이벤트 핸들링: 이벤트가 발생했을 때 그것을 처리하는 것
  const onClickButton = (e) => {
    console.log(e); // SyntheticBaseEvent 합성이벤트: 모든 웹 브라우저의 이벤트객체를 하나로 통일한 형태
  }
  return (
    <button
      onClick={onClickButton}
      style={{color: color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button;