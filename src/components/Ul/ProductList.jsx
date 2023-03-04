import React from 'react';
import ProductCard from '../Ul/ProductCard'
import '../../styles/productlist.css'
import '../../styles/home.css'
function ProductList({data}) {
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