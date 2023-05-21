import './Header.css'
import { Link } from 'react-router-dom'
// const toggleBtn = document.querySelector('.navbar__toggleBtn')
// const menu = document.querySelector('.navbar__menu')
// const icons = document.querySelector('.navbar__icons')
// ;<script
//   src="https://kit.fontawesome.com/5eebe76069.js"
//   crossorigin="anonymous"
// ></script>

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <i className="fa-brands fa-accusoft"></i>
        <Link to="">사이트이름</Link>
      </div>
      <ul className="navbar__menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">추천</Link>
        </li>
        <li>
          <Link to="/community">게시판</Link>
        </li>
        <li>
          <Link to="/board">FAQ</Link>
        </li>
        <li>
          <Link to="/write">게시글 작성</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </ul>
      <ul className="navbar__icons">
        <li>
          <Link to="">로그인</Link>
        </li>
        <li>
          <Link to="">회원가입</Link>
        </li>
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
      </ul>
    </nav>
  )
}

export default Header
