import React from 'react';
import '../components/Recipes.css';

const Recipes = (props) => {

    return (
        <div className='recipes'>
            <div className="recipes__container">
                <div className="cards">
                    {/* img */}
                    <img src={props.image} alt={props.title} />
                    {/* title */}
                    <h3>{props.title}</h3>
                    {/* ingredients */}
                    <h2>Required Ingredients</h2>
                    {props.ingredients.map((ingredient) => (
                        <p>{ingredient.text}</p>
                    ))}
                    <strong className='cal'><span>Calories :- {Math.floor(props.calories)} cal</span></strong>
                </div>
            </div>
        </div>
    )
}

export default Recipes
