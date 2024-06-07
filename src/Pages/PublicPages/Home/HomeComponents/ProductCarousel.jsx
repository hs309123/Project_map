import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

function ProductCarousel({ products }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(products.length / 4)) % Math.ceil(products.length / 4));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 4));
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.scrollLeft = currentIndex * carousel.clientWidth;
        }
    }, [currentIndex]);

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-20"
                    ref={carouselRef}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <button
                onClick={handlePrevClick}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-themeColor text-white py-2 px-3 rounded-full text-xs"
            >
                &lt;
            </button>
            <button
                onClick={handleNextClick}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-themeColor text-white py-2 px-3 rounded-full text-xs"
            >
                &gt;
            </button>
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(products.length / 4) }, (_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? 'bg-themeColor' : 'bg-gray-300'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ProductCarousel;
