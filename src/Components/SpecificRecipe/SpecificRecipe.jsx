import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const initialState = {
    recipe: null,
    loading: true,
    error: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { recipe: action.payload, loading: false, error: '' };
        case 'FETCH_ERROR':
            return { recipe: null, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default function SpecificRecipe() {
    const { id } = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (!id) return;

        dispatch({ type: 'FETCH_START' });

        axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
            .then(res => dispatch({ type: 'FETCH_SUCCESS', payload: res.data.recipe }))
            .catch(() => dispatch({ type: 'FETCH_ERROR', payload: 'Failed to load recipe. Please try again later.' }));
    }, [id]);

    const { recipe, loading, error } = state;

    if (loading) return <h2 className="text-center mt-5">⏳ Loading...</h2>;
    if (error) return <h2 className="text-center mt-5 text-danger">{error}</h2>;
    if (!recipe) return <h2 className="text-center mt-5">🚫 Recipe not found</h2>;

    return (
        <div className="container">
            <div className="row my-5 align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <h1 className="recipeTitle">{recipe.title}</h1>
                    <p className="publisher">By {recipe.publisher}</p>

                    {recipe.ingredients && (
                        <ul className="ingredientsList">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="ingredientItem">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    )}

                    <Link to="/" className="btn backButton mt-3">
                        🔙 Back to Recipes
                    </Link>
                </div>

                <div className="col-md-6 imageContainer">
                    <img className="w-100" src={recipe.image_url} alt={recipe.title} />
                </div>
            </div>
        </div>
    );
}
