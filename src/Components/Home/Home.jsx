import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Style from './Home.module.css';
import main from '../../assets/main.avif';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
            .then(res => {
                setRecipes(res.data.recipes);
                setLoading(false);
            })
            .catch(err => {
                setError("Failed to load recipes. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            {/* الهيدر */}
            <div className="row m-5 align-items-center">
                <div className="col-md-6 col-12 text-center text-md-start">
                    <h1 className="fw-bold">Food Recipes</h1>
                    <p className="text-muted">
                        Discover the best food recipes with step-by-step guides.
                        Explore delicious meals that will make your taste buds happy!
                    </p>
                </div>
                <div className="col-md-6 col-12">
                    <img className="w-100 rounded shadow-sm" src={main} alt="Pizza Monkey Bread" />
                </div>
            </div>

            {/* عرض الوصفات */}
            <div className="row text-center justify-content-center">
                <h2 className="m-5">Our Recipes</h2>

                {/* تحميل البيانات */}
                {loading && <h4 className="text-center text-primary">Loading...</h4>}

                {/* عرض الخطأ إن وجد */}
                {error && <h4 className="text-center text-danger">{error}</h4>}

                {/* عرض الوصفات */}
                {!loading && !error && recipes.map((recipe, index) => (
                    <div className="col-lg-4 col-md-6 col-12 p-4" key={index}>
                        <div className={`${Style.card} p-3 shadow-sm`}>
                            <div className={Style.imageContainer}>
                                <img className="w-100 h-100 rounded" src={recipe.image_url} alt={recipe.title} />
                            </div>
                            <h4 className="mt-3">{recipe.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
