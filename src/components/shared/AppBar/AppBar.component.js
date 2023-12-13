import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const TopAppBar = () => {
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate('/');
	};

	return (
		<Box sx={{ flexGrow: 1 }} style={{ marginBottom: '12px' }}>
			<AppBar position='static' style={{ background: '#123034' }}>
				<Toolbar variant="dense">
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Instance Creation
					</Typography>
					<Button color='inherit' onClick={onClickHandler}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopAppBar;
