import React, { useEffect, useState } from 'react'
import { FaLessThanEqual } from 'react-icons/fa6'
import { VscError } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const cartItems =[]
const subtotal = 4000
const tax = Math.round(subtotal *0.18)
const shippingCharges = 200
const total = subtotal * shippingCharges+tax
const discount = Math.round(500)
const Cart = () => {
  const [cuponCode,setCuponCode] =useState<string>("")
  const [isValidCuponCode,setIsValidCuponCode] = useState<boolean>(false)
  useEffect(()=>{
    const val = Math.floor(Math.random()*15)
    console.log(val)
    if(val<5){
      setIsValidCuponCode(true)
    }
  },[cuponCode])
  return (
    <div className='cart'>
      <main>
        {
          cartItems.length>0 ? cartItems.map((i,idx)=>(
          <CartItem key={idx} CartItem={i}/>
          )):<h1>no item in cart</h1>
        }
      </main>
      <aside>
        <p>subtotal:${subtotal}</p>
        <p>shippingCharges:{shippingCharges}</p>
        <p>tax:${tax}</p>
        <p>Discount : <em>-${discount}</em></p>
        <p>
          <b>total:${total} </b> 
        </p>
        <input type="text" value={cuponCode} onChange={(e)=>setCuponCode(e.target.value)} placeholder='enter cupon  code' />
        {
          cuponCode && (isValidCuponCode?
          <p className='green'>${discount}off the using <code>{cuponCode} </code></p>:
          <p className='red'>invalid cupon code <VscError/></p>)
        }
{
  cartItems.length>0 && <Link to="/shipping">check out</Link>
}
      </aside>
    </div>
  )
}

export default Cart