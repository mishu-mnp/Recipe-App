import React from 'react';
import '../components/Searchbar.css';

const Searchbar = () => {
    return (
        <div className='searchbar'>
            {/* <h2>Search Bar component</h2> */}
            <div className="search_container">
                <input className='search__input' type="text" placeholder='enter ingredients' />
                <div className="search__btn">
                    <button className='btn'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
