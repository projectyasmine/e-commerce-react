"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import "@/styles/products.css";

const ProductsPage = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: "Produit 1", description: "Description 1", price: 20, image: "/images/product1.jpg" },
        { id: 2, name: "Produit 2", description: "Description 2", price: 30, image: "/images/product2.jpg" },
        { id: 3, name: "Produit 3", description: "Description 3", price: 40, image: "/images/product3.jpg" },
    ];

    return (
        <div className="products-container">
            <h1>Nos Produits</h1>
            <div className="products-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        onAddToCart={() => addToCart(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;