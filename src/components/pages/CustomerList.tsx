import React from 'react';

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@mui/material';

// app bar
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import categories from './categories';

//datepicker
import Stack from '@mui/material/Stack';

import styles from '../css/pages.module.css';

//icons
import AddIcon from '@mui/icons-material/Add';

//menu
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';
import { Link } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'No', width: 90 },
    { field: 'name', headerName: 'Customer Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'contact', headerName: 'Contact', width: 200 },
    { field: 'postalCode', headerName: 'Postal Code', width: 200 },

    
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
    { id: 1, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
    { id: 2, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
    { id: 3, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
    { id: 4, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
    { id: 5, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
    { id: 6, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
    { id: 7, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
    { id: 8, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
    { id: 9, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
];



const CustomerList = (props : any) => {

    
    if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);

    const selectTemplate = [];
    for (let cate of categories) {
        selectTemplate.push(<MenuItem value={cate.categoryId}> {cate.name} </MenuItem>);
    }

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    const handleChangeCategory = (event : any) => {
        let index = categories.findIndex(cat => cat.categoryId == event.target.value)
        if (index > -1) {
            setSelectedCategory(categories[index]);
        }
    };
    return (
        <>
            <div>
                <div>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                        <Typography className={styles.send_typography_page_title} variant="subtitle2" component="div">
                            Customers
                        </Typography>
                        <div>
                            <span className=''>498 Customers found</span>
                        </div>
                        </Box>

                        <Stack direction="row" spacing={2}>
                        <Box sx={{ width: '150px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Edit by Role </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedCategory.categoryId}
                                    label={selectedCategory.name}
                                    onChange={handleChangeCategory}
                                    sx={{ height: '40px', borderColor: '#E39435' }}
                                >
                                    {selectTemplate}
                                </Select>
                            </FormControl>
                        </Box>
                            <TextField className={styles.send_textfield} 
                                sx={{ width: "180px", borderColor : '#E39435 !important'}}
                                label="Search customer by name"
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <IconButton sx={{ height: "40px"}}>
                                            <SearchIcon />
                                        </IconButton>
                                    )
                                }}
                            />
                            <Link to="/customer-entry">
                            <Button variant="contained" startIcon={<AddIcon />} className={styles.send_btn_contained}>
                                Add customer
                            </Button>
                            </Link>
                        </Stack>
                    </Toolbar>
                    <div className={styles.send_datagrid}>
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

const mapStateToProps = ({
    menuState,headerState,navState
  }: StoreState): {open: MenuDataInterFace; headerOpen : HeaderDataInterFace;navOpen : NavigatorDataInterFace} => {
    return {
      open: menuState,
      headerOpen : headerState,
      navOpen : navState
    };
  };
  
  export default connect(mapStateToProps,{
    ToggleMenuACT,HeaderOpenACT,NavOpenACT
  })(CustomerList);