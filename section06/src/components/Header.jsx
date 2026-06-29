
const Header = ({ isLoggedIn }) => {
  return (
    <header>
      <h3>자식1: 헤더(Header)</h3>
      <p>상태 : {isLoggedIn ? '환영합니다' : '로그인이 필요합니다'}</p>
    </header>
  )
}

export default Header;