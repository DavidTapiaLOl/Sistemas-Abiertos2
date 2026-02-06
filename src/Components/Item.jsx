import React from 'react'

export default function Item({ item, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const { id, price, name, image, quantity } = item;

  return (
    <tr>
      <td>
        <img className="img-fluid" src={image} alt={name} />
      </td>
      <td>{name}</td>
      <td className="fw-bold">${price}</td>
      <td className="flex align-items-start gap-4">
        <button 
          type="button" 
          className="btn btn-dark"
          onClick={() => decreaseQuantity(id)}
        >
          -
        </button>
        {quantity}
        <button 
          type="button" 
          className="btn btn-dark"
          onClick={() => increaseQuantity(id)}
        >
          +
        </button>
      </td>
      <td>
        <button 
          className="btn btn-danger" 
          type="button"
          onClick={() => removeFromCart(id)}
        >
          X
        </button>
      </td>
    </tr>
  );
}