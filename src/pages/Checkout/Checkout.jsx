import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { usestateValue } from '../StateProvider/StateProvider'

function Checkout() {
    const [{basket},dispatch]=usestateValue()
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            />
            <h3>Hello</h3>
            <h2 className='checkout__title'>your shopping Basket</h2>
            {basket.map((item,i) => (
            <CheckoutProduct
                key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout