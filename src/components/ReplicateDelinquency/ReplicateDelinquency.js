import HouseIcon from '@mui/icons-material/House';
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

import styles from './ReplicateDelinquency.module.css';

const ReplicateDelinquency = ({ title, currentIndex, onChangeStep }) => {
	const [environment, setEnvironment] = React.useState('uat');

	const handleEnvironmentChange = event => {
		setEnvironment(event.target.value);
	};

	const [state, setState] = useState({
		availableDelinquencies: '',
		sourceCompany: 10,
		sourceDelinquencies: 10,
	});

	const onChangeHandler = e => {
		const { name, value } = e.target;
		setState(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<Typography variant='h2' gutterBottom color='#828F95'>
				{title}
			</Typography>

			<Paper style={{ padding: '20px', marginTop: '20px' }}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Paper variant='outlined' sx={{ p: 2, my: 1 }} className={styles.paperWrap}>
							<FormControl component='fieldset' sx={{ m: 3 }}>
								<FormLabel component='legend'>Environment</FormLabel>
								<RadioGroup
									row
									aria-label='environment'
									name='environment'
									value={environment}
									onChange={handleEnvironmentChange}>
									<FormControlLabel value='uat' control={<Radio />} label='UAT' />
									<FormControlLabel value='qa' control={<Radio />} label='QA' />
									<FormControlLabel value='productionTrial' control={<Radio />} label='Production Trial' />
									<FormControlLabel value='production' control={<Radio />} label='Production' />
								</RadioGroup>
							</FormControl>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id='available-delinquencies'
							label='Available Delinquencies'
							variant='outlined'
							name='availableDelinquencies'
							value={state.availableDelinquencies}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-label'>Source Company</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={state.sourceCompany}
								name='sourceCompany'
								label='Source Company'
								onChange={onChangeHandler}>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-label'>Source Delinquencies</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={state.sourceDelinquencies}
								label='Source Delinquencies'
								name='sourceDelinquencies'
								onChange={onChangeHandler}>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<Grid container justifyContent='space-between' spacing={2} style={{ marginTop: '15px' }}>
							{/* Left-aligned buttons */}
							<Grid item>
								<Grid container spacing={2}>
									<Grid item>
										<Button variant='outlined' color='primary'>
											Transfer
										</Button>
									</Grid>
								</Grid>
							</Grid>

							{/* Right-aligned button */}
							<Grid item>
								<Grid container spacing={2}>
									<Grid item>
										<Button
											variant='text'
											onClick={() => onChangeStep(0)}
											startIcon={
												<HouseIcon
													style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}
												/>
											}></Button>
									</Grid>
									<Grid item>
										<Button variant='outlined' color='primary' onClick={() => onChangeStep(currentIndex - 1)}>
											Back
										</Button>
									</Grid>
									<Grid item>
										<Button variant='outlined' color='primary' onClick={() => onChangeStep(currentIndex + 1)}>
											Next
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default ReplicateDelinquency;
