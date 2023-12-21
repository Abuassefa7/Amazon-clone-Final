import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { Link, useNavigate } from 'react-router-dom'
import { usestateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import axios from '../axiosConfig/axiosConfig'
import {db} from "../FirebaseFile/Firebase"

function Payment() {
    const [{basket,user},dispatch]=usestateValue()

    // const getBasketTotal = (basket) =>
    // basket?.reduce((amount, item) => item.price + amount, 0);

     const getBasketTotal= (basket) => basket?.reduce((amount, item) => amount + item.price * item.quantity, 0);

    const getQuantity = (basket) => {
		return basket?.reduce((qty, item) => qty + item.quantity, 0);
	};
    
    const stripe=useStripe();
    const elements=useElements();

    const [error,setError]=useState(null)
    const [disabled,setDisabled]=useState(true)

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [clientSecret,SetClientSecrete]=useState(true);

    const navigate=useNavigate()

    useEffect(()=>{
        const getClientSecret=async ()=>{
            const response=await axios({
                method:'POST',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`,
            })
            SetClientSecrete(response.data.clientSecret)
        }
        getClientSecret()
    },[basket]);

    console.log("the secret is >>>",clientSecret)


        const handleSubmit = async(e)=>{
            e.preventDefault();
            setProcessing(true);

            const payload= await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card:elements.getElement(CardElement)
                
                },
              })
              .then(({ paymentIntent })=>{
                // paymentIntent=payment confirmation 
                db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .doc(paymentIntent?.id)
                .set({
                    basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
                })

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type:'EMPTY_BASKET',
                })

                navigate('/orders')
              })
 
        }

        const handleChange=e=>{
            setDisabled(e.empty)
            setError(e.error ? e.error.message:'')
        };
  
    return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                {/* Checkout {<Link to="/checkout">{basket.length} items</Link>} */}
                
                Checkout{" "}
					<Link to="/checkout">
						({getQuantity(basket)}{" "}
						{getQuantity(basket) === 1 ? "item" : "items"}):{" "}
					</Link>

            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 react lane</p>
                    <p>Chicago, IL</p>
                </div>
                
            </div>
           
            <div className='payment__section'>
                <div className='payment__title' >
                    <h3>Review items and delivery</h3>
                </div>
                
                <div className='payment__items'>
                {basket.map((item,id) => (
                    <CheckoutProduct
                        key={id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                    />
            ))}

                </div>
            </div>
            <div className='payment__section'>
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                            renderText={(value)=> <h3> Order Total:{value}</h3>}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            />
                            <button disabled={processing || disabled || succeeded}> <span>{processing?<p>processing</p> :'Buy Now'}</span></button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Payment