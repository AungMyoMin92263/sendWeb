// import React from 'react';
import React, { Component, Fragment } from 'react';

import Grid from '@mui/material/Grid';
import { PieChart } from 'react-minimal-pie-chart';
import { NavLink, Link } from "react-router-dom";

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
import useScreenSize from "use-screen-size";

//datepicker
import Stack from '@mui/material/Stack';

import styles from '../css/pages.module.css';

//icons
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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

const LabelStyle = {
    fontSize: "5px",
    color: "#FFF"
};

const InventoryPage = (props: any) => {
    if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);

    const size = useScreenSize();
    const selectTemplate = [];
    for (let cate of categories) {
        selectTemplate.push(<MenuItem value={cate.categoryId}> {cate.name} </MenuItem>);
    }

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    const handleChangeCategory = (event: any) => {
        let index = categories.findIndex(cat => cat.categoryId == event.target.value)
        if (index > -1) {
            setSelectedCategory(categories[index]);
        }
    };
    return (
        <>
            <div>
                <Toolbar>
                    <Typography className={styles.send_typography_page_title} variant="h6" component="div" sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
                        Inventory
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <TextField className={styles.send_textfield}
                            sx={{ width: "250px", borderColor: '#E39435 !important' }}
                            label="Search product by name"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <IconButton sx={{ height: "40px" }}>
                                        <SearchIcon />
                                    </IconButton>
                                )
                            }}
                        />
                        <Link to="/product-entry">
                            <Button variant="contained" startIcon={<AddIcon />} className={styles.send_btn_contained}>
                                Add Product
                            </Button>
                        </Link>
                    </Stack>
                </Toolbar>
                <div className={styles.m_15}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            p: 1,
                            m: 1,
                            // bgcolor: 'background.paper',
                            borderRadius: 1,
                        }}
                    >
                        <div className={styles.col_5}>
                            <div><span>Total Products</span></div>
                            <br></br>
                            <div><span className={styles.text_green_bold}>398</span></div>
                        </div>
                        <div className={styles.col_5}>
                            <div><span>Categories</span></div>
                            <br></br>
                            <div><span className={styles.text_green_bold}>7</span></div>
                        </div>
                        <div className={styles.col_5}>
                            <div><span>Stock Count</span></div>
                            <br></br>
                            <div><span className={styles.text_green_bold}>2,881</span></div>
                        </div>
                    </Box>
                </div>

                <div className={styles.inventory_selling_box}>
                    <Typography className={styles.send_typography} variant="subtitle1" component="div" sx={{ ml: 1, mt: 3, mb: 3 }}>
                        Top Selling Items
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                        {/* <BubbleWordCloud /> */}
                            <div className={`${styles.w_230}`}>
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
                        </Grid>
                        <Grid item md={6}>
                            <div className={styles.send_prod_div}>
                                <div className={`${styles.send_prod_div_left} ${styles.primary_color}`}>
                                    <Typography className={styles.send_typography} variant="caption" component="div" align="center" sx={{ mt: 1.7 }}>
                                        <span>1</span>
                                    </Typography>
                                </div>
                                <img
                                    src={require(`../../assets/icons/product1.png`)}
                                    alt="Fruit"
                                    className={styles.send_prod_icon}
                                />
                                <div className={`${styles.mt_12}`}>
                                    <span>Organic Bananas</span>
                                    <span className={`${styles.ml_30}`}>$4.99</span>
                                    <span className={`${styles.primary_color} ${styles.ml_16}`}>422 sold</span>
                                    <ChevronRightIcon className={`${styles.ml_16} ${styles.float_right} ${styles.primary_color}`} />
                                </div>
                            </div>
                            <div className={styles.send_prod_div}>
                                <div className={`${styles.primary_color} ${styles.send_prod_div_left}`}>
                                    <Typography className={styles.send_typography} variant="caption" component="div" align="center" sx={{ mt: 1.7 }}>
                                        <span>1</span>
                                    </Typography>
                                </div>
                                <img
                                    src={require(`../../assets/icons/product1.png`)}
                                    alt="Fruit"
                                    className={styles.send_prod_icon}
                                />
                                <div className={`${styles.mt_12}`}>
                                    <span>Organic Bananas</span>
                                    <span className={`${styles.ml_30}`}>$4.99</span>
                                    <span className={`${styles.ml_16} ${styles.primary_color}`}>422 sold</span>
                                    <ChevronRightIcon className={`${styles.ml_16} ${styles.primary_color} ${styles.float_right}`}/>
                                </div>
                            </div>
                            <div className={styles.send_prod_div}>
                                <div className={`${styles.send_prod_div_left} ${styles.primary_color}`}>
                                    <Typography className={styles.send_typography} variant="caption" component="div" align="center" sx={{ mt: 1.7 }}>
                                        <span>1</span>
                                    </Typography>
                                </div>
                                <img
                                    src={require(`../../assets/icons/product1.png`)}
                                    alt="Fruit"
                                    className={styles.send_prod_icon}
                                />
                                <div className={`${styles.mt_12}`}>
                                    <span>Organic Bananas</span>
                                    <span className={`${styles.ml_30}`}>$4.99</span>
                                    <span className={`${styles.primary_color} ${styles.ml_16}`}>422 sold</span>
                                    <ChevronRightIcon className={`${styles.primary_color} ${styles.ml_16} ${styles.float_right}`} />
                                </div>
                            </div>
                            <div className={styles.send_prod_div}>
                                <div className={`${styles.send_prod_div_left} ${styles.mt_12} ${styles.primary_color}`}>
                                    <Typography className={styles.send_typography} variant="caption" component="div" align="center" sx={{ mt: 1.7 }}>
                                        <span>1</span>
                                    </Typography>
                                    
                                </div>
                                <img
                                    src={require(`../../assets/icons/product1.png`)}
                                    alt="Fruit"
                                    className={styles.send_prod_icon}
                                />
                                <div className={`${styles.mt_12}`}>
                                    <span>Organic Bananas</span>
                                    <span className={`${styles.ml_30}`}>$4.99</span>
                                    <span className={`${styles.primary_color} ${styles.ml_16}`}>422 sold</span>
                                    <ChevronRightIcon className={`${styles.primary_color} ${styles.ml_16} ${styles.float_right}`} />
                                </div>
                            </div>
                            <div className={styles.send_prod_div}>
                                <div className={`${styles.send_prod_div_left} ${styles.primary_color}`}>
                                    <Typography className={styles.send_typography} variant="caption" component="div" align="center" sx={{ mt: 1.7 }}>
                                        <span>1</span>
                                    </Typography>
                                </div>
                                <img
                                    src={require(`../../assets/icons/product1.png`)}
                                    alt="Fruit"
                                    className={styles.send_prod_icon}
                                />
                                <div className={`${styles.mt_12}`}>
                                    <span>Organic Bananas</span>
                                    <span className={`${styles.mt_12}`}>$4.99</span>
                                    <span className={`${styles.primary_color} ${styles.ml_16}`}>422 sold</span>
                                    <ChevronRightIcon className={`${styles.primary_color} ${styles.float_right} ${styles.ml_16}`}/>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                </div>
                <div className={styles.inventory_grid_box}>
                    <Typography className={styles.send_typography} variant="subtitle1" component="div" sx={{ flexGrow: 1,mt: 3, mb: 3 }}>
                        Product List
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            // bgcolor: 'background.paper',
                            borderRadius: 1,
                        }}
                    >
                        <Box sx={{ width: '250px',mr:1,mb:2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">All products </InputLabel>
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
                        <Box sx={{width: '250px',mr:1,mb:2  }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sort by alphabet </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedCategory.categoryId}
                                    label={selectedCategory.name}
                                    onChange={handleChangeCategory}
                                    sx={{ height: '40px' }}
                                >
                                    {selectTemplate}
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField className={styles.send_textfield}
                            sx={{ width: "228px",mr:1,mb:2,borderColor: '#E39435 !important' }}
                            label="Search Products"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <IconButton sx={{ height: "40px" }}>
                                        <SearchIcon />
                                    </IconButton>
                                )
                            }}
                        />
                        <Button variant="contained" className={`${styles.send_button_active} ${styles.h_40}`}>
                            Edit
                        </Button>
                    </Box>
                    <div className={`${styles.h_375}`}>
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
    menuState, headerState, navState
}: StoreState): { open: MenuDataInterFace; headerOpen: HeaderDataInterFace; navOpen: NavigatorDataInterFace } => {
    return {
        open: menuState,
        headerOpen: headerState,
        navOpen: navState
    };
};

export default connect(mapStateToProps, {
    ToggleMenuACT, HeaderOpenACT, NavOpenACT
})(InventoryPage);