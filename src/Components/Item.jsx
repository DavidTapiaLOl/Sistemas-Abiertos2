import React from 'react'

export default function Item(item) {

    console.log(item);
    
    const {price,name,image} = item;
  return (
    <>
    <tbody>
      <tr>
        <td>
          <img className="img-fluid" src={image} alt="imagen guitarra" />
        </td>
        <td>{name}</td>
        <td className="fw-bold">${price}</td>
        <td>1</td>
        <td>
          <button className="btn btn-danger" type="button">
            X
          </button>
        </td>
      </tr>
    </tbody>
    </>
  );
}
