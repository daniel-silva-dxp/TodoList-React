import React from 'react';
import Input from '../input';
import Button from '../button';
import { FaRegPlusSquare } from 'react-icons/fa';

const Form = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} action="#">
			<Input type="text" />
			<Button><FaRegPlusSquare/></Button>
		</form>
	);
};

export default Form;
