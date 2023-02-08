import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Show from './Show';
import EditModal from './EditModal';

let perpagerecords = 5;

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [currentRow, setCurrentRow] = useState({});
    useEffect(() => {
        fetchProducts(0)
    }, []);

    async function fetchProducts(skipfromfirst) {
        const response = await fetch(`http://localhost:5000/myapp/product/product_list?perpage=${perpagerecords}&skip=${skipfromfirst}`);
        const productList = await response.json();
        let pagecount = Math.ceil(productList.count / perpagerecords);
        setPageCount(pagecount);
        setProducts(productList.data);
    }

    function handlePageClick(pageNum) {
        console.log(pageNum.selected);
        let skipfromfirst = (pageNum.selected) * perpagerecords;
        fetchProducts(skipfromfirst);
    }

    let handleDelete = async ( productId)=>{
        let response = await fetch(`http://localhost:5000/myapp/product/delete_product?productId=${productId}`, {
          method: 'DELETE'
        });
        let deleted = await response.json();
        console.log(deleted);
        fetchProducts(0)
    }
    let showChoosenContent = function (obj) {
        setCurrentRow(obj);
    }
    return (
        <div className='table-container'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>productId</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>categoryId</th>
                        <th>Category Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((element) => {
                            return <Show data={element} key={element.id} handleDelete={handleDelete} showChoosenContent={ showChoosenContent} />
                        })
                    }
                </tbody>
            </table >
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
            <EditModal currentRow={ currentRow } />
        </div >
    )
}

export default ProductList