import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import Logo from '../../assets/images/logotip.png'
import products from "../../assets/data/products"
import {BiSearchAlt2} from 'react-icons/bi'
import {TbCategory2} from 'react-icons/tb'
import {BsChevronRight} from 'react-icons/bs'
import elektronika  from '../../img/elektronika.png'
import book  from '../../img/book.png'
import sport  from '../../img/sport.png'
import car  from '../../img/car.png'
import blender  from '../../img/blender.png'
import Kiyimlar  from '../../img/kiyim.png'
import logo from  '../../img/logo.png'

const nav__link = [
  {
    path: "/",
    display: 'Asosiy'
  },
  {
    path: "shop",
    display: 'Do`kon'
  },
  {
    path: "Cart",
    display: 'Sotib Olish'
  },
]

const Header = ({ setProductsData }) => {

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  const [categoryOnOf , setCategoryOnOf] = useState('categorys none')

  const menuRef = useRef(null)
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  return (
    <header className="header">
      <div className="nav-wrapper">
        <NavLink to='/'>
        <div className="logo">
          <img src={logo} className='logoimg'/>
        </div>          
        </NavLink>
        <div className="navigation " ref={menuRef} onClick={menuToggle}>
          <button onClick={
            () => categoryOnOf == 'categorys none' ? setCategoryOnOf('categorys') 
            : setCategoryOnOf('categorys none')
            } 
            className="categoryBtn">
              <TbCategory2 className="categoryIcon"/> 
              <span>Kategory</span>
            </button>
          <div className="navsearch">
            <input type="text" placeholder="Izlash..."/>
            <button><BiSearchAlt2/></button>
          </div>
        </div>
        <div className="nav-icons">
          {/* <NavLink to="/">
            <span className="fav-icon">
              <i class="ri-home-line"></i>
            </span>
          </NavLink> */}
            <NavLink to="/shop">
              <span className="fav-icon" to="cart">
              <i class="ri-shopping-bag-line" to={nav__link.path}></i>
              <span className="korzina korzinanone">Все товары</span>
          </span>
            </NavLink>
          <NavLink to="/cart">
            <span className="cart-icon">
              <i class="ri-shopping-cart-line"></i>
              <span className="korzina">Корзина</span>
              <span className="badge">{totalQuantity}</span>
            </span>
          </NavLink>
          <div className="mobile-menu">
            <span onClick={menuToggle}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
      <ul className="hederCategory">
        <li>Atrlar</li>
        <li>Kiyimlar</li>
        <li>Texnika</li>
        <li>Telefonlar</li>
        <li>Salomatlik</li>
        <li>Bolalar Uchun</li>
        <li>Kattalar Uchun</li>
        <li>Maishiy Texnika</li>
        <li>Avtombilar Uchun</li>
      </ul>
      <div className={categoryOnOf}>
          <ul className="categoryList">
            <li>
              <img src={elektronika} alt="" />
              <span>Elektronika</span>
              <BsChevronRight className="categorylistNextBtn"/>
            </li>
            <li>
              <img src={blender} alt="" />
              <span>Maishiy Texnika</span>
              <BsChevronRight className="categorylistNextBtn"/>
            </li>
            <li>
              <img src={Kiyimlar} alt="" />
              <span>Kiyimlar</span>
              <BsChevronRight className="categorylistNextBtn"/>
            </li>
            <li>
              <img src={car} alt="" />
              <span>Avtomobillar</span>
              <BsChevronRight className="categorylistNextBtn"/>
            </li>
            <li>
              <img src={sport} alt="" />
              <span>Sport</span>
              <BsChevronRight className="categorylistNextBtn"/>
            </li>
            <li>
              <img src={book} alt="" />
              <span>Kitoplar</span>
              <BsChevronRight className="categorylistNextBtn"/>
            </li>
          </ul>
          <div className="categoryProducts">
            <span className="categoryProductsTitle">Elektronika</span>
            <div className="categoryProducts_product">
              <ul>
                <span>Smartfon va Telefonlar</span>
                <li>Aksessuarlar va ehtiyot qismlari</li>
                <li>Smartfonlar</li>
                <li>Knopkali telefonlar</li>
                <li>DECT-telefonlar</li>
                <li>Simli telefonlar</li>
              </ul>
              <ul>
                <span>Smartfon va Telefonlar</span>
                <li>Aksessuarlar va ehtiyot qismlari</li>
                <li>Smartfonlar</li>
                <li>Knopkali telefonlar</li>
                <li>DECT-telefonlar</li>
                <li>Simli telefonlar</li>
              </ul>
              <ul>
                <span>Smartfon va Telefonlar</span>
                <li>Aksessuarlar va ehtiyot qismlari</li>
                <li>Smartfonlar</li>
                <li>Knopkali telefonlar</li>
                <li>DECT-telefonlar</li>
                <li>Simli telefonlar</li>
              </ul>
              <ul>
                <span>Smartfon va Telefonlar</span>
                <li>Aksessuarlar va ehtiyot qismlari</li>
                <li>Smartfonlar</li>
                <li>Knopkali telefonlar</li>
                <li>DECT-telefonlar</li>
                <li>Simli telefonlar</li>
              </ul>
            </div>
          </div>
      </div>
    </header>
  );
}

export default Header;