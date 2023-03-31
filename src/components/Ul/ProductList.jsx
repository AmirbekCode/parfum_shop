import React, { useState , useEffect} from 'react';
import ProductCard from '../Ul/ProductCard'
import '../../styles/productlist.css'
import '../../styles/home.css'
import axios from 'axios';
const URL = "http://api.zamonshop.uz/uploads/"


function ProductList() {

    async function GetProduct() {
        const response = await axios.get('http://api.zamonshop.uz/api/v1/products')
        console.log(response.data.products);
        setData(response.data.products)
    }

    useEffect(() => {
        GetProduct()
    }, [])
    const [data , setData] = useState([])

    return ( 
        <div className='ProductList'>
            {
                data?.map((item, index)=>(
                    <ProductCard item={item} key={index}/>
                ))                
            }
        </div>
     );
}

export default ProductList;