import React from 'react';
import './FoodCategory.css';

const FoodCategory = (props) => {
    const { strCategory, strCategoryThumb } = props.category;
    return (
        <div onClick={() => props.handleCategoryFood(strCategory)} className='category'>
            <img src={strCategoryThumb} alt="" />
            <h3 className='categoryName'>{strCategory}</h3>
        </div>
    );
};

export default FoodCategory;