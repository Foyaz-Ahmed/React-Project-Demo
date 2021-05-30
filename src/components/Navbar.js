import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Navbar extends Component{

    render(){

        return <div style={{color:"red", background:"green"}}>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/profile">Profile</Link></li>
                <li><Link to = "/addproducts">Add Products</Link></li>
                <li><Link to = "/viewproducts">View Products</Link></li>
                <li><Link to = "/addcategory">Add category</Link></li>
                <li><Link to = "/viewcategory">View Category</Link></li>
                <li><Link to = "/cash">Cash</Link></li>
                <li><Link to = "/productsquantity">Products Quantity</Link></li>
                <li><Link to = "/order">Order view</Link></li>
                <button className="btn btn-danger">button</button>
            </ul>
        </div>
    }


} 

export default Navbar