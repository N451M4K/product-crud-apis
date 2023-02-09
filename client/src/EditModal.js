import React from 'react'
import { useState, useEffect } from 'react';
import Message from './Message';
const EditModal = (props) => {

    let { currentRow } = props;
    console.log('procurrentRowps', currentRow.productName);
    const [category, setCategory] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('')
    const [categoryId, setCategoryId] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(true);


    useEffect(() => {
        setProductName(currentRow.productName);
        setProductDescription(currentRow.productDescription)
        console.log('procurrentRowps', currentRow.productName);
        fetchCategoryList();
    }, [currentRow.productName, currentRow.productDescription])

    async function fetchCategoryList() {
        let response = await fetch('http://localhost:5000/myapp/category/category_list');
        let categoryList = await response.json();
        setCategory(categoryList.data)
    }

    async function handleSubmit() {
        try {
        let response = await fetch(`http://localhost:5000/myapp/product/update_product?productId=${currentRow.productId}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "productName": productName, "productDescription": productDescription, "categoryId": categoryId }),
        });
        let updated = await response.json();
            if (updated.success === true) {
                setErrorMessage("Form submitted successfully");
                setIsError(false);
            } else {
                setErrorMessage(updated.msg)
                setIsError(true);
            }
        } catch (err) {
            setErrorMessage(err.message)
            setIsError(true);
        }
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Please Edit the details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className='form ' onSubmit={handleSubmit}>
                            
                            <input type="text" className="form-control" value={productName} placeholder='Product Name' onChange={(event) => setProductName(event.target.value)} required />
                            
                            <input type="text" className='form-control' value={productDescription} placeholder='Product Description' onChange={(event) => setProductDescription(event.target.value)} required />
                            
                            <select className='form-control' value={categoryId} onChange={(event) => setCategoryId(event.target.value)} required>
                                <option defaultValue={currentRow.categoryId}>{currentRow.categoryName}</option>
                                {category.map((element) => {
                                    return <option value={element.id} key={element.id}>{element.categoryName}</option>
                                })}
                            </select>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Message message={errorMessage} isError={ isError} />
        </div>
    )
}

export default EditModal