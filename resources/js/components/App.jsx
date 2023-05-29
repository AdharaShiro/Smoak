import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import AuthProvider from "./Components/AuthContext";
import NavBar from "./Main/NavBar";
import Login from "./Main/Login";
import Register from "./Main/Register";
import Index from "./Main/Index";
import Catalogue from "./Main/Catalogue";
import AuthProvider from "./AuthContext";
import Cart from "./Cart/Cart";
import AdmNav from "./Admin/AdmNav";
import AdminCategories from "./Admin/AdminCategories";
import AdminProducts from "./Admin/AdminProducts";
import AdminSubcategories from "./Admin/AdminSubcategories";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/smoak/public" element={<NavBar />} >
                            <Route index element={<Index />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route path="catalogue" element={<Catalogue />} />
                            <Route path="cart" element={<Cart />} />
                            
                        </Route>
                        <Route path="/smoak/public/admin" element={<AdmNav/>}>
                            <Route index element={<AdminCategories/>}/>
                            <Route path="admcategories" element={<AdminCategories/>}/>
                            <Route path="admsubcategories" element={<AdminSubcategories/>}/>
                            <Route path="admproducts" element={<AdminProducts/>}/>
                        </Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}