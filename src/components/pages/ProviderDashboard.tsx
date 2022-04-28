import React from 'react';

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@mui/material';

// app bar
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid } from '@mui/x-data-grid';

import Grid from '@mui/material/Grid';

//menu
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

//datepicker
import Stack from '@mui/material/Stack';
import styles from '../css/pages.module.css';
import catIcon from './../../assets/icons/category.png';
import StarRateIcon from '@mui/icons-material/StarRate';
import revenueIcon from './../../assets/icons/revenue.png';
import inventoryIcon from './../../assets/icons/inventory.png';
import customersIcon from './../../assets/icons/customers.png';
import cashIcon from './../../assets/icons/cash.png';
import categories from './categories';

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';

import ReactApexChart from 'react-apexcharts';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RadialBarChart from './RadialBarChart';

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

const options = {
    chart: {
        id: "basic-bar",
        height: 350,
        zoom: {
            enabled: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: 5,
            }
        }
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany']
    },
    dataLabels: {
        style: {
          colors: ['#FFF']
        }
    },
    fill: {
        colors: ['#E39435']
    }
};

const series = [
    {
        name: "series-1",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
];

const ProviderDashboard = (props: any) => {
    const [period, setPeriod] = React.useState('10');
    const handleChangePeriod = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
    };

    if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    const selectTemplate = [];
    for (let cate of categories) {
        selectTemplate.push(<MenuItem value={cate.categoryId}> {cate.name} </MenuItem>);
    }

    const handleChangeCategory = (event: any) => {
        console.log('event', event)
        let index = categories.findIndex(cat => cat.categoryId == event.target.value)
        if (index > -1) {
            setSelectedCategory(categories[index]);
        }
    };
    return (
        <>
            {/* <Grid container sx={{ flexDirection: { xs: "column",sm : "column",md: "row" } }}>
                    <Grid item md={12} sm={12}>
                        
                    </Grid>
                </Grid>
                <Grid container sx={{ flexDirection: { xs: "column", sm : "column",md: "row" } }}>

                    <Grid item md={12} sm={12}>
                        
                    </Grid>
                </Grid> */}
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
                <div className={`${styles.send_dash1}`}>
                    <div className={`${styles.flex} ${styles.pro_dash1_margin}`} >
                        <img src={catIcon} alt="Shop" className={styles.icon_48} />
                        <Box id="send_select" sx={{ width: '280px' }} >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Category </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedCategory.categoryId}
                                    label={selectedCategory.name}
                                    onChange={handleChangeCategory}
                                    sx={{ border: 'none' }}
                                >
                                    {selectTemplate}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div className={styles.send_dash2}>
                    <div>
                        <div className={`${styles.m_8} ${styles.h_35_div}`}>
                            <img src={revenueIcon} alt="Shop" className={styles.icon_24} />
                        </div>
                        <div className={`${styles.m_8} ${styles.h_35_div}`}>
                            <span>Gross Revenue</span>
                        </div>
                        <div className={`${styles.m_8} ${styles.h_35_div}`}>
                            <span className={styles.text_bold}>$ 31,125.00</span>
                        </div>
                    </div>
                </div>
                <div className={styles.send_dash2}>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <StarRateIcon sx={{ color: '#E39435', fontSize: 14 }}></StarRateIcon>
                        <StarRateIcon sx={{ color: '#E39435', fontSize: 14 }}></StarRateIcon>
                        <StarRateIcon sx={{ color: '#E39435', fontSize: 14 }}></StarRateIcon>
                        <StarRateIcon sx={{ color: '#E39435', fontSize: 14 }}></StarRateIcon>
                        <StarRateIcon sx={{ color: '#E39435', fontSize: 14 }}></StarRateIcon>
                    </div>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <span>Users Feedback</span>
                    </div>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <span className={styles.text_bold}>4.2</span>
                        <span>/5.0</span>
                    </div>
                </div>
                <div className={styles.send_dash2}>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <img src={inventoryIcon} alt="Shop" className={styles.icon_24} />

                    </div>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <span>Inventory</span>
                    </div>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <span className={styles.text_bold}>398 </span>
                        <span>items</span>
                    </div>
                </div>
                <div className={styles.send_dash2}>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <img src={customersIcon} alt="Shop" className={styles.icon_24} />
                    </div>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <span>Customers</span>
                    </div>
                    <div className={`${styles.m_8} ${styles.h_35_div}`}>
                        <span className={styles.text_bold}>2435</span>
                    </div>
                </div>
            </Box>
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
                <div className={styles.radial_bar}>
                <RadialBarChart />
                </div>
                <div className={styles.col_5}>
                    <img src={cashIcon} alt="Shop" className={styles.cashIcon} />
                </div>
                <div className={styles.col_5}>
                    <div><span>Today’s Overview</span></div>
                    <br></br>
                    <div><span>Sales</span></div>
                    <div><span className={styles.text_green_bold}>$ 2,125.00</span></div>
                </div>
                <div className={styles.col_5}>
                    <br></br><br></br>
                    <div><span>Orders</span></div>
                    <div><span className={styles.text_green_bold}>23</span></div>
                </div>
                <div className={styles.col_5}>
                    <br></br><br></br>

                    <div><span>Delivered</span></div>
                    <div><span className={styles.text_green_bold}>21</span></div>
                </div>
                <div className={styles.col_5}>
                    <br></br><br></br>
                    <div><span>Pending</span></div>
                    <div><span className={styles.text_green_bold}>2</span></div>
                </div>
            </Box>

            <div className={styles.pro_grid_box}>
                <Stack direction="row" spacing={3}>
                    <Typography className={styles.send_typography} variant="subtitle1" component="div" sx={{ flexGrow: 1, ml: 1, mt: 1 }}>
                        Statistic
                    </Typography>
                    <Box sx={{ width: 148 }}> <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Period</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={period}
                            label="Period"
                            onChange={handleChangePeriod}
                            size='small'
                        >
                            <MenuItem value={10}>Quarterly</MenuItem>
                            <MenuItem value={20}>Monthly</MenuItem>
                            <MenuItem value={30}>Yearly</MenuItem>
                        </Select>
                    </FormControl></Box>
                </Stack>
                <div id="chart">
                    <ReactApexChart
                        type="bar"
                        options={options}
                        series={series}
                        height={250}
                    />
                </div>
            </div>

            <div className={styles.pro_grid_box}>
                <Grid container>

                    <Grid item md={4} sm={12}>
                        <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, marginRight: '8px' }}>
                            Orders
                        </Typography>
                    </Grid>
                    <Grid item md={8} sm={12}>
                        <TextField
                            className={`${styles.send_textfield} ${styles.float_right}`}
                            sx={{ width: "250px", borderColor: '#E39435 !important', mt: 1 }}
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
                    </Grid>
                </Grid>
                <div className={styles.h_375}>
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
})(ProviderDashboard);