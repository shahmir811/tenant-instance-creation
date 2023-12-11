// StepperComponent.js
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';

import CompanyApplicationSubscription from './CompanyApplicationSubscription/CompanyApplicationSubscription';
import CompanySetup from './CompanySetup/CompanySetup';
import PropertyApplicationSubscription from './PropertyApplicationSubscription/PropertyApplicationSubscription';
import PropertySetup from './PropertySetup/PropertySetup';
import ReplicateDelinquency from './ReplicateDelinquency/ReplicateDelinquency';

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
				return <CompanySetup title={steps[0]} currentIndex={activeStep} onChangeStep={handleStepClick} />;
			case 1:
				return <ReplicateDelinquency title={steps[1]} currentIndex={activeStep} onChangeStep={handleStepClick} />;
			case 2:
				return (
					<CompanyApplicationSubscription title={steps[2]} currentIndex={activeStep} onChangeStep={handleStepClick} />
				);
			case 3:
				return <PropertySetup title={steps[3]} currentIndex={activeStep} onChangeStep={handleStepClick} />;
			case 4:
				return (
					<PropertyApplicationSubscription title={steps[4]} currentIndex={activeStep} onChangeStep={handleStepClick} />
				);
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
