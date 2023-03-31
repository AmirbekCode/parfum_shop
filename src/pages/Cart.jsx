import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet'
import '../styles/cart.css'
import { cartAction } from "../redux/slices/cartSlice"
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import div from '../assets/images/div.png'
const URL = "http://api.zamonshop.uz/uploads/"
function Cart() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmout = useSelector((state) => state.cart.totalAmout);
    const [items, setItems] = useState([]);
    return (
        <div>
            <Helmet title="Korzinka">
                <section className='tableCart'>
                    {
                        cartItems.length === 0 ? <h2 className='nothing'>Sizda hozircha buyurtmalar yo'q</h2> :
                            <div className='ListCart'>
                                {
                                    cartItems.map((item, index) => (
                                        <div className='CardCart'>

                                            <div className='imgandinfo'>
                                                <img src={URL + item.images[0]} className="tdimg" />
                                                <div className="infoscart">
                                                    <span className='product-name-c'>{item.productName}</span>
                                                    <span className='qunty'>{item.quantity} dona</span>
                                                    <span className='company_cart'>
                                                        <span className='figm'>Продавец:</span>
                                                        <span className='company_item'>Dior</span>
                                                    </span>
                                                    <span>{item.category}</span>
                                                </div>
                                            </div>
                                            <div className="itogo">
                                                <div className='delete'>
                                                    <i class="fa-solid fa-trash"></i>
                                                    <span> O`chirish</span>
                                                </div>
                                                <div className="price_sec_cart">
                                                    <span>{item.price}.000.so'm</span>
                                                    <span className="sale_price_det">200.000 so'm</span>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                    }
                    <section className='checkoutList'>
                        <div className='list-top'>
                            <img src={div} />
                            <span className="title_tr">
                                Buyurtmangizni 2kun ichida bepul yetkazib beramiz
                            </span>
                        </div>
                        <hr />
                        <div className='list-bottom'>
                            <span className='vashzakas'>Sizning buyurtmangiz</span>
                            <div className="price-list">
                                <span className="itog">
                                    Итого:
                                </span>
                                <h2 className="totolAmout">{totalAmout}.000so`m</h2>
                            </div>
                            <Link to="/shop"><button className='checkout-btns'>Dokonga Qaytish</button></Link>
                            <Link to="/checkout"><button className='checkout-btns'>Sotib Olish</button> </Link>
                        </div>
                        </section>
                </section>
            </Helmet>
        </div>
    );
}

export default Cart;