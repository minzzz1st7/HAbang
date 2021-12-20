import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginAction, logoutAction } from "../../modules/user";
import styles from './header.module.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'



const Header = memo(({ onLogout, username, time }) => {
  const dispatch = useDispatch();
  const now = new Date();
  const login = new Date(Date.parse(time));
  const timeend = 3000 - Math.floor((now - login) / 1000);
  Math.floor((now - login) / 1000) > 3000 && dispatch(logoutAction());
  const path = `/${username}`;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
       <Link to="/"> <img src="/img/haimg1.jpeg" alt="Home Logo" className={styles.logoimg}/></Link>
      
        {timeend < 300 && <> 곧 자동로그아웃됩니다.</>}
        {username && (
          <span className="logo-user">[{username}]님 환영합니다 </span>
        )}
      </div>


      <div className = {styles.navbar__menu}>
        <ul className= {styles.navbar__menu}>
          <li className={styles.navbar__menu__item} data-link="#home">
          <Link to={path}>내정보</Link> </li> 

          <li className={styles.navbar__menu__item} data-link="#login" >
          <Link to="/login">로그인</Link></li>

          <li className={styles.navbar__menu__item} data-link="#sell">
          <Link to="/productRegister">상품등록하기</Link></li>

          <li className={styles.navbar__menu__item} data-link="#chat">
          <Link to="/chatlist">내 채팅</Link></li>

          <li className={styles.navbar__menu__item}data-link="#like">
          <Link to="/cart">찜목록</Link></li>
      
        </ul>
      </div>
          
      <button class ="arrowup">
        <FontAwesomeIcon icon={faArrowUp} />
    </button>
      
    </header>
  );
});

export default Header;

