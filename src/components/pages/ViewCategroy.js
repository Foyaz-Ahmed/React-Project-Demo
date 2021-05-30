import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ViewCatgory extends Component{

    render(){

        return <div>
    <h2>view Category</h2>;
    <table style={{border:"1 px solid"}}>
          <tr>
          <td>Category Name</td>
          <td>Id</td>
          <td>Description</td>
          <td>Child Id</td>
          </tr>
          <tr>
          <td>Galaxy</td>
          <td>22000</td>
          <td>This is the newest Phone in the Market</td>
          <td>12123</td>
          </tr>
          <tr>
          <td>Nokia</td>
          <td>21200</td>
          <td>This is a gaming Phone</td>
          <td>12124</td>
          </tr>
          <tr>
          <td>Walton</td>
          <td>21020</td>
          <td>New Arrival Phone</td>
          <td>12128</td>
          </tr>
          <tr>
          <td>Maximus</td>
          <td>22111</td>
          <td>Lower Price best Camera Phone</td>
          <td>12116</td>
          </tr>
        </table>
    </div>
    }


} 

export default ViewCatgory