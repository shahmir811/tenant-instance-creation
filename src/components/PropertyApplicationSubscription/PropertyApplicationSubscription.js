import HouseIcon from '@mui/icons-material/House';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

const initialApps = [
	{ title: 'Passport', value: 'passport', checked: false },
	{ title: 'Nector Login', value: 'nector_app', checked: false },
];

const PropertyApplicationSubscription = ({ title, currentIndex, onChangeStep }) => {
	const [apps, setApps] = useState(initialApps);
	const [selectAll, setSelectAll] = useState(false);

	const handleCheckboxChange = index => event => {
		const newApps = [...apps];
		newApps[index].checked = event.target.checked;
		setApps(newApps);

		// Check if all apps are selected
		const areAllSelected = newApps.every(app => app.checked);
		setSelectAll(areAllSelected);
	};

	const handleSelectAllChange = event => {
		const checked = event.target.checked;
		setSelectAll(checked);
		const newApps = apps.map(app => ({ ...app, checked }));
		setApps(newApps);
	};

	return (
		<Paper elevation={2} style={{padding: '12px', marginTop: '4px'}}>
			<Typography variant='h4' gutterBottom color='#828F95'>
				{title}
			</Typography>
			<Grid item xs={6} md={8}>
				<Grid item xs={6} style={{ padding: '20px', border: '1px solid black' }}>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox checked={selectAll} onChange={handleSelectAllChange} />}
							label='Select All'
						/>
						{apps.map((app, index) => (
							<FormControlLabel
								key={app.value}
								control={<Checkbox checked={app.checked} onChange={handleCheckboxChange(index)} name={app.value} />}
								label={app.title}
							/>
						))}
					</FormGroup>
				</Grid>
			</Grid>
			<Grid container justifyContent='space-between' spacing={2} style={{ marginTop: '15px' }}>
				{/* Left-aligned buttons */}
				<Grid item>
					<Grid container spacing={2}>
						<Grid item>
							<Button variant='outlined' color='primary'>
								Subscribe Application
							</Button>
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
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default PropertyApplicationSubscription;
