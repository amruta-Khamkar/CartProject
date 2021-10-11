import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import List from './Comonents/List';
import Validations from './Comonents/Validations';
import Product from './Comonents/Product';
{/* <Product/> */ }

function App() {
  return (
    <>
      {/* <Router> */}
         {/* <ul class="nav">
          <li class="nav-item">
            <li class="nav-link active"><Link to="/">List</Link></li>
          </li>
          <li class="nav-item">
            <li class="nav-link active"><Link to="/vali">Validations</Link></li>
          // </li> 
          // <li class="nav-item">
          //   <li class="nav-link active"><Link to="/pro">Product</Link></li>
          // </li> 

      {/* </ul> */}
      {/* <Switch>
        <Route path="/" exact component={List} />
        <Route path="/vali" exact component={Validations} />
        <Route path="/pro" exact component={Product} />
      </Switch> */}
    {/* </Router> */}
    <Product/>
    </>

)

}

export default App;
