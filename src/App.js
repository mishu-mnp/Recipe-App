import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './components/Recipes';
import Searchbar from './components/Searchbar';


const App = () => {


    const apiId = process.env.REACT_APP_RECIPE_ID;
    const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

    // useState
    const [recipe, setRecipe] = useState([]);


    const getRecipe = async () => {
        let url = `https://api.edamam.com/search?q=potato&app_id=${apiId}&app_key=${apiKey}&from=0&to=3&calories=591-722&health=alcohol-free`;

        let data = await fetch(url);
        let parsedData = await data.json()
        setRecipe(parsedData.hits)
    }

    console.log(recipe);

    useEffect(() => {
        getRecipe();
        // eslint-disable-next-line
    }, [])


    return (
        <div className='app'>
            <h1>Recipe Search App</h1>
            <Searchbar />

            {/* Recipe Items  */}
            <div className="recipe__container">
                <Recipes />
                <Recipes />
                <Recipes />
                <Recipes />
            </div>

        </div>
    )
}

export default App
