import React from 'react';
import './Search.css';

const Search = ({ handleSearch }) => {
    return (
        <div className='search-food'>
            <input type="text" name="" onChange={handleSearch} placeholder='Search By FoodName..' id="" />
        </div>
    );
};

export default Search;