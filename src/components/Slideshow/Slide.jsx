import React from 'react'
import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import { useParams } from "react-router-dom"
import products from "../../assets/data/products"
import './slide.css'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';

const URL = "http://api.zamonshop.uz/uploads/"


function Slider() {

    async function GetProduct() {   
        const response = await axios.get('http://api.zamonshop.uz/api/v1/products')
        console.log(response.data.products);
        setData(response.data.products)
    }

    useEffect(() => {
        GetProduct()
    }, [])
    const [data , setData] = useState([])

    const { id } = useParams();
    const product = products.find((item) => item.id === id)
    const {  } = product

    return (
        <div className="Carausel">
        <Carousel slide={false}>
            <Carousel.Item>
            <div className="product_img">
                <img
                    className="d-block"
                    src=""
                    alt="First slide"
                />                
            </div>

            </Carousel.Item>
            <Carousel.Item>
            <div className="product_img">
                <img
                    className="d-block"
                    src=""
                    alt="Second slide"
                />                
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="product_img">
                <img
                    className="d-block"
                    src=""
                    alt="Third slide"
                />                
            </div>

            </Carousel.Item>
        </Carousel>            
        </div>

    );
}

export default Slider;