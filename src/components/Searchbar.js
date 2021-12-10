import React, { useState } from 'react';
import '../components/Searchbar.css';

const Searchbar = () => {

    const [ingredients, setIngredients] = useState("");

    const handleOnchange = (e) => {
        setIngredients(e.target.value)
    }



    return (
        <div className='searchbar'>
            {/* <h2>Search Bar component</h2> */}
            <div className="search_container">
                <input className='search__input' value={ingredients} onChange={handleOnchange} type="text" placeholder='enter ingredients' />
                <span className='search__icon'><i className="fas fa-search"></i></span>
            </div>

        </div>
    )
}

export default Searchbar
