import React from 'react';
import './Foods.css';
import Food from '../Food/Food';

const Foods = (props) => {
    const { foods } = props;
    return (
        <div className='foods-container'>
            <h3>Your Foods:</h3>
            <div className="foods">
                {
                    foods && foods.map(food => <Food key={food.idMeal} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;