// CalorieSummary.jsx
import React, { useState } from 'react';

export default function CalorieSummary({ totalCalories }) {
  const [calorieGoal, setCalorieGoal] = useState(2000);

  return (
    <div>
      <h2>Total Calories: {totalCalories}</h2>
      <input
        type="number"
        value={calorieGoal}
        onChange={(e) => setCalorieGoal(e.target.value)}
      />
      <h2>Caloric Deficit: {calorieGoal - totalCalories}</h2>
    </div>
  );
}
