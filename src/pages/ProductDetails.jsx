import {useState , useEffect} from 'react';
import { useParams } from "react-router-dom"
import products from "../assets/data/products"
import "../styles/productdetails.css"
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify';
import Slideshow from '../components/Slideshow/Slide';
import { Link } from 'react-router-dom';
import ProductList from '../components/Ul/ProductList';
import Vector from '../assets/images/Vector.svg'
import axios from 'axios';

const ProductDetails = ({ item }) => {
    const { id } = useParams();
    const product = products.find((item) => item.id === id)
    const { image, title, price, description, discountPercentage } = product

    const dispatch = useDispatch()
    const ToCard = () => {
        dispatch(cartAction.addItem({
            id: product.id,
            productName: product.name,
            price: product.price,
            image: product.URL + image,
        }))
        toast.success('Savatga qo`shildi')
    }    


    return (
        <div className="opshisection">
        <section className='ProductDetails'>
            <Slideshow />
            <div className="product_details">
                <h1 className='product__name'>{title}</h1>
                <div className="extra_info">
                    <span className='df-sp'>
                        <span>Компания:</span>
                        <span>company name</span>
                    </span>
                    <span className='df-sp'>
                        <span>Категория:</span>
                        <span>{}</span>
                    </span>
                    <span className='df-sp'>
                        <span>Доставка:</span>
                        <span>1 день, бесплатно </span>
                        <i class="fa-solid fa-truck"></i>
                    </span>
                </div>
                <hr />
                <div className="product__price">
                    <span className="title_price">
                        Цена:
                    </span>
                    <div className="price_box2">
                        <span className="price_item">{price}.000 so'm</span>
                        <span className="sale_price_det">200.000 so'm</span>
                    </div>
                </div>
                <div className="Buttons">
                    <div className="priceresponsive">
                    <span className="price_item">{price}.000 so'm</span>
                        <span className="sale_price_det">200.000 so'm</span> 
                    </div>
                    <button className='add_button_zakas' onClick={ToCard}>
                        <i className="ri-shopping-cart-line"></i>
                        Korzinkaga qo'shish
                    </button>
                    <Link to='/checkout'>
                     <button className='add_button_zakas-solid'>
                        <i class="fa-solid fa-truck"></i>
                        Buyurtma qilish
                    </button>                       
                    </Link>

                </div>
                <p>{description}</p>
            </div> 
        </section>                 
        </div>


    );  
}

export default ProductDetails;