import React from 'react';
import { useState } from 'react';
import '../styles/checkout.css'
import '../index.js'
import Succes from "../components/Succes/Succes"
import { useRef } from 'react';


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
    const [none , setNone] = useState('none')
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
        <div className="Kabinet">
            <div className="kabinetInfo">
                <div className="kabinetRegiser">
                    <div className="registerTel">
                        <h1 className='registerTitle'>Ma'lumotlarni to'ldiring</h1>
                        <div className="inputFic">
                            <span>Телефон номер</span>
                            <input className='input input' type="number" placeholder='+ 998 (00) 123 45 67' ref={phoneRef}/>
                        </div>

                        <div className="userInfo">
                            <div className="inputFic">
                                <span>Имя</span>
                                <input className='input' type="text" placeholder='Введите Имя' ref={nameRef}/>
                            </div>

                            <div className="inputFic">
                                <span>Фамилия</span>
                                <input className='input' type="text" placeholder='Введите Фамилия'/>
                            </div>
                        </div>
                    </div>


                    <div className="registerTel">
                        <h1 className='registerTitle'>Yetkazib beriladigan manzil</h1>


                        <div className="ZakazSelects">
                            <div className="custom-select">
                                <span>Город</span>
                                <select name="Viloyat" >
                                    <option selected disabled hidden value="">Выберите город</option>
                                    <option value="">Toshkent</option>
                                    <option value="">Samarqand</option>
                                    <option value="">Buxoro</option>
                                </select>
                            </div>
                                <div className="inputFic">
                                <span>To'liq Manzil</span>
                                <input className='input' type="text" placeholder='' ref={textRef}/>
                            </div>                            
                        </div>
                        <button className='saveButton' onClick={Add}>Buyurtma</button>
                    </div>
                </div>
            </div>
            <Succes none={none}/>
        </div>                    
        </div>
    );
}

export default Checkout;




