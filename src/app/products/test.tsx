import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext } from "@/context/CartContext";
import ProductsPage from "@/app/products/page";
import "@testing-library/jest-dom";

describe("ProductsPage", () => {
    it("ajoute un produit au panier lorsqu'on clique sur le bouton", () => {
        // Mock du contexte
        const addToCart = jest.fn();
        const cart: any[] = [];

        render(
            <CartContext.Provider value={{ cart, addToCart }}>
                <ProductsPage />
            </CartContext.Provider>
        );

        // Vérifier que le bouton est présent
        const addButton = screen.getByTestId("add-to-cart-1");
        expect(addButton).toBeInTheDocument();

        // Simuler un clic sur le bouton
        fireEvent.click(addButton);

        // Vérifier que le produit correct a été ajouté
        expect(addToCart).toHaveBeenCalledWith({
            id: 1,
            name: "Produit 1",
            price: 20,
        });
    });
});