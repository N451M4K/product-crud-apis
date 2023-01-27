import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/productlist">Product List</Link>
            <Link to="/createproduct">Create a Product</Link>
            <Link to="/editordelete">Edit or Delete</Link>
        </nav>
    )
}

export default Navbar