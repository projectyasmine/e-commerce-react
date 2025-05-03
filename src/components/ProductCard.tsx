import React from "react";
import "@/styles/productCard.css";

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    image: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, image, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">{price.toFixed(2)} €</p>
                <button className="product-button" onClick={onAddToCart}>
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
};

export default ProductCard;