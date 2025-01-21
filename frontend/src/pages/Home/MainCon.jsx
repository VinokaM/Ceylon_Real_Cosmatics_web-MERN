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


            <div className='bar'>
                <div className='abar'>
                    <h2 className='baritem'>10+ awards</h2>
                </div>

                <div className='abar'>
                    <h2 className='baritem'>6+ products</h2>
                </div>

                <div className='abar'>
                    <h2 className='baritem'>50+ experts</h2>
                </div>

                <div className='abar'>
                    <h2 className='baritem'>24h delivery</h2>
                </div>
            </div>

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



            <div className='success'>
                <h3 className='successHead'>success story</h3>
                <div className='succesCards'>
                    <div className='acard'>
                        <h3 className='cusName'>A New Glow for Anjali</h3>
                        <p className='sucDis'>Anjali, a busy working mom from Colombo, struggled with dry skin and an uneven tone. Despite trying numerous products, she couldn’t find the right fit for her sensitive skin. That’s when she discovered Ceylon Real Cosmetics.

                                "I was hesitant at first, but the natural ingredients caught my attention. After using their hydrating skincare line, my skin feels softer, and I’ve regained my natural glow!"

                                Now, Anjali feels confident and radiant, whether she’s at work or spending time with her family. She calls Ceylon Real Cosmetics her “skin savior.”</p>
                    </div>

                    <div className='acard2'>
                        <h3 className='cusName'>Ravi's Journey to Clear Skin</h3>
                        <p className='sucDis'>Ravi, a college student, battled acne for years. His self-esteem took a hit, and he avoided social gatherings. After consulting friends, he decided to try the acne care range from Ceylon Real Cosmetics.

                                "The results were incredible. Within weeks, my skin started to clear up. What I love most is how gentle yet effective the products are. I’ve never felt more confident!"

                                Ravi now attends events with a bright smile, inspiring others to embrace their journey toward healthy skin.</p>
                    </div>
                </div>
            </div>


            <div className='map'>
                <h3 className='maphead'>visit us</h3>
                <div>
                <iframe className='mapbox' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26860.323015370046!2d80.88614165087269!3d6.894276464429124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae47be640e7a3f3%3A0xf86a0d5993aefe9d!2sWelimada!5e1!3m2!1sen!2slk!4v1735225313747!5m2!1sen!2slk" width="1000" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>


            <footer class="footer">
            <div class="container">
                <div class="footer-row">
      
                <div class="footer-column">
                 <h4>About Us</h4>
                    <p>Ceylon Real Cosmetics is your trusted source for natural and authentic beauty products.</p>
                </div>
      
            <div class="footer-column">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">products</a></li>
                <li><a href="#">location</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
      
            <div class="footer-column">
                <h4>Contact Us</h4>
                <p>Email: support@ceylonrealcosmetics.com</p>
                <p>Phone: +94 123 456 789</p>
                <p>Address: welimada, Sri Lanka</p>
            </div>
      
            <div class="footer-column">
                <h4>Follow Us</h4>
                <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
            </div>
            </div>
            </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Ceylon Real Cosmetics. All rights reserved.</p>
            </div>
        </div>
        </footer>

        </div>
    );
};

export default HomePage;
