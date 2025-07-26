import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const images = product.image || product.images || [];
  const firstImage =
    Array.isArray(images) && images.length > 0
      ? images[0]
      : "https://placehold.co/300x200?text=No+Image";

  return (
    <Link to={`/product/${product._id}`}>
      <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
        <img
          src={firstImage}
          alt={product.name}
          className="w-full h-40 object-cover rounded mb-2"
          onError={(e) => {
            e.target.src = "https://placehold.co/300x200?text=Image+Error";
          }}
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-green-600">₹{product.offerPrice}</span>
          {product.price > product.offerPrice && (
            <span className="line-through text-red-500 text-sm">₹{product.price}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
