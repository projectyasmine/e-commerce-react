"use client";

import { useCart } from "../../context/CartContext";
import "@/styles/cart.css";

const CartPage = () => {
    const { cart } = useCart();

    return (
        <div className="cart-container">
            <h1 className="cart-title">Votre Panier</h1>
            <ul className="cart-list">
                {cart.map((product, index) => (
                    <li key={index} className="cart-item">
                        <span>{product.name}</span> - {product.price}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;