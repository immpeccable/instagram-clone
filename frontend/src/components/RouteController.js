import React, { Component } from 'react';
import '../App.css'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Home from './HomePage';

export class RouteController extends Component{
 
    
    render() {

        return <BrowserRouter>
        
        <Routes>
            <Route>
                <Route exact path="/" element={<Home></Home>}></Route>
            </Route>

        </Routes>

        </BrowserRouter>
    }
}
export default RouteController