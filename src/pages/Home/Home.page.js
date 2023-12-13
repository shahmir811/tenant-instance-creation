// Login.js
import React from 'react';
import StepperComponent from '../../components/Stepper';
import TopAppBar from '../../components/shared/AppBar/AppBar.component';
import {Grid} from "@mui/material";
import Container from "@mui/material/Container";
import VerticalTabs from "./Tabs";

const App = () => {
	return (
		<Grid container direction={"column"}>
			<Grid item>
				<TopAppBar />
			</Grid>
			<Grid item>
				{/*<VerticalTabs/>*/}
				<StepperComponent />
			</Grid>
		</Grid>
	);
};

export default App;
