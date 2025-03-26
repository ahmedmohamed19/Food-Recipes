import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./SocialMedia.module.css";


export default function SocialMedia() {
    return (
        <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
    );
}
