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
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 200 },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'date',
        width: 200,
    },
    {
        field: 'price',
        headerName: 'Price',
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
    { id: 1, name: 'Service 1', category: 'Category 1', createdAt: new Date(), price: 100 },
    { id: 2, name: 'Service 1', category: 'Category 1', createdAt: new Date(), price: 100 },
    { id: 3, name: 'Service 1', category: 'Category 1', createdAt: new Date(), price: 100 },
    { id: 4, name: 'Service 1', category: 'Category 1', createdAt: new Date(), price: 100 },
    { id: 5, name: 'Service 1', category: 'Category 1', createdAt: null, price: 100 },
    { id: 6, name: 'Service 1', category: 'Category 1', createdAt: new Date(), price: 100 },
    { id: 7, name: 'Service 1', category: 'Category 1', createdAt: new Date(), price: 100 },
    { id: 8, name: 'Service 1', category: 'Category 1', createdAt: new Date(), price: 100 },
    { id: 9, name: 'Service 1', category: 'Category 1', createdAt: new Date(), price: 100 },
];



const ProductList = () => {
    const [category, setCategory] = React.useState('grocery');

    const handleChange = (event: any) => {
        setCategory(event.target.value);
    };

    const [value, setValue] = React.useState(new Date());

    const handleDateChange = (newValue: any) => {
        setValue(newValue);
    };
    return (
        <>
            <div style={{ margin: '5px' }}>
                <Toolbar>
                    <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                        Product List
                    </Typography>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack direction="row" spacing={2}>
                            <Box sx={{ minWidth: 200 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Category"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'Fruits'}>Fruits</MenuItem>
                                        <MenuItem value={'AsianFoods'}>Asian Foods</MenuItem>
                                        <MenuItem value={'WesternFoods'}>Western Foods</MenuItem>
                                        <MenuItem value={'WesternFoods'}>Western Foods</MenuItem>
                                        <MenuItem value={'KoreanFoods'}>Korean Foods</MenuItem>
                                        <MenuItem value={'ThaiCuisines'}>Thai Cuisines</MenuItem>
                                        <MenuItem value={'Beverage'}>Beverage</MenuItem>

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
        </>

    );
}

export default ProductList