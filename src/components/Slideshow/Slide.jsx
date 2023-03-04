import React from 'react'
import { Slide } from 'react-slideshow-image'
import { useParams } from "react-router-dom"
import products from "../../assets/data/products"
import './slide.css'
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
    const { id } = useParams();
    const product = products.find((item) => item.id === id)
    const { imgUrl, imgUrl2, imgUrl3 } = product

    return (
        <div className="Carausel">
        <Carousel slide={false}>
            <Carousel.Item>
            <div className="product_img">
                <img
                    className="d-block"
                    src={imgUrl}
                    alt="First slide"
                />                
            </div>

            </Carousel.Item>
            <Carousel.Item>
            <div className="product_img">
                <img
                    className="d-block"
                    src={imgUrl2}
                    alt="Second slide"
                />                
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="product_img">
                <img
                    className="d-block"
                    src={imgUrl3}
                    alt="Third slide"
                />                
            </div>

            </Carousel.Item>
        </Carousel>            
        </div>

    );
}

export default Slider;