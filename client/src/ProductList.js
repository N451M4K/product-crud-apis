import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Show from './Show';

let perpagerecords = 5;

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(1);

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
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((element) => {
                            return <Show data={element} key={element.id} />
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
        </div >
    )
}

export default ProductList