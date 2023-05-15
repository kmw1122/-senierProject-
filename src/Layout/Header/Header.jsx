import { useEffect } from 'react';
import './Header.css'
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
<script src="https://kit.fontawesome.com/5eebe76069.js" crossorigin="anonymous"></script>


const Header = () => {

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <i className="fa-brands fa-accusoft"></i>
                <a href="">사이트이름</a>

            </div>
            <ul className="navbar__menu">
                <li><a href="">Home</a></li>
                <li><a href="">추천</a></li>
                <li><a href="">게시판</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href=""></a></li>

            </ul>
            <ul className="navbar__icons">
                <li><a href="">로그인</a></li>
                <li><a href="">회원가입</a></li>
                <li><i className="fa-brands fa-facebook"></i></li>
            </ul>
        </nav>
    )
}

export default Header