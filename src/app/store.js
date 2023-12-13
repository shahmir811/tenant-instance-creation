// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counter/counterSlice';
import authReducer from "../store/auth/authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		counter: counterReducer,
		// Add more reducers if needed
	},
});
