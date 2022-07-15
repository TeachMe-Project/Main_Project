import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ManageCourses from "../admin/ManageCourses";
import ManageUsers from '../admin/ManageUsers';
import VerifyTutorsPage from '../admin/VerifyTutorsPage';
import VerifyInstitutesPage from '../admin/VerifyInstitutesPage';
import ComplaintHandling from '../admin/ComplaintHandling';

export default function AdminTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Manage Users" value="1" />
            <Tab label="Manage Courses" value="2" />
            <Tab label="Complaint Handling" value="3" />
            <Tab label="Verify Tutors" value="4" />
            <Tab label="Verify Institutes" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><ManageUsers /></TabPanel>
        <TabPanel value="2"><ManageCourses /></TabPanel>
        <TabPanel value="3"><ComplaintHandling /></TabPanel>
        <TabPanel value="4"><VerifyTutorsPage /></TabPanel>
        <TabPanel value="5"><VerifyInstitutesPage /></TabPanel>
      </TabContext>
    </Box>
  );
}
