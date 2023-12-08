// StepperComponent.js
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const StepperComponent = () => {
	const [activeStep, setActiveStep] = useState(0);

	const handleStepClick = step => {
		setActiveStep(step);
	};

	const steps = [
		'Company Setup',
		'Replicate Delinquency',
		'Company Application Subscription',
		'Property Setup',
		'Property Application Subscription',
	];

	const renderStepContent = () => {
		switch (activeStep) {
			case 0:
				return <Step1 title={steps[0]} />;
			case 1:
				return <Step2 title={steps[1]} />;
			case 2:
				return <Step3 title={steps[2]} />;
			case 3:
				return <Step4 title={steps[3]} />;
			case 4:
				return <Step5 title={steps[4]} />;
			default:
				return null;
		}
	};

	return (
		<div>
			<Stepper alternativeLabel activeStep={activeStep}>
				{[1, 2, 3, 4, 5].map((step, index) => (
					<Step key={step}>
						<StepLabel>
							<Button
								style={{
									backgroundColor: activeStep === index ? '#47979E' : '',
									color: activeStep === index ? 'white' : '',
								}}
								onClick={() => handleStepClick(step - 1)}>
								{steps[index]}
							</Button>
						</StepLabel>
					</Step>
				))}
			</Stepper>

			{renderStepContent()}
		</div>
	);
};

export default StepperComponent;
