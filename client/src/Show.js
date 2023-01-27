import React from 'react'

const Show = (props) => {
  const { data } = props;
  return (
    <tr>
          <td>{data.id}</td>
          <td>{data.productName}</td>
          <td>{data.productDescription}</td>
          <td>{data.categoryId}</td>
          <td>{data.categoryMaster.categoryName}</td>
    </tr>
  )
}

export default Show