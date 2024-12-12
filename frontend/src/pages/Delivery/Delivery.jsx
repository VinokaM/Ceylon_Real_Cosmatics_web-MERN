import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Delivery = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [deliveryDetails, setDeliveryDetails] = useState({
        customerName: '',
        phone: '',
        address: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
    };

    const handleOrder = async () => {
        if (!deliveryDetails.customerName || !deliveryDetails.phone || !deliveryDetails.address) {
            alert('Please fill in all delivery details.');
            return;
        }

        const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const orderData = { ...deliveryDetails, items: cart, totalAmount };

        try {
            const response = await fetch('http://localhost:5000/orders/new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('Order placed successfully!');
                clearCart();
                navigate('/');
            } else {
                alert('Failed to place order. Please try again.');
                console.log(orderData);
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Delivery Details</h2>
            <input
                name="customerName"
                placeholder="Name"
                value={deliveryDetails.customerName}
                onChange={handleInputChange}
            />
            <input
                name="phone"
                placeholder="Phone"
                value={deliveryDetails.phone}
                onChange={handleInputChange}
            />
            <textarea
                name="address"
                placeholder="Address"
                value={deliveryDetails.address}
                onChange={handleInputChange}
            ></textarea>
            <button onClick={handleOrder}>Place Order</button>
        </div>
    );
};

export default Delivery;
