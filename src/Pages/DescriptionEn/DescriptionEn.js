import React, { useState, useEffect } from "react";
import style from './Description.module.css'
import NavbarEn from "../Navbar/NavbarEn";
import BedIcon from '../../assets/Home/cards/bed.png'
import PeoIcon from '../../assets/Home/cards/people.png'
import Image1 from '../../assets/Home/cards/card1.jpg'
import Image2 from '../../assets/Home/cards/card2.jpg'
import Image3 from '../../assets/Home/cards/card3.jpg'
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import FooterEn from "../Footer/FooterEn";


function DescriptionEn() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];
    const galleryData = [
        {
            itemImageSrc: Image1,
            thumbnailImageSrc: Image1,
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: Image2,
            thumbnailImageSrc: Image2,
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: Image3,
            thumbnailImageSrc: Image3,
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: Image1,
            thumbnailImageSrc: Image1,
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: Image2,
            thumbnailImageSrc: Image2,
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: Image3,
            thumbnailImageSrc: Image3,
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: Image1,
            thumbnailImageSrc: Image1,
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: Image2,
            thumbnailImageSrc: Image2,
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: Image3,
            thumbnailImageSrc: Image3,
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: Image1,
            thumbnailImageSrc: Image1,
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: Image2,
            thumbnailImageSrc: Image2,
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: Image3,
            thumbnailImageSrc: Image3,
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        
    ];

    useEffect(() => {
        setImages(galleryData);
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }
    return (<>
        <NavbarEn />
        <div className={style["main__div"]}>
            <div className={style["left__div"]}>
                <div className={style["nav__icons"]}>
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
                <div className={style["room__details"]}>
                    <div className="container">
                        <div className={style["room__images"]}>
                            <figure>
                                <img src={Image1} />
                            </figure>
                            <figure>
                                <img src={Image2} />
                                <img src={Image3} />
                            </figure>
                        </div>
                        <div className={style["room__content"]}>
                            <div className={style["title__icon"]}>
                                <h3>Wilderness Club at Big Ceddar</h3>
                                <div className={style["rate__range"]}>
                                    <i class="fa-solid fa-star" style={{ color: '#EFC968' }}></i>
                                    <p>4.8</p>
                                </div>
                            </div>
                            <p>2 Bedroom Combined Lodge</p>
                            <div className={style["wishlist__price"]}>
                                <i class="fa-regular fa-heart" style={{ color: '#EFC968' }}></i>
                                <h4>100$ <span>/per night</span></h4>
                            </div>
                            <div className={style["desc__icons"]}>
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
                                <div className={style['icon']}>
                                    <i class="fa-solid fa-wifi" style={{ color: '#213d489e', fontSize: '20px' }}></i>
                                    <p>Wifi</p>
                                </div>
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
                                <div className={style['icon']}>
                                    <i class="fa-solid fa-wifi" style={{ color: '#213d489e', fontSize: '20px' }}></i>
                                    <p>Wifi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["gallery"]}>
                    <div className="container">
                        <h2>Room Gallery</h2>
                        <div className="card">
                            <Galleria
                                value={images}
                                activeIndex={activeIndex}
                                onItemChange={(e) => setActiveIndex(e.index)}
                                responsiveOptions={responsiveOptions}
                                numVisible={5}
                                item={itemTemplate}
                                thumbnail={thumbnailTemplate}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style["right__div"]}>
                <div className={style["map"]}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1697056400429!5m2!1sen!2seg" style={{border:0, width:"100%", height:"455px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={style["booking__form"]}>
                    {/* <div className="container"> */}
                        <h2>Book this room Now!</h2>
                    {/* </div> */}
                </div>
            </div>
        </div>
        <FooterEn />
    </>);
}

export default DescriptionEn;