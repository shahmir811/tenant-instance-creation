// App.js
import React from 'react';
import StepperComponent from '../../components/Stepper';
import TopAppBar from '../../components/shared/AppBar/AppBar.component';

const App = () => {
	return (
		<div>
			<TopAppBar />
			<StepperComponent />
		</div>
	);
};

export default App;
