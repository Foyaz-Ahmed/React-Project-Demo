import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import AddProduct from './pages/AddProduct'
import ViewProduct from './pages/ViewProduct'
import AddCategory from './pages/AddCategory'
import ViewCategory from './pages/ViewCategroy'
import QuantityProduct from './pages/QuantityProduct'
import Cash from './pages/Cash'
import OrderView from './pages/OrderView'



class Myrouter extends Component{

    render(){

        return( 
        <div>
            <Route exact path="/" component ={Home} />
            <Route path="/profile" component ={Profile} />
            <Route path="/addproducts" component ={AddProduct} />
            <Route path="/viewproducts" component ={ViewProduct} />
            <Route path="/addcategory" component ={AddCategory} />
            <Route path="/viewcategory" component ={ViewCategory} />
            <Route path="/cash" component ={Cash} />
            <Route path="/productsquantity" component ={QuantityProduct} />
            <Route path="/order" component ={OrderView} />
            
        </div>
        );
    }


} 

export default Myrouter