import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image" alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"/>

        {/* Product id, name, price, rating, image */}
            <div className="home_row">
                <Product 
                id = "123456"
                title="Skullcandy Uproar Wireless On-Ear Headphone - White/Grey"
                price= {2649.03}
                rating ={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61icm7bkfiL._AC_SX425_.jpg"/>

                <Product 
                id = "123457"
                title="Milton Aqua 1000 Stainless Steel Water Bottle, 950 ml, Silver"
                price={335.00}
                rating ={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61X1b09mK0L._SX679_.jpg"/>
            </div>
                {/* Product */}

            <div className="home_row">
                <Product 
                id = "123458"
                title="Samsung Galaxy M31s (Mirage Blue, 8GB RAM, 128GB Storage)"
                price={21,499.00}
                rating ={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SY550_.jpg"/>

                <Product 
                id = "123459"
                title="Samsung Galaxy M01 Core (Red, 1GB RAM, 16GB Storage) with No Cost EMI/Additional Exchange Offers"
                price={5,499.00}
                rating ={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71UZfRHB7UL._SY550_.jpg"/>

                <Product 
                id = "123451"
                title="JBL Tune 500BT Powerful Bass Wireless On-Ear Headphones with Mic, 16 Hours Playtime & Multi Connect Connectivity (Black)"
                price={3,399.00}
                rating ={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51WKFjmQSKL._SY879_.jpg"/>       
            </div>

            <div className="home_row">
                <Product 
                id = "123453"
                title="Vidiem MG 518 A VSTAR Premium 750 Watts Juicer Mixer Grinder (Black, 5 Jars)"
                price={5,190.00}
                rating ={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71ORK9SAuxL._SX679_.jpg"/>
            </div>
        </div>
    )
}

export default Home

