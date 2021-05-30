import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component{

    render(){

        return <div>
      <h2>Profile</h2>;
      <table>
        <tr>
          <td>Name</td>
          <td>Ahmed Md Foyaz</td>
        </tr>
        <tr>
          <td>Seller Id</td>
          <td>88761</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>ahmedfoyaz00@gmail.com</td>
        </tr>
        <tr>
          <td>Password</td>
          <td>125712</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>18000</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>0130302392</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>Available</td>
        </tr>
        <tr>
          <td>DOB</td>
          <td>22/02/1997</td>
        </tr>
      </table>
      </div>
    }


} 

export default Profile