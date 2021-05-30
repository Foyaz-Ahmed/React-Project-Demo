import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ViewProducts extends Component{

    render(){
    	return <div>
         <h2>viewProducts</h2>;
         <table style={{border:"1 px solid"}}>
          <tr>
          <td>Product Name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Brand Id</td>
          <td>Category</td>
          <td>Status</td>
          <td>Offer Price</td>
          <td>Seller Id</td>
          </tr>
          <tr>
          <td>Smasung Galaxy</td>
          <td>22000</td>
          <td>25</td>
          <td>12121</td>
          <td>Phone</td>
          <td>Available</td>
          <td>NA</td>
          <td>343233</td>
          </tr>
          <tr>
          <td>Poxo X3 nfc</td>
          <td>29000</td>
          <td>2</td>
          <td>22122</td>
          <td>Phone</td>
          <td>Available</td>
          <td>26990</td>
          <td>43215</td>
          </tr>
          <tr>
          <td>Samsung A50</td>
          <td>28000</td>
          <td>5</td>
          <td>11122</td>
          <td>Phone</td>
          <td>Available</td>
          <td>27000</td>
          <td>34112</td>
          </tr>
          <tr>
          <td>Realme 9 Pro</td>
          <td>22004</td>
          <td>9</td>
          <td>12122</td>
          <td>Phone</td>
          <td>Not Available</td>
          <td>NA</td>
          <td>343239</td>
          </tr>
        </table>
    </div>
    }


} 

export default ViewProducts