import React from 'react';
import ProductCard from './HomeComponents/ProductCard';
import ProductCarousel from './HomeComponents/ProductCarousel';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is a description for product 1.',
        price: 19.99,
        image: 'https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-646cdd1a19c41.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is a description for product 2.',
        price: 29.99,
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/MJ/QK/FH/12982737/whatsapp-image-2023-02-17-at-2-03-48-pm.jpeg'
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is a description for product 3.',
        price: 39.99,
        image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg'
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'This is a description for product 4.',
        price: 49.99,
        image: 'https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5946.jpg?auto=webp&quality=75&width=1024'
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'This is a description for product 4.',
        price: 49.99,
        image: 'https://cdn.britannica.com/04/123704-050-023DC490/Pair-leather-shoes.jpg'
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'This is a description for product 4.',
        price: 49.99,
        image: 'https://m.media-amazon.com/images/I/91nvsPPKXnL._AC_UF420%2C420_FMjpg_.jpg'
    },
    {
        id: 7,
        name: 'Product 7',
        description: 'This is a description for product 4.',
        price: 49.99,
        image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23837954/2023/7/1/51f02a41-ff82-4110-a983-2e99d455ce461688196182745RedTapeMenWhiteTexturedSneakers1.jpg'
    },
    // Add more products as needed
];

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="bg-themeColor h-[calc(100vh-60px)] flex items-center justify-center">
                {/* First Section */}
                <div className="text-center text-white p-8">
                    <h1 className="text-4xl font-bold mb-4">Welcome to eStore</h1>
                    <p className="text-lg mb-8">
                        Your one-stop shop for all your needs. Discover our wide range of products and enjoy an unparalleled shopping experience.
                    </p>
                    <button onClick={() => { navigate("/signup") }} className="bg-white text-themeColor py-2 px-4 rounded shadow-lg font-semibold hover:scale-105 transition">
                        Shop Now
                    </button>
                </div>

            </div>
            <div className="bg-white p-8 w-full">
                <h2 className="text-2xl font-bold text-center text-themeColor mb-6">Featured Products</h2>

                <p className="text-xl text-themeColor font-semibold">Our Bestseller Shoes</p>
                <div className="flex overflow-x-scroll p-4 space-x-4">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <p className="text-xl text-themeColor font-semibold mt-8">Our Bestseller Shirts</p>

                <ProductCarousel products={products} />
            </div>
        </div>
    );
}

export default Home;
