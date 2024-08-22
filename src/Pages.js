import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import React from 'react';
import { Login_com } from './Login_com';
import { Hello } from './Hello';
import { LayOut } from './LayOut';
export const Pages=()=>{
    return (
        <Router>
                <Routes>
                    <Route exact path='/' element={<Hello/>}/>
                    <Route exact path="/Login" element={<Login_com/>}/>
                    <Route exact path='/Home' element={<LayOut/>}/>
                </Routes>
        </Router>
    );
};