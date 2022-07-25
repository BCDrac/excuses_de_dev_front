import React from "react";
import { Route, Routes } from "react-router-dom";
import { URL_HOME, URL_ERROR, URL_HTTP_CODE, URL_LOST } from '../shared/constants/urls/urlConstants';
import ExcuseView from "../views/ExcuseView";
import ErrorView from "../views/ErrorView";
import LostView from '../views/LostView';
import HttpCodeView from '../views/HttpCodeView';


const Routing = () => {

    return (
        <Routes>
            <Route exact path={URL_HOME} element={<ExcuseView/>} />
            <Route exact path={URL_LOST} element={<LostView/>} />
            <Route path={URL_HTTP_CODE} element={<HttpCodeView/>}/>
            <Route path={URL_ERROR} element={<ErrorView/>}/>
        </Routes>
    );
};

export default Routing;