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
import React from 'react';

import styles from './Step1.module.css';

const Step1 = ({ title }) => {
	const [environment, setEnvironment] = React.useState('UAT');

	const handleEnvironmentChange = event => {
		setEnvironment(event.target.value);
	};

	// Add more states and methods as necessary to handle form inputs and submission

	return (
		<>
			<Typography variant='h2' gutterBottom color='#828F95'>
				{title}
			</Typography>

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
									<FormControlLabel value='UAT' control={<Radio />} label='UAT' />
									<FormControlLabel value='Production' control={<Radio />} label='Production' />
								</RadioGroup>
							</FormControl>
						</Paper>
					</Grid>
				</Grid>

				<Grid container spacing={3} style={{ marginBottom: '20px' }}>
					<Grid item xs={12} sm={6}>
						<TextField required fullWidth id='gds-owner-id' label='GDS Owner ID' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={6}>
						<Button variant='outlined' color='primary' sx={{ height: '55px' }}>
							Verify Owner
						</Button>
					</Grid>
				</Grid>

				<Grid container spacing={3} style={{ marginBottom: '20px' }}>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='owner-id' label='Owner ID' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='business-name' label='Business Name' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='subdomain' label='Subdomain' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='first-name' label='First Name' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='last-name' label='Last Name' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='email' label='Email' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='phone' label='Phone' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}></Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='database' label='Database' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='collection' label='Collection' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='redshift' label='Redshift' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='redshift-schema' label='Redshift Schema' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField required fullWidth id='namespace' label='Namespace' variant='outlined' />
					</Grid>
					<Grid item xs={12} sm={3}>
						<FormControlLabel control={<Checkbox defaultChecked />} label='Platform Integration Enabled' />
					</Grid>
				</Grid>
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
					{/* <Button variant='outlined' color='primary'>
							Create Website
						</Button> */}
					{/* Include other buttons and their functionality */}
					<Grid item>
						<Button variant='outlined' color='primary'>
							Next
						</Button>
					</Grid>
				</Grid>
			</FormControl>
		</>
	);
};

export default Step1;
