import React from 'react';
import Input from '../input';
import Button from '../button';
import { FaRegPlusSquare } from 'react-icons/fa';

import './index.css'

const Form = ({ handleSubmit, handleChange, task, placeholder }) => {
	return (
		<form onSubmit={handleSubmit} action="#" className="wrap">
			<Input type="text" handleChange={handleChange} value={task} placeholder={placeholder} />
			<Button><FaRegPlusSquare/></Button>
		</form>
	);
};

export default Form;
