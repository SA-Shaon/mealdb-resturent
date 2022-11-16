import { Route, Routes } from 'react-router-dom';
import './App.css';
import FoodCategories from './components/FoodCategories/FoodCategories';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/category' element={<FoodCategories></FoodCategories>} />
      </Routes>
    </div>
  );
}

export default App;
