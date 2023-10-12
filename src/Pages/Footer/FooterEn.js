import React from 'react'
import style from './FooterEn.module.css'
import Logo from '../../assets/2.png'




function FooterEn() {
    return (
        <footer>
            <div className='container'>
                <div className={style['footer__content']}>
                    <div className={style['logo__div']}>
                        <img src={Logo} alt='' />
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.</p>
                    </div>
                    <ul>
                        <h2>Website</h2>
                        <li>Home</li>
                        <li>Rooms</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <h2>Services</h2>
                        <li>Home</li>
                        <li>Rooms</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className={style['contact__div']}>
                        <h2>You Can Contact Us via:</h2>
                        <div className={style['contact__icons']}>
                            <i class="fa-solid fa-envelope"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-square-twitter"></i>
                        </div>
                        <h2>Or via:</h2>
                        <div className={style['contact__num']}>
                            <i class="fa-solid fa-phone"></i>
                            <p>0550000000</p>
                        </div>
                    </div>
                </div>
                <div className={style['border__bottom']}></div>
                <div className={style['copyright']}>
                    <p>Alayam Hotel © – All rights reserved </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterEn;