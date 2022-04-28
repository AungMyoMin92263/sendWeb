import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import component 👇
import UserDashShopCard from '../atoms/ui-elements/UserDashShopCard';

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import styles from '../css/pages.module.css';

// app bar
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//crousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from "react-router-dom";
import { Paper } from '@mui/material'

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

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Banner from './../../assets/images/bannerFinal.jpg';
import { ProductionQuantityLimitsTwoTone } from '@mui/icons-material';
import { render } from '@testing-library/react';

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';

const imageStyle = {
    width: '100px',
    height: '100px'
};

const itemImageStyle = {
    width: '60px',
    height: 'auto'
};

const cursor = {
    cursor: 'pointer'
};

const cart = [
    {
        product: {
            name: "EvenBody AA Player Battery",
            properties: "20 watts",
            description: "",
            price: "S$ 100"
        },
        qty: 1
    },
    {
        product: {
            name: "Panasonic AA Player Battery",
            properties: "20 watts",
            description: "",
            price: "S$ 100"
        },
        qty: 1
    }
]

interface Product {
    name: string,
    properties: string,
    description: string,
    price: string,
}

//crousel
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
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

const LandingShoppingPage = (props : any) => {
    if(!props.open.open)props.ToggleMenuACT(true);
  if(props.headerOpen.headerOpen)props.HeaderOpenACT(false);
  if(props.navOpen.navOpen)props.NavOpenACT(false);
    const [qty, setQty] = React.useState(1);
    const [price, setPrice] = React.useState(100);
    const [subTotal, setSubTotal] = React.useState(100);
    const [cost, setCost] = React.useState(105);

    const addItemClicked = () => {
        setQty((prevState) => prevState + 1)
        setCost((prevState) => 100 * qty + 5 + 100)
        setSubTotal((prevState) => 100 * qty + 100)
    }

    //cards

    let propsShop1 = {
        title: "ABC Store",
        navigateTo: "",
        icon: "../../../assets/images/burger.jpg",
        footer: "",
        rating: 5,
        duration: 5,
        delievery: "Free"
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
            <div id="content">
                <div className="content" style={{ height: 'calc(100vh - 70px)', overflowY: 'hidden' }}>
                    <div style={{ width: '352px', height: '100vh', float: 'right', borderLeft: "1px solid lightgrey", overflow: 'hidden' }}>
                    <Typography className={styles.send_typography} variant="subtitle2" p={4} component="div" sx={{ flexGrow: 1 }} align="center">
                        Your Order from Mart
                    </Typography>
                    <div style={{ width: '100%', backgroundColor: "#F5F5F5", height: '100px' }}>
                        <div style={{ width: '100%', display: 'flex' }}>

                            <img src={Item} alt="Item" style={itemImageStyle} />
                            <Typography className={styles.send_typography} variant="subtitle2" pl={1} pb={1} component="div" sx={{ flexGrow: 1 }}>
                                EvenBody Battery
                                <br></br>AA Player 20Watts
                            </Typography>
                            <Typography className={styles.send_typography} variant="subtitle2" pl={1} pb={1} component="div" sx={{ flexGrow: 1 }}>
                                S${price}
                            </Typography>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div style={{ float: 'right', display: 'flex', backgroundColor: "#FFF" }}>
                                <DeleteIcon sx={{ color: '#E39435', fontSize: 24, mr: 2 }} style={cursor}></DeleteIcon>
                                <Typography className={styles.send_typography} variant="subtitle2" mr={1} component="div">
                                    { qty }
                                </Typography>
                                <AddIcon sx={{ color: '#E39435', fontSize: 24, mr: 2 }} onClick={() => addItemClicked()} style={cursor}></AddIcon>
                            </div>
                        </div>
                    </div>
                    <Box sx={{ flexGrow: 1, m: 1 }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ ml: 2 }} variant="body2" component="div" gutterBottom>
                                    Subtotal                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ mr: 2 }} variant="body2" component="div" gutterBottom align='right'>
                                    { subTotal }
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ ml: 2 }} variant="body2" component="div" gutterBottom>
                                    Small order fee                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ mr: 2 }} variant="body2" component="div" gutterBottom align='right'>
                                    $2.00
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ ml: 2 }} variant="body2" component="div" gutterBottom>
                                    Delivery fee                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ mr: 2 }} variant="body2" component="div" gutterBottom align='right'>
                                    $2.00
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ ml: 2 }} variant="body2" component="div" gutterBottom>
                                    Platform fee                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ mr: 2 }} variant="body2" component="div" gutterBottom align='right'>
                                    $1.00
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ ml: 2 }} variant="body2" component="div" gutterBottom>
                                    Total (Incl. GST)                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={styles.send_typography} sx={{ mr: 2 }} variant="body2" component="div" gutterBottom align='right'>
                                   { cost }
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <LocalOfferIcon sx={{ color: '#E39435', fontSize: 24, m: 2 }}></LocalOfferIcon>
                        <Typography className={styles.send_typography} variant="body2" pl={2} component="div" sx={{ flexGrow: 1 }} align="center">
                            $2.10 off delivery fee with $40.00 and above. Let's go!
                        </Typography>
                        <Divider />
                        <Button variant="contained" style={{ backgroundColor: '#E39435', color: "#FFF", width: '322px', height: '50px', margin: '15px' }}>
                            Go to Checkout
                        </Button>
                    </Box>
                    </div>
                    <div style={{ width: "calc(100% - 353px)", float: 'right', alignItems: "center", height: 'calc(100vh - 70px)', overflowY: 'auto' }}>
                        <div style={{ marginLeft: "5%", marginRight: "10%", marginTop: "30px" }}>
                            <div style={{ width: '100%' }}>
                                <TextField className={styles.send_textfield} 
                                    sx={{ width: "95%", minHeight: '50px', ml: 4, mb: 3 }}
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
                            </div>
                            <div style={{ width: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignContent: 'flex-start',
                                        p: 1,
                                        ml: 3,
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
                            </div>
                            <Typography className={styles.send_typography} variant="subtitle2" pt={1} pl={4} pb={3} component="div" sx={{ flexGrow: 1 }}>
                                Top Categories
                            </Typography>
                            <div style={{ paddingLeft : "30px", display: 'flex' }}>
                                <Card sx={{ display: 'flex', width: '230px', height: '70px', cursor: 'pointer', background: "#f2f3f4", mr: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography className={styles.send_typography} component="div" variant="body2" sx={{ color: "#E39435" }}>
                                                Dairy,Chilled and Eggs
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 100 }}
                                        image={Banner}
                                        alt="Image"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', width: '220px', height: '70px', cursor: 'pointer', background: "#f2f3f4", mr: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography className={styles.send_typography} component="div" variant="body2" sx={{ color: "#E39435" }}>
                                                Fresh Produce
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 100 }}
                                        image={Banner}
                                        alt="Image"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', width: '220px', height: '70px', cursor: 'pointer', background: "#f2f3f4", mr: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography className={styles.send_typography} component="div" variant="body2" sx={{ color: "#E39435" }}>
                                                Bakery and Breakfast
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 100 }}
                                        image={Banner}
                                        alt="Image"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', width: '220px', height: '70px', cursor: 'pointer', background: "#f2f3f4", mr: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography className={styles.send_typography} component="div" variant="body2" sx={{ color: "#E39435" }}>
                                                Chinese New Year
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 100 }}
                                        image={Banner}
                                        alt="Image"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', width: '220px', height: '70px', cursor: 'pointer', background: "#f2f3f4", mr: 1 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography className={styles.send_typography} component="div" variant="body2" sx={{ color: "#E39435" }}>
                                                Weekly Highlights
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 100 }}
                                        image={Banner}
                                        alt="Image"
                                    />
                                </Card>
                            </div>
                            <Typography className={styles.send_typography} variant="subtitle2" pl={4} pb={1}  pt={3} component="div" sx={{ flexGrow: 1 }}>
                                Popular Products
                            </Typography>
                            <div style={{ width: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignContent: 'flex-start',
                                        p: 1,
                                        ml: 3,
                                        mb: 3,
                                        bgcolor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                >
                                    <Carousel
                                        swipeable={false}
                                        draggable={false}
                                        showDots={false}
                                        responsive={responsive}
                                        ssr={true} // means to render carousel on server-side.
                                        infinite={true}
                                        autoPlay={false}
                                        autoPlaySpeed={2000}
                                        keyBoardControl={true}
                                        customTransition="all .5"
                                        transitionDuration={500}
                                        containerClass="carousel-container"
                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                        deviceType={"desktop"}
                                        dotListClass="custom-dot-list-style"
                                        itemClass="carousel-item-padding-40-px"
                                    >
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                    </Carousel>
                                </Box>
                            </div>

                            <Typography className={styles.send_typography} variant="subtitle2" pl={4} pb={1} component="div" sx={{ flexGrow: 1 }}>
                                Top Savers
                            </Typography>
                            <div style={{ width: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignContent: 'flex-start',
                                        p: 1,
                                        ml: 3,
                                        mb: 3,
                                        bgcolor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                >
                                    <Carousel
                                        swipeable={false}
                                        draggable={false}
                                        showDots={false}
                                        responsive={responsive}
                                        ssr={true} // means to render carousel on server-side.
                                        infinite={true}
                                        autoPlay={false}
                                        autoPlaySpeed={2000}
                                        keyBoardControl={true}
                                        customTransition="all .5"
                                        transitionDuration={500}
                                        containerClass="carousel-container"
                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                        deviceType={"desktop"}
                                        dotListClass="custom-dot-list-style"
                                        itemClass="carousel-item-padding-40-px"
                                    >
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                    </Carousel>
                                </Box>
                            </div>

                            <Typography className={styles.send_typography} variant="subtitle2" pl={4} pb={1} component="div" sx={{ flexGrow: 1 }}>
                                Buy more, save more!
                            </Typography>
                            <div style={{ width: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignContent: 'flex-start',
                                        p: 1,
                                        ml: 3,
                                        mb: 3,
                                        bgcolor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                >
                                    <Carousel
                                        swipeable={false}
                                        draggable={false}
                                        showDots={false}
                                        responsive={responsive}
                                        ssr={true} // means to render carousel on server-side.
                                        infinite={true}
                                        autoPlay={false}
                                        autoPlaySpeed={2000}
                                        keyBoardControl={true}
                                        customTransition="all .5"
                                        transitionDuration={500}
                                        containerClass="carousel-container"
                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                        deviceType={"desktop"}
                                        dotListClass="custom-dot-list-style"
                                        itemClass="carousel-item-padding-40-px"
                                    >
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                        <div>
                                            <Paper sx={{ backgroundColor: "#FFF", minHeight: '120px', mr: 1 }}>
                                                <div>
                                                    <NavLink to="/product-details">
                                                        <img src={Cat} alt="Shop" style={imageStyle} />
                                                    </NavLink>

                                                </div>
                                                <div style={{ width: '100%', textAlign: 'right' }}>
                                                    <AddCircleIcon sx={{ color: '#E39435', fontSize: 36, mb: 0.5, mr: 0.5 }} onClick={() => addItemClicked()} style={cursor}>
                                                    </AddCircleIcon>
                                                </div>
                                            </Paper>
                                        </div>
                                    </Carousel>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

const mapStateToProps = ({
    menuState,headerState,navState
  }: StoreState): { open: MenuDataInterFace; headerOpen : HeaderDataInterFace;navOpen : NavigatorDataInterFace } => {
    return {
      open: menuState,
      headerOpen : headerState,
      navOpen : navState
    };
  };
  
  export default connect(mapStateToProps,{
    ToggleMenuACT,HeaderOpenACT,NavOpenACT
  })(LandingShoppingPage);