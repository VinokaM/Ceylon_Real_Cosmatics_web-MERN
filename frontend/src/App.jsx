import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Cart from "./pages/Cart/Cart"
import Delivery from "./pages/Delivery/Delivery"
import { CartProvider } from './contexts/CartContext';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;