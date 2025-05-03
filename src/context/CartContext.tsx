"use client";

import React, { createContext, useContext, useState } from "react";

// Définir le type des données du panier
type Product = {
    id: number;
    name: string;
    price: number;
};

type CartContextType = {
    cart: Product[];
    addToCart: (product: Product) => void;
};

// Créer le contexte
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Fournisseur du contexte
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        console.log("Ajout au panier :", product);
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart doit être utilisé dans un CartProvider");
    }
    return context;
};

