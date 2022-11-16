import React, { useEffect, useState } from 'react';
import './FoodCategories.css';
import FoodCategory from '../FoodCategory/FoodCategory';
import { useNavigate } from 'react-router-dom';
import Foods from '../Foods/Foods';
import Search from '../Search/Search';

const FoodCategories = () => {
    const [categories, setCategories] = useState([]);
    const [catFoods, setCatFoods] = useState([]);
    const [mealName, setMealName] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data.categories));
    }, [])

    const handleCategoryFood = async (name) => {
        navigate('/category');
        await setMealName(name);

    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCatFoods(data.meals))
    }, [mealName])

    const handleSearch = (name) => {
        setMealName(name.target.value);
        
    }
    return (
        <div className='categories-container'>
            <h2>Choice Your Food</h2>
            <div className='categories'>
                {
                    categories.map(category => <FoodCategory handleCategoryFood={handleCategoryFood} key={category.idCategory} category={category}></FoodCategory>)
                }
            </div>
            <Search handleSearch={handleSearch}></Search>

            {
                catFoods ? <Foods foods={catFoods}>{mealName}</Foods> : <h3 style={{ color: 'red' }}>Food Unavailable!!</h3>
            }
        </div>
    );
};

export default FoodCategories;