import React from 'react'
import style from './Navbar.module.css'
import Logo from '../../assets/2.png'




function NavbarEn() {
    return (
        <nav>
            <div className="container">
                <div className={style['nav__content']}>
                    <img src={Logo} alt='' />
                    <div className={style['right__side']}>
                        <ul className={style["nav__links"]}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Rooms</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <div className={style['nav__icons']}>
                        <p>$</p>
                        <p>EN</p>
                        <p><i class="fa-regular fa-user"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarEn;