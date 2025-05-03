import Link from "next/link";
import "@/styles/navbar.css";

const Navbar = () => {
    return (
        <nav>
            <span className="nav-left">⭐</span>
            <ul>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/products">Produits</Link>
                </li>
                <li>
                    <Link href="/cart">Panier</Link>
                </li>
            </ul>
            <span className="nav-right">⭐</span>
        </nav>
    );
};

export default Navbar;