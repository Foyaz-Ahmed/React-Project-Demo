import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class OrderView extends Component{

    render(){

        return <div>
            <h2>Order</h2>;
    <table style={{border:"1 px solid"}}>
          <tr>
          <th>Order Id</th>
          <th>Order Details</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Buyer Id</th>
          </tr>
          <tr>
          <td>19327</td>
          <td>Note 10 pro Max</td>
          <td>27000</td>
          <td>Unpaid</td>
          <td>15012</td>
          </tr>
          <tr>
          <td>69882</td>
          <td>Poco X3</td>
          <td>19000</td>
          <td>Paid</td>
          <td>142722</td>
          </tr>
          <tr>
          <td>93887</td>
          <td>Realme 8 pro</td>
          <td>21000</td>
          <td>Paid</td>
          <td>17211</td>
          </tr>
          <tr>
          <td>91881</td>
          <td>Nokia A4</td>
          <td>9000</td>
          <td>Unpaid</td>
          <td>92721</td>
          </tr>
        </table>
    
        </div>
    }


} 

export default OrderView