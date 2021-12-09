import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';

const App = () => {

    const apiId = process.env.REACT_APP_RECIPE_ID;
    const apiKey = process.env.REACT_APP_RECIPE_API_KEY;
    console.log(apiId)
    console.log(apiKey)


    return (
        <div className='app'>
            <h1>Recipe Search App</h1>
            <Searchbar />
        </div>
    )
}

export default App
