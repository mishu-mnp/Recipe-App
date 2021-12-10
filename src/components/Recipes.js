import React from 'react';
import '../components/Recipes.css';

const Recipes = () => {
    return (
        <div className='recipes'>
            <div className="recipes__container">
                <div className="cards">
                    {/* img */}
                    <img src="https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg" alt="potato" />
                    {/* title */}
                    <h3>Cheesy Potato</h3>
                    {/* ingredients */}
                    <p>This is a cheesy potato chips with mayoneese Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolorum sed harum quisquam. Possimus quod, repudiandae labore vero fuga maxime! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim expedita accusamus reprehenderit, voluptate culpa maxime aperiam quo nesciunt veritatis facere!</p>
                </div>
            </div>
        </div>
    )
}

export default Recipes
