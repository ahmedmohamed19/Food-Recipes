import React, { useEffect, useState } from "react";
import styles from "./ContactUs.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
    };

    const [mapSrc, setMapSrc] = useState("");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setMapSrc(
                        `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.228359792696!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude},${longitude}!5e0!3m2!1sen!2seg!4v1616161616161!5m2!1sen!2seg`
                    );
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    setMapSrc(
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.228359792696!2d31.741455!3d30.306503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c1e8f0e6f0f%3A0x7b8f8e8e8e8e8e8e!2s10th%20of%20Ramadan%20City%2C%20Egypt!5e0!3m2!1sen!2seg!4v1616161616161!5m2!1sen!2seg"
                    ); // خريطة افتراضية إذا فشل التحديد
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div className={`${styles.contactPage} fade-in`}>
            <div className={styles.heroSection}>
                <div className={styles.overlay}>
                    <h1 className="text-white fw-bold">Get in Touch</h1>
                    <p className="text-white">We'd love to hear from you!</p>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {/* معلومات الاتصال */}
                    <div className="col-md-6">
                        <h2 className="fw-bold">Contact Information</h2>
                        <p className="text-muted">Feel free to reach out to us through any of the following ways.</p>
                        <ul className={styles.contactInfo}>
                            <li><FaMapMarkerAlt className={styles.icon} /> 10th Of Ramadan City</li>
                            <li><FaPhone className={styles.icon} /> 01062514437</li>
                            <li><FaEnvelope className={styles.icon} /> contact@foodrecipes.com</li>
                        </ul>

                        {/* أيقونات السوشيال ميديا */}
                        <div className={styles.socialIcons}>
                            <a href="#"><FaFacebookF className={styles.facebook} /></a>
                            <a href="#"><FaTwitter className={styles.twitter} /></a>
                            <a href="#"><FaInstagram className={styles.instagram} /></a>
                            <a href="#"><FaYoutube className={styles.youtube} /></a>
                        </div>
                    </div>

                    {/* نموذج الاتصال */}
                    <div className="col-md-6">
                        <h2 className="fw-bold">Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" name="name" placeholder="Your Name" className="form-control" required value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <input type="email" name="email" placeholder="Your Email" className="form-control" required value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <textarea name="message" placeholder="Your Message" className="form-control" rows="5" required value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* خريطة جوجل */}
                <div className={styles.mapContainer}>
                    {mapSrc ? (
                        <iframe
                            title="User Location Map"
                            src={mapSrc}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    ) : (
                        <p>جارٍ تحميل الخريطة...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
