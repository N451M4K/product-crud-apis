import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList';
import CreateProduct from './CreateProduct.js';
import EditOrDelete from './EditOrDelete.js';
const Main = () => {
  return (
      <div className='main-content'>
      <Routes>
        <Route path='/productlist' element={ <ProductList />}/>
        <Route path='/createproduct' element={<CreateProduct />} />
        <Route path='/editordelete' element={ <EditOrDelete />} />
        <Route path='/' element={ <ProductList />} />
      </Routes>
    </div>
  )
}

export default Main