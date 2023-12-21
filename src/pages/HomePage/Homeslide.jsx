import React from 'react'

import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css'
import Gaming from "../../assets/images/Gaming.jpg";
import Shop from "../../assets/images/Shop.jpg";
import kitchen from "../../assets/images/Kitchen.jpg"


function Homeslide() {

  return (

    
    <Carousel fade={true} pause={false} indicators={false}>
			<Carousel.Item interval={2000}>

			<img
					className="home__image d-block w-100"
					// src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NlLqRisvL._SX3000_.jpg"
					src="https://m.media-amazon.com/images/I/71-xs7rzA-L._SX3000_.jpg"

					alt="Third slide"
				/>

				
			</Carousel.Item>
			<Carousel.Item interval={2000}>
			<img
					className="home__image d-block w-100"
					src="https://m.media-amazon.com/images/I/710Q61rv7mL._SX3000_.jpg"
					alt="Third slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
			<img
					className="home__image d-block w-100"
					// src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					
					src={kitchen}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img
					className="home__image d-block w-100"
					src="https://m.media-amazon.com/images/I/71pYMdL5beL._SX3000_.jpg"
					alt="Third slide"
				/>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img
					className="home__image d-block w-100"
					src="https://m.media-amazon.com/images/I/7191th9dBnL._SX3000_.jpg"
					alt="Third slide"
				/>
			</Carousel.Item>
			
		</Carousel>
    

   


  )
}

export default Homeslide