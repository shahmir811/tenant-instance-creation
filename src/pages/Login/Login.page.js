import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useAuthModule} from "../../store/auth/authSlice";

const logo = require('../../static/logo/tenant_inc_logo.png');

const Login = () => {
	const navigate = useNavigate();

	// hooks
	const {
		register,
		handleSubmit: handleSubmitHook,
		formState: { errors },
	} = useForm({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
	});

	const dispatch = useDispatch();
	const {loginUser} = useAuthModule();

	const handleFormSubmit = (data) => {
		const payload = {
			username: data.username,
			password: data.password
		}
		// const formData = new FormData();
		// formData.append("username",data.username);
		// formData.append("password",data.password);
		dispatch(loginUser(payload))
			.then(() => {
				navigate("/home")
			})
			.catch(err => {
				navigate("/")
			})
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

				<Box component='form' onSubmit={handleSubmitHook(handleFormSubmit)} sx={{ width: '100%' }}>
					<TextField
						{
							...register(
								'username',
								{
									required: "Username is required.",
									minLength: {
										value: 3,
										message: "Username length at least 3 characters"
									}
								})
						}
						label='Username'
						variant='outlined'
						fullWidth
						margin='normal'
						error={!!errors?.username}
						helperText={`${errors?.username ? errors.username.message : ""}`}
					/>
					<TextField
						{
							...register(
								'password',
								{
									required: "Password is required.",
									minLength: {
										value: 6,
										message: "Password length at least 6 characters"
									}
								})
						}
						label='Password'
						type='password'
						variant='outlined'
						fullWidth
						margin='normal'
						error={!!errors?.password}
						helperText={`${errors?.password ? errors.password.message : ""}`}
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

export default Login;
