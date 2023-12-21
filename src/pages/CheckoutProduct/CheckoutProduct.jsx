import React from 'react'
import "./CheckoutProduct.css"
import { usestateValue } from '../StateProvider/StateProvider'

function CheckoutProduct({id,title,image,price,rating,quantity,
	hideButton,}) {
    
    const [{basket},dispatch]=usestateValue()


    const addToBasket = () => {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          quantity: 1,
        },
      });
      // console.log(item)
    };
  
    const DeleteItem = () => {
      dispatch({
        type: "DELETE",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          quantity: 1,
        },
      });
      // console.log(item)
    };

    // const removeFromBasket=()=>{
    //     dispatch({
    //         type:"REMOVE_FROM_BASKET",
    //         id:id,
    //     })

    // }
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

            {!hideButton && (<p className='Qty'>Qty= {quantity}</p>)}
				<br />

				{!hideButton && (
					<button onClick={addToBasket}>
						{" "}
						<strong>Add</strong>
					</button>
				)}
				{!hideButton && (
					<button onClick={DeleteItem}>
						<strong>Delete</strong>
					</button>
				)}


            {/* <button onClick={removeFromBasket}>Remove from Basket</button> */}
        </div>
      

    </div>
  )
}

export default CheckoutProduct