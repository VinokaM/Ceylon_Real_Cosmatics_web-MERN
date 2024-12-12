import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Fade } from "react-awesome-reveal";

import { CartContext } from '../../contexts/CartContext';
import "./maincon.css";

import mainback from "../../assets/mainback.png";
import item1 from "../../assets/item1.jpg";
import item2 from "../../assets/item2.jpg";
import item3 from "../../assets/item3.jpg";
import item4 from "../../assets/item4.jpg";

import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

import vision from "../../assets/vision.png";

const HomePage = () => {
    const navigate = useNavigate();

    const { addToCart, isCartVisible, setCartVisible } = useContext(CartContext);

    const handleAddToCart = (item) => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            addToCart(item);
            console.log("eka hari");
        }
    };

    return (
        <div className="">
            <div className='main'>
                <Fade cascade damping={0.1}>
                    <div className='mainback'>
                        <h1 className='mainname'>Ceylon Real Cosmetic</h1>
                        <p className='maintitle'>Pure organic Sri Lankan Number 1<br />product selling website</p>
                        <button className='mainbtn'>Order Now</button>
                    </div>
                    <div className='mainimage'>
                        <img src={mainback} className="mainimg" />
                    </div>
                </Fade>
            </div>

            <div className='secard'>
                <div className='secard1'>
                    <img src={card1} className="seimg" />
                    <h3 className='sename'>Natural</h3>
                </div>
                <div className='secard1'>
                    <img src={card2} className="seimg" />
                    <h3 className='sename'>Beauty</h3>
                </div>
                <div className='secard1'>
                    <img src={card3} className="seimg" />
                    <h3 className='sename'>For You</h3>
                </div>
            </div>

            {/* Product List */}
            <div className='products'>
                <div >
                    <h2 className='phead'>our products</h2>
                </div>
                <div className='plist'>

                <div className="card">
                    <img className="itemimg" src={item1} alt="Product 1" />
                    <h2 className='itemName'>Beauty Basics</h2>
                    <p className='itemprce'>LKR 350.00</p>
                    <button className='itembtn' onClick={() => handleAddToCart({ id: 1, name: 'Beauty Basics', price: 350, image: item1 })}>
                        Add to Cart
                    </button>
                </div>
                <div className="card">
                    <img className="itemimg" src={item2} alt="Product 2" />
                    <h2 className='itemName'>Luminous Luxe</h2>
                    <p className='itemprce'>LKR 620.00</p>
                    <button className='itembtn' onClick={() => handleAddToCart({ id: 2, name: 'Luminous Luxe', price: 620, image: item2 })}>
                        Add to Cart
                    </button>
                </div>
                <div className="card">
                    <img className="itemimg" src={item3} alt="Product 2" />
                    <h2 className='itemName'>Lush essentials</h2>
                    <p className='itemprce'>LKR 900.00</p>
                    <button className='itembtn' onClick={() => handleAddToCart({ id: 3, name: 'Lush essentials', price: 900, image: item3 })}>
                        Add to Cart
                    </button>
                </div>
                <div className="card">
                    <img className="itemimg" src={item4} alt="Product 2" />
                    <h2 className='itemName'>Bunny Beauty</h2>
                    <p className='itemprce'>LKR 550.00</p>
                    <button className='itembtn' onClick={() => handleAddToCart({ id: 4, name: 'Bunny Beauty', price: 550, image: item4 })}>
                        Add to Cart
                    </button>
                </div>


                </div>
            
            </div>

            {/* Cart Button */}
            {isCartVisible && (
                <button className="cart-button" onClick={() => navigate("/cart")}>
                   Cart
                </button>
            )}

            <div className='vision'>
                <div className='visioimg'>
                    <img src={vision} className="visionimg" />
                </div>
                <div className='visiontxt'>
                    <h2 className='visionhead'>Our Vision</h2>
                    <p className='visiontitle'>
                        "Our vision is to redefine beauty by offering sustainable,<br></br>
                        cruelty-free, and nature-inspired cosmetics that empower individuals<br></br>
                        to embrace their unique selves while protecting the planet.<br></br>
                        Through innovation and transparency, we aim to inspire conscious<br></br>
                        choices that nurture both personal well-being and environmental health."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
