import React from "react";
import styles from "./About.module.css"; // استيراد ملف CSS Module

export default function About() {
    return (
        <div className={`${styles.aboutPage} fade-in`}>
            {/* خلفية مع طبقة شفافة */}
            <div className={styles.heroSection}>
                <div className={styles.overlay}>
                    <div className="container text-center text-white">
                        <h1 className="display-4 fw-bold">Welcome to Food Recipes</h1>
                        <p className="lead fs-4">Discover, Cook & Enjoy the Best Dishes</p>
                    </div>
                </div>
            </div>

            {/* محتوى الصفحة */}
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="fw-bold">Who We Are</h2>
                        <p className="text-muted">
                            At <strong>Food Recipes</strong>, we are passionate about bringing you the most delicious and easy-to-make recipes.
                            Whether you're a home cook or a professional chef, our recipes are designed to make every meal special.
                        </p>
                        <p className="text-muted">
                            Join our community and explore a variety of dishes from around the world. Let's make cooking fun and enjoyable!
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="/assets/about-food.jpg"
                            alt="Delicious Food"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* قسم الإحصائيات */}
            <div className={`${styles.statsSection} text-center text-white py-5 mt-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="fw-bold counter">500+</h3>
                            <p>Delicious Recipes</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="fw-bold counter">100K+</h3>
                            <p>Happy Food Lovers</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="fw-bold counter">50+</h3>
                            <p>Professional Chefs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
