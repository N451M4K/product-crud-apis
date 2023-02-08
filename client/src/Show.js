import React, { useState, useEffect } from 'react'

const Show = (props) => {
  const { data, handleDelete, showChoosenContent } = props;
  async function handleClick(event) {
    event.preventDefault()
    await handleDelete(data.id);
  }

  async function handleEdit(e){
    e.preventDefault();
    let obj = {
      productId: data.id,
      productName: data.productName,
      productDescription: data.productDescription,
      categoryId: data.categoryId,
      categoryName: data.categoryMaster.categoryName,
    }
    await showChoosenContent(obj);
  }
  
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.productName}</td>
      <td>{data.productDescription}</td>
      <td>{data.categoryId}</td>
      <td>{data.categoryMaster.categoryName}</td>
      <td><button onClick={handleEdit} className='edit-btn' data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-pen-to-square"></i></button></td>
      <td><button onClick={handleClick} className='delete-btn'><i className="fa fa-trash" aria-hidden="true"></i></button></td>
    </tr>
  )
}

export default Show