import React from 'react'
import { useState, useEffect } from 'react';
const EditModal = (props) => {
    
    let { currentRow } = props;
    console.log('procurrentRowps', currentRow.productName);
    // const [category, setCategory] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('')
    // const [categoryId, setCategoryId] = useState();
    
    
    
    useEffect(() => {
        setProductName(currentRow.productName);
        setProductDescription(currentRow.productDescription)
        console.log('procurrentRowps', currentRow.productName);
    }, [currentRow.productName, currentRow.productDescription])
    async function handleSubmit(){

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
                            {/* <select className='form-control' value={categoryId} onChange={(event) => setCategoryId(event.target.value)} required>
                                <option defaultValue={''}>Select Category</option>
                                {category.map((element) => {
                                    return <option value={element.id} key={element.id}>{element.categoryName}</option>
                                })}
                            </select> */}
                            {/* <button type="submit" className="btn btn-primary form-control">Submit</button> */}
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal