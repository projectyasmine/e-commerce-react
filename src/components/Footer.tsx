import Link from "next/link";
import "@/styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link href="/about">À propos</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/privacy">Politique de confidentialité</Link>
                </div>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} MonSite. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;