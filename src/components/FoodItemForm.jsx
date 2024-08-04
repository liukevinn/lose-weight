import React, { useState } from 'react';

function FoodItemForm({ addFoodItem }) {
  const [foodTitle, setFoodTitle] = useState('');
  const [calorieCount, setCalorieCount] = useState('');
  const [proteinContent, setProteinContent] = useState('');  // New state for protein content

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoodItem(foodTitle, parseInt(calorieCount), parseInt(proteinContent)); // Pass protein content as well
    setFoodTitle('');
    setCalorieCount('');
    setProteinContent('');
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
      <input
        type="number"
        placeholder="Protein (grams)"
        value={proteinContent}
        onChange={(e) => setProteinContent(e.target.value)}
        required
      />
      <button type="submit">Add Food Item</button>
    </form>
  );
}

export default FoodItemForm;
