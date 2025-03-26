import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia"; // استيراد مكون السوشيال ميديا

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.discount}>
                    <p><strong>25%</strong> Discount on dining at <span className={styles.bold}>My Restaurant</span></p>
                    <h3 className={styles.logo}>Food Recipes</h3>
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4 className="fw-bold">Company</h4>
                        <ul>
                            <li><Link to="#">About us</Link></li>
                            <li><Link to="#">Careers</Link></li>
                            <li><Link to="#">Press</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4 className="fw-bold">Resources</h4>
                        <ul>
                            <li><Link to="#">Recipe</Link></li>
                            <li><Link to="#">Articles</Link></li>
                            <li><Link to="#">Shop</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4 className="fw-bold">Use Cases</h4>
                        <ul>
                            <li><Link to="#">Startup</Link></li>
                            <li><Link to="#">Enterprise</Link></li>
                            <li><Link to="#">Ecommerce</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4 className="fw-bold">Product</h4>
                        <ul>
                            <li><Link to="#">Overview</Link></li>
                            <li><Link to="#">Features</Link></li>
                            <li><Link to="#">Pricing</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4 className="fw-bold">Legal</h4>
                        <ul>
                            <li><Link to="#">Terms</Link></li>
                            <li><Link to="#">Privacy</Link></li>
                            <li><Link to="#">Cookies</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.bottom}>
                <button onClick={scrollToTop} className={styles.backToTop}>⬆ Back to top</button>
                <p>© 2025 <strong>Food Recipes</strong> All Rights Reserved</p>
                <SocialMedia /> 
            </div>
        </footer>
    );
}
