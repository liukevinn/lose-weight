// FoodItemList.jsx
import React from 'react';

export default function FoodItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.title} - {item.calories} Calories</li>
      ))}
    </ul>
  );
}
