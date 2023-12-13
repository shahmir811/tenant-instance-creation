// AppRouter.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login/Login.page';
import Home from './pages/Home/Home.page';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' exact element={<Login />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
