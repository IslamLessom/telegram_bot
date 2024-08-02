import { useEffect, useState } from 'react'
import { Button } from './Components/Button/Button'
import { Card } from './Components/Card/Card'
import { Cart } from './Components/Cart/Cart'

import { getData } from './db/db'

import './App.css'

const tele = window.Telegram.WebApp

const foods = getData()

function App() {
  const [cartItems, setCartItems] = useState([])

    useEffect(() => {
      tele.ready()
    })

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = 'Pay :)'
    tele.MainButton.show()
  }

  return (
    <>
      <h1 className='heading'>Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className='cards__container'>
        {foods.map((food) => (
          <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove} />
        ))
        }
      </div>

    </>
  )
}

export default App
