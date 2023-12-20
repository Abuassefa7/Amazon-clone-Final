import React from 'react'
import "./CheckoutProduct.css"
import { usestateValue } from '../StateProvider/StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {
    
    const [{basket},dispatch]=usestateValue()
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })

    }
  return (
    <div className='checkoutproduct'>
        <img
        className='checkoutproduct__image'
        src={image}
        />
         <div className='checkoutproduct__info'>
            <p className='checkoutproduct__title'>{title}</p>
            <p className='checkoutproduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutproduct__rating'>
              {Array(rating)
              .fill()
              .map((el,i)=>( 

                <p key={i}>⭐</p>
              ))
              }
                
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      

    </div>
  )
}

export default CheckoutProduct