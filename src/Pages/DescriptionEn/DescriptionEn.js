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
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
import moment from 'moment'
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;


function DescriptionEn() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const dateFormat = 'DD/MM/YYYY';

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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1697056400429!5m2!1sen!2seg" style={{ border: 0, width: "100%", height: "455px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={style["booking__form"]}>
                    <h2>Book this room Now!</h2>
                    <form className={style["booking__form__content"]}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            style={{ display: 'flex' }}
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                placeholder="Your first name"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Middle Name"
                                placeholder="Your middle name"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Last Name"
                                placeholder="Your last name"
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            style={{ display: 'flex', marginTop: '20px' }}
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                placeholder="Your email"
                                style={{ width: '47.5%' }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Phone"
                                placeholder="Your phone number"
                                style={{ width: '47.5%' }}
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            style={{ margin: '20px 0px' }}
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="ID Number"
                                placeholder="Your ID number"
                                style={{ width: '97%' }}
                            />
                        </Box>
                        <div className={style["date__picker__labels"]}>
                            <label>Check in</label>
                            <label>Check out</label>
                        </div>
                        <div className={style["date__picker"]}>
                            <DatePicker
                                format={dateFormat}
                                style={{ width: '47.5%', borderRadius: '4px', padding: '16.5px 14px' }}
                                onChange={(date)=> {
                                    console.log(typeof date.$d); // Date object
                                    setStartDate(date)
                                }}
                                value={startDate}
                                />
                                
                            <DatePicker
                                format={dateFormat}
                                style={{ width: '47.5%', borderRadius: '4px', padding: '16.5px 14px' }} 
                                onChange={(date)=> {
                                    console.log(date); // Date object
                                    setEndDate(date)
                                }}
                                value={endDate}
                                />
                        </div>
                        <div className={style["booking__button"]}>
                            <button>Submit Booking</button>
                        </div>
                    </form>
                    <h2>Booking Rules:</h2>
                    <p>1)</p>
                    <p></p>
                </div>
            </div>
        </div>
        <FooterEn />
    </>);
}

export default DescriptionEn;