// import { query } from 'express';
import React from 'react'
import { useState, useEffect } from 'react'
import Message from './Message';
const CreateProduct = () => {
    const [category, setCategory] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('')
    const [categoryId, setCategoryId] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(true);
    //  console.log(category[0].id);
    useEffect(() => {
        fetchCategoryList();
        console.log(category);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function fetchCategoryList() {
        let response = await fetch('http://localhost:5000/myapp/category/category_list');
        let categoryList = await response.json();
        setCategory(categoryList.data)
    }


    async function handleSubmit(event) {

        event.preventDefault();
        try {
            if (productName && productDescription && categoryId) {
                let response = await fetch('http://localhost:5000/myapp/product/create_product', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"productName": productName, "productDescription": productDescription, "categoryId": categoryId}),
                });
                let created = await response.json();
                if (created.success === false) {
                    setErrorMessage(created.msg)
                    setIsError(true);
                } else if (created.success === true) {
                    setErrorMessage("Form submitted successfully");
                    setIsError(false)
                    setProductName('');
                    setProductDescription('');
                    setCategoryId('');

                }
            } else {
                setErrorMessage('Please Enter All the Field')
                setIsError(true);
            }
        } catch (err) {
            setErrorMessage(err.message)
            setIsError(true);
        }

    };



    return (
        <div className='form-container'>
            <form className='form ' onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={productName} placeholder='Product Name' onChange={(event) => setProductName(event.target.value)} required />
                <input type="text" className='form-control' value={productDescription} placeholder='Product Description' onChange={(event) => setProductDescription(event.target.value)} required />
                <select className='form-control' value={categoryId} onChange={(event) => setCategoryId(event.target.value)} required>
                    <option defaultValue={''}>Select Category</option>
                    {category.map((element) => {
                        return <option value={element.id} key={element.id}>{element.categoryName}</option>
                    })}
                </select>
                <button type="submit" className="btn btn-primary form-control">Submit</button>
            </form>
            <Message message={errorMessage} isError={ isError} />
        </div>
    )
}

export default CreateProduct