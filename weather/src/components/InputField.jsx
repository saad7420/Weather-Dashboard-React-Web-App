import React from 'react';
import '../styles/Input.css';

export default function InputField({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field"
    />
  );
}