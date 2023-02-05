import React, { useState, useEffect } from 'react'

const Show = (props) => {
  const { data, handleDelete } = props;
  async function handleClick(event) {
    event.preventDefault()
    await handleDelete(data.id);
  }
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.productName}</td>
      <td>{data.productDescription}</td>
      <td>{data.categoryId}</td>
      <td>{data.categoryMaster.categoryName}</td>
      <td><button className='edit-btn' data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-pen-to-square"></i></button></td>
      <td><button onClick={handleClick} className='delete-btn'><i className="fa fa-trash" aria-hidden="true"></i></button></td>
    </tr>
  )
}

export default Show