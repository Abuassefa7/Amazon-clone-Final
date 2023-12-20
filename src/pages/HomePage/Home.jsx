import React from 'react'
import "./Home.css"
import Product from '../Product/Product'
import Homeslide from './Homeslide'


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
          <Homeslide/>
            {/* <img
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt=''
            /> */}
            <div className='home__row'>
              <Product
              id="12341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81SwhbLNyiL._AC_SX679_.jpg"
              /> 
              <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/> 
              <Product
              id="4903850"
              title="Ninja NC301 CREAMi Ice Cream Maker, for Gelato, Mix-ins, Milkshakes, Sorbet, Smoothie Bowls & More"
              price={199.99}
              rating={3}
              image=" https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yriiDidWL._AC_SL1500_.jpg"

             
              /> 
              <Product
              id="23445930"
              title="Instant Pot 10-Quart Air Fryer, From the Makers of Instant Pot, 7-in-1 Functions, with EvenCrisp Technology, App with over 100 Recipes, Stainless Steel"
              price={129.99}
              rating={4}
              image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gZ5WDqAdL._AC_SL1500_.jpg" 
              /> 
            </div>
            <div className='home__row'>
               <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
               /> 
               <Product
               id="23445930"
               title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
               price={98.99}
               rating={5}
               image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
               
               /> 
               <Product
               d="3254354345"
               title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
               price={598.99}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
               />
               
            </div>
            <div>
            <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />

            </div>

        </div>
    </div>
  )
}

export default Home