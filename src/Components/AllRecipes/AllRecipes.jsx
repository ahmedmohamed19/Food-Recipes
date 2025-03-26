import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AllRecipes.module.css"; // استيراد ملف CSS

const foodItems = [
    "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper",
    "lettuce", "mushrooms", "onion", "potato", "pumpkin", "red pepper", "tomato", "beetroot",
    "brussel sprouts", "peas", "zucchini", "radish", "sweet potato", "artichoke", "leek",
    "cabbage", "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill", "rosemary",
    "oregano", "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple",
    "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry", "boysenberry",
    "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit", "lemon", "lime", "lychee",
    "mandarin", "mango", "melon", "nectarine", "orange", "papaya", "passion fruit", "peach",
    "pear", "pineapple", "plum", "pomegranate", "quince", "raspberry", "strawberry", "watermelon",
    "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger",
    "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries",
    "masala", "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup", "hummus",
    "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate",
    "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", "sushi", "ice cream",
    "duck", "curry", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab", "bacon", "ham",
    "pepperoni", "salami", "ribs"
];

export default function AllRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // ✅ عرض وصفات عشوائية عند فتح الصفحة لأول مرة
    useEffect(() => {
        getRecipe("chicken"); // عرض وصفات دجاج عند الفتح
    }, []);

    function getRecipe(query) {
        setLoading(true);
        setError("");
        axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
            .then((response) => {
                setRecipes(response.data.recipes);
            })
            .catch(() => {
                setError("Failed to fetch recipes. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    // ✅ تصفية قائمة البحث بناءً على البحث
    const filteredFoodItems = foodItems.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <div className="row d-flex">
                {/* ✅ عمود البحث - بنفس الطول */}
                <div className="col-lg-3 col-md-4 col-12 d-flex flex-column">
                    <aside className="h-100">
                        <h2 className={styles.recipeTitle}>Ingredients</h2>
                        <input
                            type="text"
                            placeholder="Search..."
                            className={styles.searchInput}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <ul className={`${styles.ingredientsList} overflow-auto`}>
                            {filteredFoodItems.length > 0 ? (
                                filteredFoodItems.map((item, index) => (
                                    <li key={index} className={styles.ingredientItem}>
                                        <Link onClick={() => getRecipe(item)}>{item}</Link>
                                    </li>
                                ))
                            ) : (
                                <li className={styles.noResult}>No results found</li>
                            )}
                        </ul>
                    </aside>
                </div>
                {/* ✅ عمود الوصفات */}
                <div className="col-lg-19 col-md-8 col-12">
                    <h1 className={styles.recipeTitle}>All Recipes</h1>

                    {loading && <p>Loading...</p>}
                    {error && <p className="text-danger">{error}</p>}

                    <div className="row justify-content-center"> {/* ✅ ضبط عرض الوصفات */}
                        {!loading && !error && recipes.length > 0 ? (
                            recipes.map((recipe, index) => (
                                <div className="col-lg-4 col-md-6 col-12 p-2 " key={index}>
                                    <Link to={`/specificrecipe/${recipe.recipe_id}`}>
                                        <div className={`${styles.card} p-3 shadow-sm`}>
                                            <div className={styles.imageContainer}>
                                                <img className="w-100 h-100 rounded" src={recipe.image_url} alt={recipe.title} />
                                            </div>
                                            <h4 className="mt-3">{recipe.title}</h4>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            !loading && !error && <p>No recipes found.</p>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
}
