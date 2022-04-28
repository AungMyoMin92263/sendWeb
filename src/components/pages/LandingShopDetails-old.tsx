import React from 'react'

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import styles from '../css/pages.module.css';
// import component 👇
import UserDashShopCard from '../atoms/ui-elements/UserDashShopCard';
// app bar
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

//crousel
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from "react-router-dom";
import { Grid, Paper, Stack } from '@mui/material'
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

//image
import Welcome from './../../assets/images/welcome.jpg';
import Item from './../../assets/images/batteryItem.jpg';
import Item1 from './../../assets/images/battery1.jpg';
import Item2 from './../../assets/images/battery2.jpg';
import Item3 from './../../assets/images/battery3.jpg';
import Item4 from './../../assets/images/battery4.jpg';

import Cat from './../../assets/images/sdcard.jpg';
import Cat1 from './../../assets/images/sdcard1.jpg';
import Cat2 from './../../assets/images/sdcard2.jpeg';
import Cat3 from './../../assets/images/sdcard3.jpg';
import Cat4 from './../../assets/images/sdcard4.jpg';
import Cat5 from './../../assets/images/sdcard5.jpg';

import abc from './../../assets/images/abc.png';
import gg from './../../assets/images/gg.png';
import CityExpress from './../../assets/images/cityexpress.png';
import OneStopMart from './../../assets/images/1stopmart.jpg';
import Ocean from './../../assets/images/ocean.png';
import CityMart from './../../assets/images/citymart.png';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Banner from './../../assets/icons/banner.png';
import featuredoffer1 from './../../assets/icons/featuredoffer1.png';
import featuredoffer2 from './../../assets/icons/featuredoffer2.png';
import featuredoffer3 from './../../assets/icons/featuredoffer3.png';
import shop1 from './../../assets/icons/shop1.png';
import shop2 from './../../assets/icons/shop2.png';

import './../../assets/icons/grocery.png';

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';

const bannerImageStyle = {
    width: 'auto',
    height: '150px',
    backgroundColor: 'lightgray',
}
const typeMenu = [
    {
        id: 0,
        label: 'Grocery',
        image: 'grocery.png'
    },
    {
        id: 0,
        label: 'Cleaning',
        image: 'cleaning.png'
    },
    {
        id: 0,
        label: 'Services',
        image: 'services.png'
    },
    {
        id: 0,
        label: 'Other',
        image: 'other.png'
    }
];

const imageStyle = {
    width: '100%',
    maxHeight: '145px',
    marginRight: '8px'
};

const menuImageStyle = {
    width: '42px',
    height: '42px',
    backgroundColor: 'lightgray',
    padding: '5px'
}
const cursor = {
    cursor: 'pointer'
};

//crousel
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

const responsiveShops = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const LandingShopDetails = (props: any) => {
    //cards
    // 
    // if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);
    // if (props.navOpen.navOpen) props.NavOpenACT(false);

    let propsCat1 = {
        title: "Batteries",
        navigateTo: "",
        icon: "../../../assets/images/burger.jpg",
        footer: "",
    };
    let propsCat2 = {
        title: "Proteins",
        navigateTo: "",
        icon: "../../../assets/images/burger.jpg",
        footer: "",
    };
    let propsCat3 = {
        title: "Pet Accessories",
        navigateTo: "",
        icon: "../../../assets/images/burger.jpg",
        footer: "",
    };
    let propsCat4 = {
        title: "SD Cards",
        navigateTo: "",
        icon: "../../../assets/images/burger.jpg",
        footer: "",
    };

    let propsShop1 = {
        title: "Farmart, Bedok",
        navigateTo: "",
        icon: "shop1.png",
        footer: "",
        rating: 5,
        duration: 5,
        delievery: 1.5
    };

    let propsShop2 = {
        title: "Farmart, Bedok",
        navigateTo: "",
        icon: "shop2.png",
        footer: "",
        rating: 5,
        duration: 5,
        delievery: 2
    };

    //Items
    let propsItem1 = {
        title: "Panasonic",
        navigateTo: "",
        icon: "../../../assets/images/burger.jpg",
        footer: "",
        price: '$100',
        properties: '20 watts',
    };
    let propsItem2 = {
        title: "Evenbody",
        navigateTo: "",
        icon: "../../../assets/images/burger.jpg",
        footer: "",
        price: '$100',
        properties: '20 watts',
    };
    let propsItem3 = {
        title: "Power",
        navigateTo: "",
        icon: "../../../assets/images/burger.jpg",
        footer: "",
        price: '$100',
        properties: '20 watts',
    };

    let propsGrocery = {
        title: "Grocery Delievery",
        count: "",
        navigateTo: "",
        icon: "",
        footer: "",
    };

    return (
        <>
            <div className="content" style={{ alignItems: "center" }}>
                <div style={{ marginLeft: "12%", marginRight: "12%", marginTop: "30px", marginBottom: '50px' }}>
                    <Box sx={{ backgroundColor: '#FFF', boxShadow: 2, padding: '15px', marginBottom: '15px' }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} style={cursor} variant="subtitle2" component="div" gutterBottom>
                                    Delievering to  :   Singapore 600111
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} style={cursor} variant="subtitle2" component="div" gutterBottom>
                                    When    :   ASAP
                                </Typography>
                            </Grid>
                        </Grid>

                    </Box>
                    <div style={{ width: '100%' }}>
                        <img src={Banner} alt="Shop" style={bannerImageStyle} />
                    </div>
                    <Box sx={{ pt: 2, pb: 2 }}>
                        <Stack direction="row" spacing={2}>
                            <>
                                {typeMenu.map((menu: any) => (
                                    <>
                                        <div>
                                            <div>
                                                <img style={menuImageStyle} src={require(`../../assets/icons/${menu.image}`)} />
                                            </div>
                                            <div>
                                                <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                                                    {menu.label}
                                                </Typography></div>
                                        </div>
                                    </>

                                ))}
                            </>

                        </Stack>

                    </Box>
                    <TextField className={styles.send_textfield}
                        sx={{ width: "95%", minHeight: '50px', mb: 2 }}
                        label="Search ..."
                        InputProps={{
                            endAdornment: (
                                <NavLink to="/main-shopping">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </NavLink>
                            )
                        }}
                    />
                    <Typography className={styles.send_typography} variant="subtitle2" pb={1} component="div" sx={{ flexGrow: 1 }}>
                        Featured Offers
                    </Typography>
                    <div style={{ width: '100%' }}>
                        <Stack direction="row" spacing={2}>
                            <div>
                                <NavLink to="/main-shopping">
                                    <img src={featuredoffer1} alt="Shop" style={imageStyle} />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/main-shopping">
                                    <img src={featuredoffer2} alt="Shop" style={imageStyle} />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/main-shopping">
                                    <img src={featuredoffer1} alt="Shop" style={imageStyle} />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/main-shopping">
                                    <img src={featuredoffer2} alt="Shop" style={imageStyle} />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/main-shopping">
                                    <img src={featuredoffer1} alt="Shop" style={imageStyle} />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/main-shopping">
                                    <img src={featuredoffer2} alt="Shop" style={imageStyle} />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/main-shopping">
                                    <img src={featuredoffer1} alt="Shop" style={imageStyle} />
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/main-shopping">
                                    <img src={featuredoffer2} alt="Shop" style={imageStyle} />
                                </NavLink>
                            </div>
                        </Stack>
                    </div>

                    <Typography className={styles.send_typography} variant="subtitle2" pt={1} pb={1} component="div" sx={{ flexGrow: 1 }}>
                        Featured Grocery Shops
                    </Typography>
                    <div style={{ width: '100%' }}>
                        <Stack direction="row" spacing={2}>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignContent: 'flex-start',
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        mr: 1
                                    }}
                                >
                                    <UserDashShopCard {...propsShop1} />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignContent: 'flex-start',
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        mr: 1
                                    }}
                                >
                                    <UserDashShopCard {...propsShop1} />
                                </Box>
                            </Box>
                        </Stack>
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
})(LandingShopDetails);