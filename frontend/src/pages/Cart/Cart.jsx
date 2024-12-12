import React, { useContext,useState,useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, updateQuantity, setCartVisible } = useContext(CartContext);
    const navigate = useNavigate();

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotalAmount(total);
        };
        calculateTotal();
    }, [cart]);

    const handleCheckout = () => {
        setCartVisible(false);
        navigate('/delivery');
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.productId} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Price: LKR {item.price}</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        updateQuantity(item.productId, parseInt(e.target.value))
                                    }
                                    min="1"
                                />
                            </div>
                        </div>
                    ))}
                    <h3>Total Amount: LKR {totalAmount}</h3>
                    <button onClick={handleCheckout}>Proceed to Delivery</button>
                </>
            )}
        </div>
    );
};
export default Cart;
