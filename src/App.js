import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './components/Recipes';
import Searchbar from './components/Searchbar';


const App = () => {


    const apiId = process.env.REACT_APP_RECIPE_ID;
    const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

    // useState
    const [recipes, setRecipes] = useState([]);
    const [searchItem, setSearchItem] = useState("");


    const getRecipe = async () => {
        let url = `https://api.edamam.com/search?q=${searchItem}&app_id=${apiId}&app_key=${apiKey}`;

        let data = await fetch(url);
        let parsedData = await data.json()
        setRecipes(parsedData.hits)
    }

    console.log(searchItem)
    console.log(recipes);

    useEffect(() => {
        getRecipe();
        // eslint-disable-next-line
    }, [searchItem])

    const setSearchValue = (item) => {
        setSearchItem(item)
    }


    return (
        <div className='app'>
            <h1>Recipe Search App</h1>
            <Searchbar setSearchValue={setSearchValue} />

            {/* Recipe Items  */}
            <div className="recipe__container">
                {recipes.map((recipe) => {
                    return <div className="recipe-item">
                        <Recipes key={recipe.recipe.uri} title={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} />
                    </div>
                })}
            </div>

        </div>
    )
}

export default App
