import React from 'react'
import './Cart.css'
import { Button } from '../Button/Button'

export const Cart = ({ cartItems, onCheckout}) => {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
    return (
        <div className='cart__containter'>
            {cartItems.length === 0 ? <p>Your cart is empty</p> : ""}
            <br /> <span className=''>Total Price: ${totalPrice.toFixed(2)}</span>
            <Button
                title={`${cartItems.length === 0 ? "Order !" : "Checkout"}`}
                disable={cartItems.length === 0 ? true : false}
                type={'checkout'}
                onClick={onCheckout}
            />
        </div>
    )
}
