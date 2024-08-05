import React from 'react'
import '../styles/card.css'

const Card = ({ item, handleClick }) => {

  const { title, author, price, img } = item

  return (
    <div className='cards'>
      <div className='image-box'>
        <img src={img} alt={title} className='image' />
      </div>
      <div className="details">
        <span>{title}</span>
        <h4>{author}</h4>
        <h4>Price:{price} Rs</h4>
        <button type="button" onClick={(e) => {
          e.preventDefault();
          handleClick(item);
        }}>
          <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
        </button>
      </div>
    </div>
  )
}

export default Card