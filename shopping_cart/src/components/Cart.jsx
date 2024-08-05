import React, { useState } from 'react'

const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0)

    return (
        <div>
            {cart?.map((item) => (
                <div className="cart-box" key={item.id}>
                    <div className="cart-img">
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div className="cart-price">
                        <span>{item.price}</span>
                        <button>Remove</button>
                    </div>
                </div>
            ))}
            <div className="cart-total">
                <p>Total Price: {price}</p>
            </div>
        </div>
    )
}

export default Cart