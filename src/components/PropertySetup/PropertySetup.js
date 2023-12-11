import HouseIcon from '@mui/icons-material/House';
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import React, { useState } from 'react';

const PropertySetup = ({ title, currentIndex, onChangeStep }) => {
	const [state, setState] = useState({
		selectDelinquencies: 0,
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
			<Paper style={{ padding: '20px', marginTop: '20px' }}>
				<Typography variant='h2' gutterBottom color='#828F95'>
					{title}
				</Typography>

				<Grid>
					<Grid item xs={6}>
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-label'>Select Delinquencies</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={state.selectDelinquencies}
								label='Select Delinquency'
								name='selectDelinquencies'
								onChange={onChangeHandler}>
								<MenuItem value={0}>No Company Available</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container justifyContent='space-between' spacing={2} style={{ marginTop: '15px' }}>
					{/* Left-aligned buttons */}
					<Grid item>
						<Grid container spacing={2}>
							<Grid item>
								{/* <Button variant='outlined' color='primary'>
									Subscribe Owner
								</Button> */}
							</Grid>
						</Grid>
					</Grid>

					{/* Right-aligned button */}
					<Grid item>
						<Grid container spacing={1}>
							<Grid item>
								<Button
									variant='text'
									onClick={() => onChangeStep(0)}
									startIcon={
										<HouseIcon style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} />
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
			</Paper>
		</>
	);
};

export default PropertySetup;
