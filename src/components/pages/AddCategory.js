import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AddCategory extends Component{

    render(){

        return <div>
      <h2>Add Category</h2>;
        <table>
           <tr>
             <td>Category Name:</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Id:</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Description:</td>
             <td><input type="text"></input></td>
           </tr>
           <tr>
             <td>Child Id</td>
             <td><input type="text"></input></td>
           </tr>
          <tr>
             <td><br></br></td>
             <td><input type="submit"></input></td>
           </tr>
        </table>
      </div>;
    }


} 

export default AddCategory