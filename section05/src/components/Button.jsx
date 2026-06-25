const Button = ({children, text, color = 'black', ...rest}) => {
  // console.log(props);
  // 자식 컴포넌트에게 프롭스로 전달해주면 매개변수에 전달되게 된다.
  console.log(rest)
  return (
    <button style={{color: color}}>
      {text} - {color.toUpperCase()}
      {/* undefined로 설정되어 오류가 난다. */}
      {children}
    </button>
  )
}

export default Button;