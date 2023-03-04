import React from 'react';
import '../../styles/productcard.css'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { cartAction } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';
function ProductCard({ item }) {
    const dispatch = useDispatch()
    const addToCard = () => {
        dispatch(cartAction.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }))
        toast.success('Savatga qo`shildi')
    }



    return (

        <div className="product-item">
            <Link path='productDetails' to={`/shop/${item.id}`} >
                <div className="product-img">
                    <img src={item.imgUrl} />
                </div>
            </Link>
            <div className="product__info">
                <div className="product-card_top">
                    <h3 className='product_name'>{item.productName}</h3>
                    <span className='company'>company name</span>
                    <span className='category'>{item.category}</span>
                </div>

                <div className="product-card_bottom">
                    <div className="price_box">
                        <span className="price_sale">200.000 so'm</span>
                        <span className="price">{item.price}.000 so'm</span>
                    </div>
                    <span className='buy__item ' onClick={addToCard}>
                        <i class="fa-solid fa-cart-plus"></i>
                    </span>
                </div>
            </div>

        </div>


    );
}

export default ProductCard;