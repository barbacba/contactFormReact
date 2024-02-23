import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const ContactForm = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handleMessageChange = e => {
		setMessage(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		// Aquí puedes agregar lógica para manejar el envío del formulario
		console.log('Email:', email);
		console.log('Message:', message);
		// Lógica adicional (por ejemplo, enviar datos a un servidor, etc.)
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label='Correo Electrónico'
				variant='outlined'
				fullWidth
				margin='normal'
				value={email}
				onChange={handleEmailChange}
			/>
			<TextField
				label='Mensaje'
				multiline
				rows={4}
				variant='outlined'
				fullWidth
				margin='normal'
				value={message}
				onChange={handleMessageChange}
			/>
			<Button type='submit' variant='contained' color='primary'>
				Enviar
			</Button>
		</form>
	);
};
export default ContactForm;
