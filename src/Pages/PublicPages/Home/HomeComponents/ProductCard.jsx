import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="rounded-lg relative m-2 min-w-[280px] overflow-clip hover:scale-105 transition-all ease-linear duration-150 cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover rounded-lg"
                />
            </div>
            <div className="absolute bottom-0 w-full z-10 text-white p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-white mb-4">{product.description}</p>
                <p className="text-white font-bold">${product.price}</p>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 -z-20" />
            </div>
        </div>
    );
}

export default ProductCard;
