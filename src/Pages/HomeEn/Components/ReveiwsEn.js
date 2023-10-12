import React, { useState } from 'react'
import style from '../HomeEn.module.css'
import User from '../../../assets/default-user.png'






function ReveiwsEn() {
    return (
        <>
        <div className={style['reveiw__card']}>
            <div className={style['padding__div']}>
                <div className={style['reveiw__content']}>
                    <div className={style['stars']}>
                        <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                        <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                        <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                        <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                        <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                    </div>
                    <div className={style['cleint__reveiw']}>
                        <div className={style['cleint__info']}>
                            <img src={User} alt='' />
                            <div className={style['name__date']}>
                                <h3>Mohammed Elsaid</h3>
                                <p>Jan 20, 2023</p>
                            </div>
                        </div>
                        <p>I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ReveiwsEn;