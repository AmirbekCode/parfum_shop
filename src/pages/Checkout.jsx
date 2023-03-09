import React from 'react';
import { useState } from 'react';
import '../styles/checkout.css'
import '../index.js'
import Succes from "../components/Succes/Succes"
import { useRef } from 'react';
import icon from '../assets/images/check-mark-emoji.png'

// get from bot father 
const botToken = "5676806378:AAEc7i88F2u7IYRc2wl1FJ1VMOYBqAoYdPE"
// get with js file scripts/bot-admin-id.js
const adminId = "871299874"

function Checkout() {

    const nameRef = useRef()
    const surnameRef = useRef()
    const textRef = useRef()
    const phoneRef = useRef()




    const InputRef = useRef()
    const [none, setNone] = useState('none')
    function Add() {
        if (InputRef.current.value == '') {
            setNone('none')
            alert("Bo'limlar to'ldirilmagan")
        }
        if (InputRef.current.value != '') {
            setNone('Succes')
            setTimeout(() => {
                setNone('none')
            }, 3900);

        }
    }



    return (
        <div className='checkOut'>
            <div className="kabinetInfo">
                <div className="kabinetRegiser">
                    <div className="registerTel">
                        <h1 className='registerTitle'>Ma'lumotlarni to'ldiring</h1>

                        <div className="userInfo">
                            <div className="inputFic">
                                <span>Имя</span>
                                <input className='input' type="text" placeholder='Введите Имя' ref={nameRef} />
                            </div>

                            <div className="inputFic">
                                <span>Фамилия</span>
                                <input className='input' type="text" placeholder='Введите Фамилия' />
                            </div>
                        </div>
                        <div className="inputFicPhone">
                            <p className='infoContact'> Buyurtmaning holati haqida siz ko'rsatgan telefon raqamiga xabarnoma yuboramiz.
                                Yetkazib berish vaqtini aniqlashtirish uchun kurer siz bilan telefon orqali bog'lanadi.</p>
                            <span>Телефон номер</span>
                            <input className='input' type="text" placeholder='+ 998 (00) 123 45 67' ref={phoneRef} />
                        </div>
                    </div>


                    <div className="registerTel">
                        <h1 className='registerTitle'>Yetkazib beriladigan manzil</h1>
                        <div className="ZakazSelects">
                            <div className="custom-select">
                                <span>Город</span>
                                <select name="Viloyat" >
                                    <option selected disabled hidden value="">Tuman, shahar</option>
                                    <option value="">Urganch sh.</option>
                                    <option value="">Xonqaa</option>
                                    <option value="">Shovot</option>
                                    <option value="">Yangiarik</option>
                                    <option value="">Bog'ot</option>
                                    <option value="">Xazarasp</option>
                                    <option value="">Yangibazaar</option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="inputFic">
                                <span>To'liq Manzil</span>
                                <input className='input' type="text" placeholder='' ref={textRef} />
                            </div>
                        </div>
                        <div className="shortInfo">
                            <span>
                                <img src={icon} className="check" />
                                <span className="shortInfodes">Buyurtmani saqlash muddati - 5 kun</span>
                            </span>
                            <span>
                                <img src={icon} className="check" />
                                <span className="shortInfodes"></span>
                            </span>
                            <span>
                                <img src={icon} className="check" />
                                <span className="shortInfodes"></span>
                            </span>
                        </div>
                        <button className='saveButton' onClick={Add}>Buyurtma Qilish</button>
                    </div>
                </div>
            </div>
            <Succes none={none} />
        </div>
    );
}

export default Checkout;




