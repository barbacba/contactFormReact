import React from 'react';
import { Container, Typography, CssBaseline, Paper, Box } from '@mui/material';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
	return (
		<Container component='main' maxWidth='xs'>
			<Box
				width='100vw'
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<CssBaseline />
				<Paper
					elevation={3}
					component={Box}
					p={3}
					display='flex'
					flexDirection='column'
					alignItems='center'
				>
					<Typography variant='h2' component='h2' gutterBottom>
						Contacto
					</Typography>
					<ContactForm />
				</Paper>
			</Box>
		</Container>
	);
};

export default ContactPage;
