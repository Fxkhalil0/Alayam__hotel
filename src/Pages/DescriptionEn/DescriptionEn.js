import React, { useState, useEffect } from "react";
import style from './Description.module.css'
import NavbarEn from "../Navbar/NavbarEn";
import BedIcon from '../../assets/Home/cards/bed.png'
import PeoIcon from '../../assets/Home/cards/people.png'
import Image1 from '../../assets/Home/cards/card1.jpg'
import Image2 from '../../assets/Home/cards/card2.jpg'
import Image3 from '../../assets/Home/cards/card3.jpg'
import User from '../../assets/default-user.png'
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import FooterEn from "../Footer/FooterEn";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FaStar } from 'react-icons/fa';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
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
    const [userRate, setUserRate] = useState(null)
    const [rateHover, setRateHover] = useState(null)
    const [userName, setUserName] = useState("Your Name")
    const [userComment, setUserComment] = useState("Here's your comment")

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
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 70%;
        height: 200px !important;
        resize: none;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    )
    return (<>
        <NavbarEn />
        <div className={style["main__div"]}>
            <div className={style["left__div"]}>
                <div className={style["nav__icons"]}>
                    <div className={style['icon']}>
                        <i class='bx bx-category' style={{color:'#858585', fontSize: '27px'}}></i>
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
                                onChange={(date) => {
                                    console.log(typeof date.$d); // Date object
                                    setStartDate(date)
                                }}
                                value={startDate}
                            />

                            <DatePicker
                                format={dateFormat}
                                style={{ width: '47.5%', borderRadius: '4px', padding: '16.5px 14px' }}
                                onChange={(date) => {
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
                    <div className={style["booking__rules"]}>
                        <div className={style["rules__content"]}>
                            <h2>Booking Rules:</h2>
                            <p>1) After booking, the reservations office will contact you to process the payment</p>
                            <p>2) If you need to cancel the tour you have booked, you can do so up to 24 hours before the scheduled tour date.</p>
                            <p>3) To request a tour cancellation, please contact us at <span>Alayam@support.com</span>. We will guide you through the cancellation process and initiate a refund if the trip was pre-paid.</p>
                            <p>4) There are no fees associated with the cancellation process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style["reveiw__section"]}>
            <div className={style["reveiw__padding"]}>
                <h2>Tell us your Experience</h2>
                <div className={style["reveiw__container"]}>
                    <form className={style["reveiw__form"]}>
                        <div className={style["rate__box"]}>
                            <div className={style["rate__stars"]}>
                                <Typography className={style["label"]}>Room Rate</Typography>
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1
                                    return <label>
                                        <input className={style["input"]}
                                            type='radio'
                                            name='rating'
                                            value={ratingValue}
                                            onClick={() => {
                                                setUserRate(ratingValue)
                                            }}

                                        ></input>
                                        <FaStar className={style["star"]}
                                            size={25}
                                            color={ratingValue <= (userRate || rateHover) ? "#ffc107" : "#e4e5e9"}
                                            onMouseEnter={() => {
                                                setRateHover(ratingValue)
                                            }}
                                            onMouseLeave={() => {
                                                setRateHover(null)
                                            }}
                                        />
                                    </label>
                                })}
                            </div>
                            <div className={style["rate__stars"]}>
                                <Typography className={style["label"]}>Room Rate</Typography>
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1
                                    return <label>
                                        <input className={style["input"]}
                                            type='radio'
                                            name='rating'
                                            value={ratingValue}
                                            onClick={() => {
                                                setUserRate(ratingValue)
                                            }}

                                        ></input>
                                        <FaStar className={style["star"]}
                                            size={25}
                                            color={ratingValue <= (userRate || rateHover) ? "#ffc107" : "#e4e5e9"}
                                            onMouseEnter={() => {
                                                setRateHover(ratingValue)
                                            }}
                                            onMouseLeave={() => {
                                                setRateHover(null)
                                            }}
                                        />
                                    </label>
                                })}
                            </div>
                            <div className={style["rate__stars"]}>
                                <Typography className={style["label"]}>Room Rate</Typography>
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1
                                    return <label>
                                        <input className={style["input"]}
                                            type='radio'
                                            name='rating'
                                            value={ratingValue}
                                            onClick={() => {
                                                setUserRate(ratingValue)
                                            }}

                                        ></input>
                                        <FaStar className={style["star"]}
                                            size={25}
                                            color={ratingValue <= (userRate || rateHover) ? "#ffc107" : "#e4e5e9"}
                                            onMouseEnter={() => {
                                                setRateHover(ratingValue)
                                            }}
                                            onMouseLeave={() => {
                                                setRateHover(null)
                                            }}
                                        />
                                    </label>
                                })}
                            </div>
                            <div className={style["rate__stars"]}>
                                <Typography className={style["label"]}>Room Rate</Typography>
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1
                                    return <label>
                                        <input className={style["input"]}
                                            type='radio'
                                            name='rating'
                                            value={ratingValue}
                                            onClick={() => {
                                                setUserRate(ratingValue)
                                            }}

                                        ></input>
                                        <FaStar className={style["star"]}
                                            size={25}
                                            color={ratingValue <= (userRate || rateHover) ? "#ffc107" : "#e4e5e9"}
                                            onMouseEnter={() => {
                                                setRateHover(ratingValue)
                                            }}
                                            onMouseLeave={() => {
                                                setRateHover(null)
                                            }}
                                        />
                                    </label>
                                })}
                            </div>
                        </div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        // style={{ marginTop: '20px' }}
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                placeholder="Your name"
                                style={{ width: '100%', marginBottom: '15px' }}
                                onChange={(e) => setUserName(e.target.value)}

                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                placeholder="Your email address"
                                style={{ width: '100%', marginBottom: '30px' }}

                            />
                        </Box>
                        <textarea
                            placeholder="Add your comment"
                            onChange={(e) => setUserComment(e.target.value)}
                            value={userComment}
                        />
                        <div className={style["reveiw__button"]}>
                            <button>Submit</button>
                        </div>
                    </form>
                    <div className={style['reveiw__card']}>
                        <div className={style['padding__div']}>
                            <div className={style['reveiw__content']}>
                                <div className={style['stars']}>
                                    <div className={style["card__rate__stars"]}>
                                        <Typography className={style["label"]}>Room Rate</Typography>
                                        {[...Array(5)].map((star, i) => {
                                            const ratingValue = i + 1
                                            return <label>
                                                <input className={style["input"]}
                                                    type='radio'
                                                    name='rating'
                                                    value={ratingValue}
                                                    onClick={() => {
                                                        setUserRate(ratingValue)
                                                    }}

                                                ></input>
                                                <FaStar className={style["star"]}
                                                    size={25}
                                                    color={ratingValue <= (userRate || rateHover) ? "#ffc107" : "#e4e5e9"}
                                                    onMouseEnter={() => {
                                                        setRateHover(ratingValue)
                                                    }}
                                                    onMouseLeave={() => {
                                                        setRateHover(null)
                                                    }}
                                                />
                                            </label>
                                        })}
                                    </div>
                                </div>
                                <div className={style['cleint__reveiw']}>
                                    <div className={style['cleint__info']}>
                                        <img src={User} alt='' />
                                        <div className={style['name__date']}>
                                            <h3>{userName}</h3>
                                            <p>Jan 20, 2023</p>
                                        </div>
                                    </div>
                                    <p>{userComment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterEn />
    </>);
}

export default DescriptionEn;