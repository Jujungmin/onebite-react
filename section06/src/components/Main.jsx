const Main = ({ isLoggedIn , onLoginClick }) => {
  return (
    <main>
      <h3>자식2: 메인컨텐츠(Main)</h3>
      <button onClick={onLoginClick}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </main>
  )
}

export default Main;