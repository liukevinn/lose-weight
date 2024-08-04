import React, { useState } from 'react';
import FoodItemForm from './components/FoodItemForm.jsx';
import FoodItemList from './components/FoodItemList.jsx';
import CalorieSummary from './components/CalorieSummary.jsx';
import './App.css';

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const addFoodItem = (title, calories, protein) => {  // Include protein in the function parameters
    setFoodItems([...foodItems, { title, calories, protein }]);
  };

  const totalCalories = foodItems.reduce((total, item) => total + item.calories, 0);
  const totalProtein = foodItems.reduce((total, item) => total + item.protein, 0);  // Calculate total protein

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="container">
      <h1>Caloric Intake Tracker</h1>
      <h2>{currentDate}</h2>
      <FoodItemForm addFoodItem={addFoodItem} />
      <FoodItemList items={foodItems} />
      <CalorieSummary totalCalories={totalCalories} />
      <h2>Total Protein: {totalProtein} grams</h2>  
    </div>
  );
}

export default App;
