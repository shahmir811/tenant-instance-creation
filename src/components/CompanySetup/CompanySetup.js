import HouseIcon from '@mui/icons-material/House';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Paper,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import styles from './CompanySetup.module.css';

const CompanySetup = ({ title, currentIndex, onChangeStep }) => {
	const [environment, setEnvironment] = useState('uat');
	const [gdsOwnerId, setGdsOwnerId] = useState('');
	const [state, setState] = useState({
		ownerId: '',
		businessName: '',
		subDomain: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		database: '',
		collection: '',
		redshift: '',
		redshiftSchema: '',
		namespace: '',
	});

	const onChangeHandler = e => {
		const { name, value } = e.target;
		setState(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleEnvironmentChange = event => {
		setEnvironment(event.target.value);
	};

	const onChangeGDSOwnerId = event => {
		setGdsOwnerId(event.target.value);
	};

	const verifyOwnerClicked = () => {
		console.log(gdsOwnerId);
		console.log('verifyOwnerClicked button clicked');
	};

	return (
		<>
			<Typography variant='h2' gutterBottom color='#828F95'>
				{title}
			</Typography>

			<Paper style={{ padding: '20px', marginTop: '20px' }}>
				<FormControl component='fieldset' fullWidth>
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
										<FormControlLabel value='production' control={<Radio />} label='Production' />
									</RadioGroup>
								</FormControl>
							</Paper>
						</Grid>
					</Grid>

					<Grid container spacing={3} style={{ marginBottom: '20px' }}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='gds-owner-id'
								label='GDS Owner ID'
								variant='outlined'
								name='gdsOwnerId'
								value={gdsOwnerId}
								onChange={onChangeGDSOwnerId}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant='outlined' color='primary' sx={{ height: '55px' }} onClick={verifyOwnerClicked}>
								Verify Owner
							</Button>
						</Grid>
					</Grid>

					<Grid container spacing={3} style={{ marginBottom: '20px' }}>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='owner-id'
								label='Owner ID'
								variant='outlined'
								name='ownerId'
								value={state.ownerId}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='business-name'
								label='Business Name'
								variant='outlined'
								name='businessName'
								value={state.businessName}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='subdomain'
								label='Subdomain'
								variant='outlined'
								name='subDomain'
								value={state.subDomain}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='first-name'
								label='First Name'
								variant='outlined'
								name='firstName'
								value={state.firstName}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='last-name'
								label='Last Name'
								variant='outlined'
								name='lastName'
								value={state.lastName}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								type='email'
								id='email'
								label='Email'
								variant='outlined'
								name='email'
								value={state.email}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='phone'
								label='Phone'
								variant='outlined'
								name='phone'
								value={state.phone}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}></Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='database'
								label='Database'
								variant='outlined'
								name='database'
								value={state.database}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='collection'
								label='Collection'
								variant='outlined'
								name='collection'
								value={state.collection}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='redshift'
								label='Redshift'
								variant='outlined'
								name='redshift'
								value={state.redshift}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='redshift-schema'
								label='Redshift Schema'
								variant='outlined'
								name='redshiftSchema'
								value={state.redshiftSchema}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								required
								fullWidth
								id='namespace'
								label='Namespace'
								variant='outlined'
								name='namespace'
								value={state.namespace}
								onChange={onChangeHandler}
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<FormControlLabel control={<Checkbox defaultChecked />} label='Platform Integration Enabled' />
						</Grid>
					</Grid>

					<Grid container justifyContent='space-between' spacing={2}>
						{/* Left-aligned buttons */}
						<Grid item>
							<Grid container spacing={2}>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Create Website
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Register Twilio Number
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Search Location
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Reset
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
											<HouseIcon style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} />
										}></Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary' onClick={() => onChangeStep(currentIndex + 1)}>
										Next
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</FormControl>
			</Paper>
		</>
	);
};

export default CompanySetup;
