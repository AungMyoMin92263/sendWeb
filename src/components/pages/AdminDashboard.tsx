import React from 'react'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Stack from '@mui/material/Stack';
import styles from '../css/pages.module.css';
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@mui/material';

// app bar
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

//menu
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

//barchart
import BarChart from './HorizontalBarChart';

const AdminDashboard = (props: any) => {
    if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);

    const [period, setPeriod] = React.useState('10');
    const handleChangePeriod = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
    };
    return (
        <>
            <div className="content">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        p: 1,
                        m: 1,
                        borderRadius: 1,
                    }}
                >
                    <div className={styles.dashboard_card}>
                        <div><span className={`${styles.primary_color}`}>Orders</span></div>
                        <br></br>
                        <div><span>Total</span></div>
                        <div><span className={styles.text_bold}>1134,987</span></div>
                    </div>
                    <div className={styles.dashboard_card}>
                        <div><span className={`${styles.primary_color}`}>Service Providers</span></div>
                        <br></br>
                        <div><span>Total</span></div>
                        <div><span className={styles.text_bold}>5,600</span></div>
                    </div>
                    <div className={styles.dashboard_card}>
                        <div><span className={`${styles.primary_color}`}>Customers</span></div>
                        <br></br>
                        <div><span>Total</span></div>
                        <div><span className={styles.text_bold}>12,093</span></div>
                    </div>
                    <div className={styles.dashboard_card}>
                        <div><span className={`${styles.primary_color}`}>Couriers</span></div>
                        <br></br>
                        <div><span>Total</span></div>
                        <div><span className={styles.text_bold}>1,004</span></div>
                    </div>
                    <TextField className={styles.send_textfield}
                        sx={{ width: "266px", borderColor: '#E39435 !important' }}
                        label="Search"
                        InputProps={{
                            startAdornment: (
                                <IconButton sx={{ height: "50px" }}>
                                    <SearchIcon />
                                </IconButton>
                            )
                        }}
                    />
                </Box>
                <div className={styles.m_15}>
                    <Stack direction="row" spacing={3}>
                        <Typography className={styles.send_typography} variant="subtitle1" component="div" sx={{ flexGrow: 1, ml: 1, mt: 1 }}>
                            Sales
                        </Typography>
                        <Box sx={{ minWidth: 148 }}> <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Period</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={period}
                                label="Period"
                                onChange={handleChangePeriod}
                                size='small'
                            >
                                <MenuItem value={10}>30 days</MenuItem>
                                <MenuItem value={20}>60 Days</MenuItem>
                                <MenuItem value={30}>90 Days</MenuItem>
                            </Select>
                        </FormControl></Box>

                    </Stack>
                    <div className="row">
                    <BarChart />
                    </div>
                </div>
            </div>
        </>
    )
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
})(AdminDashboard);