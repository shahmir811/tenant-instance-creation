// AppRouter.js
import Container from '@mui/material/Container';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './pages/App/App.page';
import Home from './pages/Home/Home.page';

const AppRouter = () => {
	return (
		<Router>
			<Container component='main'>
				<Routes>
					<Route path='/' exact element={<App />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</Container>
		</Router>
	);
};

export default AppRouter;
