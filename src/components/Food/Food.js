import React from 'react';
import './Food.css';

const Food = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.food;
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.substring(0, 200)}</p>
        </div>
    );
};

export default Food;