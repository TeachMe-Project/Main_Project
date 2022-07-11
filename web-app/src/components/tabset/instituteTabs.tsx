import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ExistingTutorsPage from '../institute/ExistingTutorsPage';
import ManageCourses from '../institute/ManageCourses';
import NewTutorsPage from '../institute/NewTutorsPage';

export default function InstituteTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Manage Courses" value="1" />
            <Tab label="Tutor Payments" value="2" />
            <Tab label="Existing Tutors" value="3" />
            <Tab label="New Tutors" value="4" />
            <Tab label="Institute Profile" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"> <ManageCourses /></TabPanel>
        <TabPanel value="2"> </TabPanel>
        <TabPanel value="3"> <ExistingTutorsPage /></TabPanel>
        <TabPanel value="4"> <NewTutorsPage /></TabPanel>
        <TabPanel value="5"> Institute Profile</TabPanel>
      </TabContext>
    </Box>
  );
}
