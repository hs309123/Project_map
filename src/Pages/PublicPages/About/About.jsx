// src/pages/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {

    const navigate = useNavigate()
    return (
        <div className="bg-gradient-to-b from-themeColor to-purple-700 h-[calc(100vh-60px)] flex items-center justify-center">
            <div className="text-center text-white p-8 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-lg">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-8">
                    Welcome to our store! We are passionate about providing our customers with the finest shirts and shoes, crafted with precision and care. Our commitment to quality ensures that every product you purchase from us is of the highest standard.
                </p>
                <p className="text-lg mb-8">
                    At our store, you'll find a wide range of shirts and shoes, suitable for every occasion and style. From elegant dress shirts to casual sneakers, we have something for everyone. Our collection is curated to offer you the latest trends and timeless classics, ensuring that you always look your best.
                </p>
                <p className="text-lg mb-8">
                    Customer satisfaction is our top priority. We strive to provide an exceptional shopping experience, from browsing our selection to receiving your order. Our knowledgeable team is here to assist you with any questions or concerns you may have, ensuring that you find the perfect items for your needs.
                </p>
                <p className="text-lg mb-8">
                    Thank you for choosing us for your shirt and shoe needs. We look forward to serving you and exceeding your expectations every step of the way.
                </p>
                <button onClick={() => { navigate("/login") }} className="bg-white text-themeColor py-2 px-4 rounded shadow-lg font-semibold hover:scale-105 transition">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default About;
