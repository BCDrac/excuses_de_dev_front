import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Routing from './Routing';


const RoutesWithNavigation = () => {

    return (
        <BrowserRouter>
            <Routing />
            <ToastContainer position="bottom-right" />
        </BrowserRouter>
    );
};

export default RoutesWithNavigation;
