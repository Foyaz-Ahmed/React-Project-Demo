import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AddProduct extends Component{

    render(){

        return <div>
      <h2>Add products</h2>;
        <table>
           <tr>
             <td>Product Name</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Status</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Quantity</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Price</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Brand Id</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Category</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Seller Id</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td><br></br></td>
             <td><input type="submit"></input></td>
           </tr>
        </table>
      </div>
    }


} 

export default AddProduct