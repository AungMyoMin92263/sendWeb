import React from 'react';
// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css'

// style
import styles from '../css/pages.module.css';

import SearchBar from "material-ui-search-bar";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@mui/material';

// app bar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, NavLink } from "react-router-dom";
import DashboardCard from '../atoms/DashboardCard';
import { PieChart } from 'react-minimal-pie-chart';
import { DataGrid } from '@mui/x-data-grid';

//menu
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//datepicker
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

const LabelStyle = {
    fontSize: "5px",
    color: "#FFF"
};

//datatable
const columns = [
    { field: 'id', headerName: 'No', width: 90 },
    { field: 'serviceName', headerName: 'Service Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 200 },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'date',
        width: 200,
    },
    {
        field: 'noOfOrders',
        headerName: 'No of Orders',
        type: 'number',
        width: 200,
    },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is idt sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params: any) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];


const rows = [
    { id: 1, serviceName: 'Service 1', category: 'Category 1', createdAt: new Date(), noOfOrders: 100 },
    { id: 2, serviceName: 'Service 1', category: 'Category 1', createdAt: new Date(), noOfOrders: 100 },
    { id: 3, serviceName: 'Service 1', category: 'Category 1', createdAt: new Date(), noOfOrders: 100 },
    { id: 4, serviceName: 'Service 1', category: 'Category 1', createdAt: new Date(), noOfOrders: 100 },
    { id: 5, serviceName: 'Service 1', category: 'Category 1', createdAt: null, noOfOrders: 100 },
    { id: 6, serviceName: 'Service 1', category: 'Category 1', createdAt: new Date(), noOfOrders: 100 },
    { id: 7, serviceName: 'Service 1', category: 'Category 1', createdAt: new Date(), noOfOrders: 100 },
    { id: 8, serviceName: 'Service 1', category: 'Category 1', createdAt: new Date(), noOfOrders: 100 },
    { id: 9, serviceName: 'Service 1', category: 'Category 1', createdAt: new Date(), noOfOrders: 100 },
];



const ProviderDashboard = () => {
    const [serviceType, setServiceType] = React.useState('grocery');

    const handleChange = (event: any) => {
        setServiceType(event.target.value);
    };

    const [value, setValue] = React.useState(new Date());

    const handleDateChange = (newValue: any) => {
        setValue(newValue);
    };
    return (
        <>
            <div style={{ margin: '5px' }}>
                <Toolbar >
                    <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                        Service Provider Dashboard
                    </Typography>
                    <TextField className={styles.send_textfield} 
                        label="Search ..."
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            )
                        }}
                    />
                </Toolbar>
                <div style={{ margin: '8px' }}>
                    <Typography className={styles.send_typography} variant="subtitle2" pl={2} mr={2} mb={2} component="div" sx={{ flexGrow: 1 }}>
                        Top 5 Selling Items
                    </Typography>
                    <div style={{ width: '300px' }}>
                        <PieChart
                            label={({ dataEntry }) => dataEntry.title + '(' + dataEntry.value + ')'}
                            labelStyle={(segmentIndex) => LabelStyle}
                            data={[
                                { title: 'Panasonic', value: 10, color: '#E38627' },
                                { title: 'Energizer', value: 15, color: '#C13C37' },
                                { title: 'Evenbody', value: 20, color: '#6A2135' },
                                { title: 'Power', value: 10, color: '#E38627' },
                                { title: 'National', value: 15, color: '#C13C37' },
                            ]}
                        />
                    </div>
                    <Toolbar>
                        <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                            Orders
                        </Typography>

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack direction="row" spacing={2}>
                                <Box sx={{ minWidth: 200 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Service Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={serviceType}
                                            label="Service Type"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'grocery'}>Grocery Delievery</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <DateTimePicker
                                    label="Date&Time picker"
                                    value={value}
                                    onChange={handleDateChange}
                                    renderInput={(params: any) => <TextField className={styles.send_textfield}  {...params} />}
                                />
                                <DateTimePicker
                                    label="Date&Time picker"
                                    value={value}
                                    onChange={handleDateChange}
                                    renderInput={(params: any) => <TextField className={styles.send_textfield}  {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </Toolbar>
                    <div style={{ height: 400, width: 'calc(100% - 30px)', padding: '15px' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProviderDashboard