import React from 'react';

import './index.css';

const Input = ({ type, handleChange, value, placeholder }) => {
	return <input type={type} onChange={handleChange} value={value} placeholder={placeholder} autoFocus />;
};

export default Input;
