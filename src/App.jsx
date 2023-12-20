import { useEffect, useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'
import Header from './pages/Header/Header'
import Home from './pages/HomePage/Home'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Loginpage/Login'
import { usestateValue } from './pages/StateProvider/StateProvider'
import { auth } from './pages/FirebaseFile/Firebase'
import Payment from './pages/Payment/Payment'
import { loadStripe} from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'

import Orders from './pages/Orders/Orders'
import Footer from './pages/Footer/Footer'

// const promise=loadStripe('pk_live_51OLvruHx0863Jw6EV3DgtVrvEnk7lukKeF2YKA0CSbU9mEAnAvkGuzRaSE8F8RjqSeyGJCbEqXbhUNyyNQSALmE400DD6SdGAg')
const promise=loadStripe('pk_test_51OO9t2JEoCI78LwkvwYYzg0MCT7PJvKGFyIgOTIlEIsc6V1o3dYo91kPyTKzPtOKxgGgydqFxrx90UdA5tLs87vo00sSUXkuQQ')


function App() {
  const [{},dispatch]=usestateValue()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })
  },[])
  
  return (
    
    <div className='App'>
    <Routes>
      <Route path='/' element={<><Header/> <Home/> <Footer/> </>}/>
      <Route path='/checkout' element={<> <Header/> <Checkout /> </>}/>
      <Route path='/login' element={ <> <Header/> <Login/></>  }/>
      <Route path='/payment' element={ 
        <Elements stripe={promise}> <Payment/> </Elements>
      
      }/>
      <Route path='Orders' element={<> <Header/> <Orders/></>}/>
     
      
    </Routes>
    </div>
    




  )
}

export default App


