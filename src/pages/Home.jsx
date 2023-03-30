import { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet'
import HeroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import Services from '../components/Services/Services'
import ProductList from '../components/Ul/ProductList'
import IndividualIntervalsExample from '../components/Carausel/Carausel';
import Vector from '../assets/images/Vector.svg'
import '../styles/home.css'
import axios from 'axios';
const url = "https://api.zamonshop.uz/api/v1"
const Home = () => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        axios
        .get(url)
        .then(data => {
            console.log(data.data);
        })
    },[]);
    const [trendingProducts, setTrendingProducts] = useState([])
    const [wirlessProducts, setWirlessProducts] = useState([])
    const [mobileProducts, setMobileProducts] = useState([])
    const [saleProducts, setSaleProducts] = useState([])

    const [productsData, setProductsData] = useState(products)

    const handleSearch = e => {
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }

    // useEffect(() => {
    //     const filtrredProducts = products.filter(
    //         item => item.category === "chair"
    //     );

    //     const filtrredTrendingProducts = products.filter(
    //         item => item.category === "chair"
    //     );

    //     const filtrredWirelessProducts = products.filter(
    //         item => item.category === "wireless"
    //     );
    //     const filtrredMobileProducts = products.filter(
    //         item => item.category === "mobile"
    //     );

    //     const filtrredSaleProducts = products.filter(
    //         item => item.category === "sofa"
    //     );
    //     setTrendingProducts(filtrredTrendingProducts);
    //     setWirlessProducts(filtrredWirelessProducts);
    //     setMobileProducts(filtrredMobileProducts);
    //     setSaleProducts(filtrredSaleProducts);

    // }, []);
    return (
        <Helmet title="Asosiy">
            <div className="Hero">
            <IndividualIntervalsExample />

            </div>
            <div className='Services'>
            </div>
            <section className='trending-products'>
                <h2 className="section-title"><span>Ko'p sotilganlar</span>  <img src={Vector} /></h2>
                <ProductList/>
            </section>
            <div className="Hero">
                <IndividualIntervalsExample />
            </div>
            <section className='arrival__products'>
                <h2 className="section-title"> <span>Любимые ароматы</span> <img src={Vector} /></h2>
                <div className='arrival-products'>
                    <ProductList data={mobileProducts} />
                </div>
                <div>

                </div>
            </section>
            <div className="Hero">
                <IndividualIntervalsExample />
            </div>
            <div className='Services'>
            </div>
            <section className='trending-products'>
                <h2 className="section-title"><span>Распродажа</span>  <img src={Vector} /></h2>
                <ProductList data={saleProducts} />
            </section>
        </Helmet>

    )

}

export default Home;