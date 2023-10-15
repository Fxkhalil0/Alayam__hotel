import React, { useState } from "react";
import style from './RoomsEn.module.css'
import NavbarEn from "../Navbar/NavbarEn";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Bed from '../../assets/Home/search/Mask group.svg'
import Calender from '../../assets/Home/search/icon (1).svg'
import Search from '../../assets/Home/search/icon (2).svg'
import CardsEn from "../RoomsEn/Components/CardsEn";
import FooterEn from "../Footer/FooterEn";

function RoomsEn() {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showFilter, setShowFilter] = useState(false)
    const [selected, setSelected] = useState("")
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
    const toggleShowFilter = () => {
        setShowFilter(!showFilter)
    };
    const handleSortOptionClick = (option) => {
        setSelected(option);
        setShowFilter(false);
    };
    return (
        <>
            <NavbarEn />
            <div className={style["page__header"]}>
                <div className="container">
                    <h2>Our Rooms</h2>
                    <div className={style['search__bar']}>
                        <div className={style['beds__num']}>
                            <i class='bx bx-category' style={{ color: '#858585', fontSize: '27px' }}></i>
                            <div className={style['search__input']} onClick={toggleShowMenu}>
                                <label>Category</label>
                                <input type='text' placeholder='Select Category' readOnly />
                                {showMenu &&
                                    <div className={style["category__menu"]}>
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
            <div className={style["our__rooms"]}>
                <div className="container">
                    <div className={style["filter__bar"]}>
                        <p>All Rooms</p>
                        <div className={style["right__filter"]}>
                            <div className={style["filter"]}>
                                <i class="fa-solid fa-sliders"></i>
                                <p>Filter</p>
                            </div>
                            <p>Sort by <span onClick={toggleShowFilter}>{selected || 'Select an option'} <i class="fa-solid fa-chevron-down"></i></span></p>
                            {showFilter &&
                                <div className={style["filter__menu"]}>
                                    <ul>
                                        <li onClick={() => handleSortOptionClick("Newest")}>Newest</li>
                                        <li onClick={() => handleSortOptionClick("Rating")}>Rating</li>
                                        <li onClick={() => handleSortOptionClick("Low to high")}>Low to high</li>
                                        <li onClick={() => handleSortOptionClick("High to low")}>High to low</li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={style["card__container"]}>
                        <CardsEn />
                        <CardsEn />
                        <CardsEn />
                    </div>
                </div>
            </div>
            <FooterEn />
        </>
    );
}

export default RoomsEn;