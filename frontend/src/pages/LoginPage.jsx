import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./login.css";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
            localStorage.setItem('token', data.token);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleSinup = async (e) => {
        e.preventDefault();
        navigate('/register');
    };

    return (
        <div className='loginpage'>
            <div className='mainbox'>
                <div className='leftbox'>
                    <h2 className='lefttitle'>New here!</h2>
                    <button onClick={handleSinup} className='leftbtn'>sign up</button>
                </div>
                <div className='rightbox'>
                <form className="form" onSubmit={handleSubmit}>
                <h2 className="formhead">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputbox"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputbox"
                />
                <button type="submit" className="submitbtn">Login</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;