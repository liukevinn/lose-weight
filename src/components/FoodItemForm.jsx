// FoodItemForm.jsx
import React, { useState } from 'react';

export default function FoodItemForm({ addFoodItem }) {
  const [foodTitle, setFoodTitle] = useState('');
  const [calorieCount, setCalorieCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoodItem(foodTitle, parseInt(calorieCount));
    setFoodTitle('');
    setCalorieCount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food Title"
        value={foodTitle}
        onChange={(e) => setFoodTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calorie Count"
        value={calorieCount}
        onChange={(e) => setCalorieCount(e.target.value)}
        required
      />
      <button type="submit">Add Food Item</button>
    </form>
  );
}
