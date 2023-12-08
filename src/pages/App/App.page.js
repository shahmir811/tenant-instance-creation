import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const logo = require('../../static/logo/tenant_inc_logo.png');

const App = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = event => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = event => {
		setPassword(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		// Perform login logic here with the entered username and password
		console.log('Username:', username);
		console.log('Password:', password);

		navigate('/home');

		// Reset the form after submission if needed
		setUsername('');
		setPassword('');
	};

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<img src={logo} alt='Logo' />

				<Box component='form' onSubmit={handleSubmit} sx={{ width: '100%' }}>
					<TextField
						label='Username'
						variant='outlined'
						fullWidth
						margin='normal'
						value={username}
						onChange={handleUsernameChange}
					/>
					<TextField
						label='Password'
						type='password'
						variant='outlined'
						fullWidth
						margin='normal'
						value={password}
						onChange={handlePasswordChange}
					/>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						fullWidth
						size='large'
						style={{ marginTop: '16px', backgroundColor: '#47979E' }}>
						Login
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default App;
