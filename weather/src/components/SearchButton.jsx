import React from 'react';
import '../styles/SearchButton.css'; // Assuming you have a CSS file for styles

export default function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="search-button"
    >
      Search
    </button>
  );
}