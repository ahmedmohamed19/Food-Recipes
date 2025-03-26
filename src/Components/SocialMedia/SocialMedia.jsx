import React from "react";
import styles from "./SocialMedia.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function SocialMedia() {
    return (
        <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-platform="facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-platform="twitter">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-platform="instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" data-platform="youtube">
                <i className="fab fa-youtube"></i>
            </a>
        </div>
    );
}
