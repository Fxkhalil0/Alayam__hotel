import React from 'react'
import style from '../HomeEn.module.css'
import Card1 from '../../../assets/Home/cards/_DSF3913-HDR.jpg'
import Card2 from '../../../assets/Home/cards/_DSF3940.jpg'
import Card3 from '../../../assets/Home/cards/card3.jpg'
import BedIcon from '../../../assets/Home/cards/bed.png'
import PeoIcon from '../../../assets/Home/cards/people.png'




function CardsEn() {
    return (
        <>
        <div className={style['card__item']}>
            <div className={style['padding__div']}>
                <figure>
                    <img src={Card1} alt='' />
                </figure>
                <div className={style['header__icon']}>
                    <div className={style['rate']}>
                        <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                        <p>4.8</p>
                    </div>
                    <div className={style['wishlist']}>
                        <i class="fa-regular fa-heart" style={{ color: '#EFC968' , fontSize: '20px'}}></i>
                    </div>
                </div>
                <h3>Wilderness Club at Big Ceddar</h3>
                <p>2 Bedroom Combined Lodge</p>
                <h4>100$ <span>/per night</span></h4>
                <div className={style['card__icons']}>
                    <div className={style['icon']}>
                        <img src={BedIcon} alt='' />
                        <p>4 Beds</p>
                    </div>
                    <div className={style['icon']}>
                        <img src={PeoIcon} alt='' />
                        <p>4 People</p>
                    </div>
                    <div className={style['icon']}>
                        <i class="fa-solid fa-wifi" style={{ color: '#213d489e', fontSize: '20px' }}></i>
                        <p>Wifi</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={style['card__item']}>
            <div className={style['padding__div']}>
                <figure>
                    <img src={Card2} alt='' />
                </figure>
                <div className={style['header__icon']}>
                    <div className={style['rate']}>
                        <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                        <p>4.8</p>
                    </div>
                    <div className={style['wishlist']}>
                        <i class="fa-regular fa-heart" style={{ color: '#EFC968' , fontSize: '20px'}}></i>
                    </div>
                </div>
                <h3>Wilderness Club at Big Ceddar</h3>
                <p>2 Bedroom Combined Lodge</p>
                <h4>100$ <span>/per night</span></h4>
                <div className={style['card__icons']}>
                    <div className={style['icon']}>
                        <img src={BedIcon} alt='' />
                        <p>4 Beds</p>
                    </div>
                    <div className={style['icon']}>
                        <img src={PeoIcon} alt='' />
                        <p>4 People</p>
                    </div>
                    <div className={style['icon']}>
                        <i class="fa-solid fa-wifi" style={{ color: '#213d489e', fontSize: '20px' }}></i>
                        <p>Wifi</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={style['card__item']}>
            <div className={style['padding__div']}>
                <figure>
                    <img src={Card3} alt='' />
                </figure>
                <div className={style['header__icon']}>
                    <div className={style['rate']}>
                        <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                        <p>4.8</p>
                    </div>
                    <div className={style['wishlist']}>
                        <i class="fa-regular fa-heart" style={{ color: '#EFC968' , fontSize: '20px'}}></i>
                    </div>
                </div>
                <h3>Wilderness Club at Big Ceddar</h3>
                <p>2 Bedroom Combined Lodge</p>
                <h4>100$ <span>/per night</span></h4>
                <div className={style['card__icons']}>
                    <div className={style['icon']}>
                        <img src={BedIcon} alt='' />
                        <p>4 Beds</p>
                    </div>
                    <div className={style['icon']}>
                        <img src={PeoIcon} alt='' />
                        <p>4 People</p>
                    </div>
                    <div className={style['icon']}>
                        <i class="fa-solid fa-wifi" style={{ color: '#213d489e', fontSize: '20px' }}></i>
                        <p>Wifi</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CardsEn;