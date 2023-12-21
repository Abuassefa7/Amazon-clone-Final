import React from 'react'
import "./Product.css"
import { usestateValue } from '../StateProvider/StateProvider'


function Product({id,title,image,price,rating}) {
  const [{basket},dispatch]=usestateValue();
  // console.log("this is the basket",basket)

  const addToBasket=()=> {
dispatch({
  type:"ADD_TO_BASKET",
    item:{
    id:id,
    title:title,
    image:image,
    price:price,
    rating:rating,
    quantity: 1,

  }
})
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
              {Array(rating)
              .fill()
              .map((el,i)=>( 

                <p key={i}>⭐</p>
              ))
              }
                
            </div>
        </div>
       
        <img src={image}/> 
          
        <button onClick={addToBasket}>Add to Cart</button>
       
    </div>
  )
}

export default Product