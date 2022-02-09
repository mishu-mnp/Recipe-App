import React, { useState } from 'react';
import '../components/Searchbar.css';

const Searchbar = (props) => {

    const [ingredients, setIngredients] = useState("");

    const handleOnchange = (e) => {
        setIngredients(e.target.value)
    }

    const handleSearch = (e) => {
        props.setSearchValue(ingredients)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(ingredients);
        }
    }


    return (
        <div className='searchbar'>
            {/* <h2>Search Bar component</h2> */}
            <div className="search_container">
                <input className='search__input' value={ingredients} onKeyDown={handleKeyDown} onChange={handleOnchange} type="text" placeholder='enter ingredients' />
                <span className='search__icon' onClick={handleSearch}><i className="fas fa-search"></i></span>
            </div>
        </div>
    )
}

export default Searchbar
