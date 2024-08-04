import React, { useState } from 'react';
import FoodItemForm from './components/FoodItemForm.jsx';
import FoodItemList from './components/FoodItemList.jsx';
import CalorieSummary from './components/CalorieSummary.jsx';
import './App.css'

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const addFoodItem = (title, calories) => {
    setFoodItems([...foodItems, { title, calories }]);
  };

  const totalCalories = foodItems.reduce((total, item) => total + item.calories, 0);
  
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="container">
      <h1>Caloric Intake Tracker</h1>
      <h2>{currentDate}</h2>
      <FoodItemForm addFoodItem={addFoodItem} />
      <FoodItemList items={foodItems} />
      <CalorieSummary totalCalories={totalCalories} />
    </div>
  );
}

export default App;