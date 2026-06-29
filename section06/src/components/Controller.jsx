const Controller = ({ onCountClick }) => {
  return (
    <div>
      <button onClick={() => onCountClick(-1)}>-1</button>
      <button onClick={() => onCountClick(-10)}>-10</button>
      <button onClick={() => onCountClick(-100)}>-100</button>
      <button onClick={() => onCountClick(+100)}>+100</button>
      <button onClick={() => onCountClick(+10)}>+10</button>
      <button onClick={() => onCountClick(+1)}>+1</button>
      <button onClick={() => onCountClick(0)}>reset</button>
    </div>
  )
}

export default Controller;