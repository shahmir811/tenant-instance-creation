import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {MAIN_STEPS} from "../../constants";
import {useState} from "react";
import CompanySetup from "../../components/CompanySetup/CompanySetup";
import ReplicateDelinquency from "../../components/ReplicateDelinquency/ReplicateDelinquency";
import CompanyApplicationSubscription
    from "../../components/CompanyApplicationSubscription/CompanyApplicationSubscription";
import PropertySetup from "../../components/PropertySetup/PropertySetup";
import PropertyApplicationSubscription
    from "../../components/PropertyApplicationSubscription/PropertyApplicationSubscription";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (event, newValue) => {
        setActiveStep(newValue);
    };

    const getStep = (stepNo) => {
        switch (stepNo) {
            case 0:
                return <CompanySetup title={MAIN_STEPS[0]} currentIndex={activeStep} onChangeStep={handleStepClick} />;
            case 1:
                return <ReplicateDelinquency title={MAIN_STEPS[1]} currentIndex={activeStep} onChangeStep={handleStepClick} />;
            case 2:
                return (
                    <CompanyApplicationSubscription title={MAIN_STEPS[2]} currentIndex={activeStep} onChangeStep={handleStepClick} />
                );
            case 3:
                return <PropertySetup title={MAIN_STEPS[3]} currentIndex={activeStep} onChangeStep={handleStepClick} />;
            case 4:
                return (
                    <PropertyApplicationSubscription title={MAIN_STEPS[4]} currentIndex={activeStep} onChangeStep={handleStepClick} />
                );
            default:
                return null;
        }
    };

    return (
        <Box
            // sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                // orientation="vertical"
                textColor="primary"
                variant="scrollable"
                value={activeStep}
                onChange={handleStepClick}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab sx={{flex: 1, border: activeStep ===0?0:1, borderColor: activeStep ===0 ? "inherit":"#24b5b6"}} label={MAIN_STEPS[0]} {...a11yProps(0)} />
                <Tab sx={{flex: 1, border: activeStep ===1?0:1, borderColor: activeStep ===1 ? "inherit":"#24b5b6"}} label={MAIN_STEPS[1]} {...a11yProps(1)} />
                <Tab sx={{flex: 1, border: activeStep ===2?0:1, borderColor: activeStep ===2 ? "inherit":"#24b5b6"}} label={MAIN_STEPS[2]} {...a11yProps(2)} />
                <Tab sx={{flex: 1, border: activeStep ===3?0:1, borderColor: activeStep ===3 ? "inherit":"#24b5b6"}} label={MAIN_STEPS[3]} {...a11yProps(3)} />
                <Tab dis sx={{flex: 1, border: activeStep ===4?0:1, borderColor: activeStep ===4 ? "inherit":"#24b5b6"}} label={MAIN_STEPS[4]} {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={activeStep} index={0}>
                <CompanySetup title={MAIN_STEPS[0]} currentIndex={activeStep} onChangeStep={(step)=>setActiveStep(step)} />
            </TabPanel>
            <TabPanel value={activeStep} index={1}>
                <ReplicateDelinquency title={MAIN_STEPS[1]} currentIndex={activeStep} onChangeStep={(step)=>setActiveStep(step)} />
            </TabPanel>
            <TabPanel value={activeStep} index={2}>
                <CompanyApplicationSubscription title={MAIN_STEPS[2]} currentIndex={activeStep} onChangeStep={(step)=>setActiveStep(step)} />
            </TabPanel>
            <TabPanel value={activeStep} index={3}>
                <PropertySetup title={MAIN_STEPS[3]} currentIndex={activeStep} onChangeStep={(step)=>setActiveStep(step)} />
            </TabPanel>
            <TabPanel value={activeStep} index={4}>
                <PropertyApplicationSubscription title={MAIN_STEPS[4]} currentIndex={activeStep} onChangeStep={(step)=>setActiveStep(step)} />
            </TabPanel>
        </Box>
    );
}
