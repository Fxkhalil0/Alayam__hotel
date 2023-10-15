import React, { useState } from 'react'
import style from './HomeEn.module.css'
import NavbarEn from '../Navbar/NavbarEn'
import Hero from '../../assets/_DSF4017.jpg'
import Bed from '../../assets/Home/search/Mask group.svg'
import Calender from '../../assets/Home/search/icon (1).svg'
import Search from '../../assets/Home/search/icon (2).svg'
import Payment from '../../assets/Home/payment.svg'
import SimpleSearch from '../../assets/Home/search.svg'
import Support from '../../assets/Home/support.svg'
import Nice from '../../assets/Home/nice.svg'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CardsEn from './Components/CardsEn'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReveiwsEn from './Components/ReveiwsEn'
import Logo from '../../assets/2.png'
import FooterEn from '../Footer/FooterEn'



function HomeEn() {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false)

    const toggleShowMenu = () => {
        setShowMenu(!showMenu)
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 576 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <NavbarEn />
            <section className={style['hero__section']}>
                <div className='container'>
                    <div className={style['hero__banner']}>
                        <img src={Hero} alt='' />
                        <div className={style['hero__content']}>
                            <h1>Book Now your room for</h1>
                            <h1>your vacation and Enjoy it!</h1>
                            {/* <p>We have several thousand rooms for</p>
                            <p>every taste in every corner of the hotel</p> */}
                        </div>
                        <div className={style['search__bar']}>
                            <div className={style['beds__num']}>
                                <i class='bx bx-category' style={{ color: '#858585', fontSize: '27px' }}></i>
                                <div className={style['search__input']} onClick={toggleShowMenu}>
                                    <label>Category</label>
                                    <input type='text' placeholder='Select Category' readOnly />
                                    {showMenu &&
                                        <div className={style["filter__menu"]}>
                                            <ul>
                                                <li>Double room</li>
                                                <li>Triple Room</li>
                                                <li>Small Suite (2 rooms)</li>
                                                <li>Large suite (3 rooms)</li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className={style['date']}>
                                <img src={Calender} alt='' />
                                <div className={style['search__input']} onClick={openModal}>
                                    <label>When</label>
                                    <input type='text' placeholder='Select Date' readOnly />
                                </div>
                                {isModalOpen && (
                                    <div className={style['calender__modal']}>
                                        <i class="fa-solid fa-x" onClick={closeModal}></i>
                                        <div className={style['modal__content']}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                                    <DemoItem>
                                                        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                                                    </DemoItem>
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button><img src={Search} alt='' /></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style['why__section']}>
                <div className='container'>
                    <div className={style['why__title']}>
                        <h2>Why Choose Us</h2>
                        <p>The main reason is because our competitors have</p>
                        <p>disgusting sites, but we can' t write that here,</p>
                        <p>so the text here will be different</p>
                    </div>
                    <div className={style['why__boxes']}>
                        <div className={style['why__item']}>
                            <figure>
                                <img src={Payment} alt='' />
                            </figure>
                            <div className={style['why__content']}>
                                <h3>Payment methods</h3>
                                <p>We have a lot of them,</p>
                                <p>from cryptocurrencies to barter</p>
                                <p>for potatoes</p>
                            </div>
                        </div>
                        <div className={style['why__item']}>
                            <figure>
                                <img src={SimpleSearch} alt='' />
                            </figure>
                            <div className={style['why__content']}>
                                <h3>Simple search process</h3>
                                <p>We checked it out, even the kid</p>
                                <p>did it, but it was my mom's</p>
                                <p>friend's son</p>
                            </div>
                        </div>
                        <div className={style['why__item']}>
                            <figure>
                                <img src={Support} alt='' />
                            </figure>
                            <div className={style['why__content']}>
                                <h3>24/7 Support</h3>
                                <p>Is there something you don't</p>
                                <p>understand? Feel free to call us.</p>
                                <p>Phone number in the footer</p>
                            </div>
                        </div>
                        <div className={style['why__item']}>
                            <figure>
                                <img src={Nice} alt='' />
                            </figure>
                            <div className={style['why__content']}>
                                <h3>We are nice</h3>
                                <p>Fantasy is over,</p>
                                <p>there will be something</p>
                                <p>really convincing here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style['top__rooms']}>
                <div className='container'>
                    <h2>Top Rated Rooms</h2>
                    <div className={style['cards__boxes']}>
                        <CardsEn />
                    </div>
                </div>
            </section>
            <section className={style['reveiws__section']}>
                <div className='container'>
                    <h2>Clients Reviews</h2>
                    <Carousel responsive={responsive}>
                        <ReveiwsEn />
                        <ReveiwsEn />
                        <ReveiwsEn />
                        <ReveiwsEn />
                    </Carousel>
                </div>
            </section>
            <FooterEn />
        </>
    );
}

export default HomeEn;