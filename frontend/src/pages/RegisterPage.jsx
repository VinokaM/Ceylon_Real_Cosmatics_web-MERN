import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./register.css";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/users/register', { name, email, password });
            navigate('/login');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const handleSinin = async (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className='loginpage1'>
            <div className='mainbox1'>
                <div className='rightbox1'>
                <form className="form1" onSubmit={handleSubmit}>
                <h2 className="formhead1">Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputbox1"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputbox1"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputbox1"
                />
                <button type="submit" className="submitbtn1">Register</button>
                </form>
                </div>
                <div className='leftbox1'>
                <h2 className='lefttitle1'>Have an Account</h2>
                    <button onClick={handleSinin} className='leftbtn1'>sign in</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;