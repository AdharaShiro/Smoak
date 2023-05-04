import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import AuthProvider from "./Components/AuthContext";
import NavBar from "./Main/NavBar";
import Login from "./Main/Login";
import Register from "./Main/Register";
import Index from "./Main/Index";

 

export default function App(){
    return(
        <div className="App">
            <BrowserRouter>
                    <Routes>
                        <Route path="/smoak/public" element={<NavBar />} >
                            <Route index element={<Login/>} />
                            <Route path="login" element={<Login />} /> 
                            <Route path="register" element={<Register/> }/>
                        </Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}