import React from 'react';

import { Divider, Grid, Paper } from "@mui/material";
import Button from '@mui/material/Button';

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import styles from '../css/pages.module.css';
import mainStyles from '../css/web-commerce.module.css';
import stylesHeader from '../css/header.module.css';
import stylesOnBoarding from '../css/OnBoarding.module.css';
import LogoIcon from './../../assets/icons/logo_white.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

//icon
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MessageIcon from '@mui/icons-material/Message';

// app bar
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//crousel
import 'react-multi-carousel/lib/styles.css';
import { NavLink, useHistory } from "react-router-dom";

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { CartCountInterFace } from '../interfaces/cartCount.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';
import { CartCountACT } from '../actions/CartCountAction';

import serviceMenus from "./ServiceMenu";
import map from './../../assets/icons/map.png';

// import component 👇
import products from "./products";

//custom textfield
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';

import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import dollar from './../../assets/icons/dollar.png';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function createData(
    item: string,
    ingredient: string,
    qty: number,
    price: number
) {
    return { item, ingredient, qty, price };
}

const rows = [
    createData('Organic Bananas', '7pcs', 1, 4.99),
    createData('Organic Bananas', '7pcs', 1, 4.99),
    createData('Organic Bananas', '7pcs', 1, 4.99),
];

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#E39435 !important',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#E39435 !important',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E39435 !important',
            color: '#1E2F23 !important'
        },
        '&:hover fieldset': {
            borderColor: '#E39435 !important',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#E39435 !important',
        },
    },
});

const useStyles = makeStyles({
    select: {
        '& fieldset': {
            borderColor: '#E39435 !important',
            color: '#1E2F23 !important'
        },
        '&:before': {
            borderColor: '#E39435 !important',
        },
        '&:after': {
            borderColor: '#E39435 !important',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: '#E39435 !important',
        },
    },
    icon: {
        fill: '#E39435 !important',
    },
    root: {
        color: '#E39435 !important',
    },
})

// const columns = [
//     { field: 'id', headerName: 'No', width: 90 },
//     { field: 'name', headerName: 'Customer Name', width: 200 },
//     { field: 'email', headerName: 'Email', width: 200 },
//     { field: 'contact', headerName: 'Contact', width: 200 },
//     { field: 'postalCode', headerName: 'Postal Code', width: 200 },


//     // {
//     //     field: 'fullName',
//     //     headerName: 'Full name',
//     //     description: 'This column has a value getter and is idt sortable.',
//     //     sortable: false,
//     //     width: 160,
//     //     valueGetter: (params: any) =>
//     //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     // },
// ];


// const rows = [
//     { id: 1, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
//     { id: 2, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
//     { id: 3, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
//     { id: 4, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
//     { id: 5, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
//     { id: 6, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
//     { id: 7, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
//     { id: 8, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
//     { id: 9, name: 'Customer Name', email: 'customer@gmail.com', contact: "+65 98760093", postalCode: 122344 },
// ];


const WebEcommerceTrackCompleted = (props: any) => {
    let propsShop1 = {
        title: "Farmart, Bedok",
        navigateTo: "",
        icon: "shop1.png",
        footer: "",
        rating: 5,
        duration: 5,
        delievery: 1.5,
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [lang, setLang] = React.useState('EN');
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (lang: string) => {
        setAnchorEl(null);
        setLang(lang);
    };

    if (!props.open.open) props.ToggleMenuACT(true);
    if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);
    if (props.navOpen.navOpen) props.NavOpenACT(false);

    const [selectedServiveMenu, setSelectedServiveMenu] = React.useState(
        serviceMenus[0]
    );
    const [items, setItems] = React.useState(products);

    const menuClicked = (menu: any) => {
        setSelectedServiveMenu(menu);
    };

    let history = useHistory();

    const goCart = () => {
        history.push("/web-ecommerce-cart");
    };
    
    const addCart = () => {
        if(props.cartCount) {
            props.CartCountACT(props.cartCount.cartCount);
        }
    };

    const goOrderSuccess = () => {
        history.push("/web-ecommerce-thankyou");
    };
    return (
        <>
            <div className={`${stylesHeader.send_wrapper} ${styles.white}`}>
                <div className={stylesHeader.header_user}>
                    <Grid container sx={{ mb: 3 }}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <img src={LogoIcon} alt="Logo" className={stylesHeader.webcommerce_logoStyle} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    p: 1,
                                    m: 2,
                                    float: 'right'
                                }}
                            >
                                <Typography className={styles.send_typography} mr={4} mt={1} component="div" gutterBottom>
                                    <span className={stylesHeader.cursor}>Become a seller</span>
                                </Typography>
                                <Typography className={styles.send_typography} mr={4} mt={1} component="div" gutterBottom>
                                    <span className={stylesHeader.cursor}>Download App</span>
                                </Typography>
                                <Typography className={styles.send_typography} mr={4} mt={1} component="div" gutterBottom>
                                    <span className={stylesHeader.cursor}>Help</span>
                                </Typography>
                                {/* lang */}
                                <Typography className={styles.send_typography} mr={1} mt={1} component="div" gutterBottom onClick={handleClick}>
                                    <span className={stylesHeader.cursor}>{lang}</span>
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ color: '#FFF', fontSize: 24, mr: 1, mt: 1 }} className={stylesHeader.cursor} onClick={handleClick}></KeyboardArrowDownIcon>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={() => handleClose('EN')} className={stylesHeader.send_link}>EN</MenuItem>
                                    <MenuItem onClick={() => handleClose('CN')} className={stylesHeader.send_link}>CN</MenuItem>
                                </Menu>
                                <div className={stylesHeader.header_login_button}>
                                    <span>Login</span>
                                </div>
                                <Typography className={styles.send_typography} mt={1} component="div" gutterBottom>
                                    <span className={stylesHeader.cursor}>Sign Up</span>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    p: 1,
                                    m: 2,
                                    float: 'right'
                                }}
                            >
                                <div>
                                    <TextField className={styles.commerce_search}
                                        sx={{ mr: 6 }}
                                        label="Search ..."
                                        InputProps={{
                                            endAdornment: (
                                                <NavLink to="/main-shop-details">
                                                    <IconButton>
                                                        <SearchIcon />
                                                    </IconButton>
                                                </NavLink>
                                            )
                                        }}
                                    />
                                </div>
                                <MessageIcon sx={{ color: '#FFF', fontSize: 24, mt: 2, mr: 5 }} className={stylesHeader.cursor} onClick={handleClick}></MessageIcon>
                                <ShoppingBasketIcon sx={{ color: '#FFF', fontSize: 24, mt: 2 }} className={stylesHeader.cursor} onClick={goCart}></ShoppingBasketIcon>
                                <span>{ props.cartCount.cartCount }</span>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div className={`${styles.w_100}`}>
                    <Typography className={`${mainStyles.send_typography_page_title}  ${styles.b_700}`}
                        variant="h6" component="div" sx={{ flexGrow: 1, m: 3 }} align="center">
                        Track Order
                    </Typography>
                    <div className={`${mainStyles.flex} ${mainStyles.cat_bg} ${styles.send_web_commerce_div}`}>
                        <div className={`${mainStyles.wrapper_left_cart}`}>
                            <div className={`${mainStyles.center}`}>
                                <img className={`${mainStyles.cycle_big_image}`} src={require(`../../assets/icons/cycle_big.PNG`)} />
                                <Typography className={`${mainStyles.send_typography}  ${styles.b_700} ${styles.f_22} ${styles.primary_color}`}
                                    variant="subtitle1" component="div" sx={{ flexGrow: 1, m: 3 }} align="center">
                                    Order is delivered.
                                </Typography>

                                <Typography className={`${mainStyles.send_typography}  ${styles.b_700}`} component="div" sx={{ flexGrow: 1, mb: 1, ml: 3 }} align="left">
                                    Help us to improve by rating
                                </Typography>

                                <Box
                                    sx={{
                                        p: 1,
                                        m: 2,
                                        float: 'center'
                                    }}
                                >

                                    <div className={`${mainStyles.courier_div_textfield}`}>
                                        <div className={`${mainStyles.flex}`}>
                                            <img className={`${mainStyles.courier_image}`} src={require(`../../assets/icons/courier.png`)} />
                                            <span className={`${styles.m_8} ${styles.b_700} ${styles.f_18}`}>Courier Name</span>
                                            <div className={`${styles.courier_div_star_ml}`}>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>

                                            </div>
                                        </div>
                                        <TextField className={`${styles.commerce_search} ${styles.float_right}`}
                                            sx={{ mr: 1 }}
                                            label="Share your feedback"
                                        />
                                    </div>

                                    <div className={`${mainStyles.courier_div_textfield}`}>
                                        <div className={`${mainStyles.flex}`}>
                                            <img className={`${mainStyles.courier_image}`} src={require(`../../assets/icons/shop-commerce.png`)} />
                                            <span className={`${styles.m_8} ${styles.b_700} ${styles.f_18}`}>Minny Row Market</span>
                                            <div className={`${styles.courier_div_star_ml}`}>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>
                                                <StarIcon sx={{ fontSize: 24, mr: 0.5, mt: 0.5 }} className={`${styles.primary_color}`}></StarIcon>

                                            </div>
                                        </div>
                                        <TextField className={`${styles.commerce_search} ${styles.float_right}`}
                                            sx={{ mr: 1 }}
                                            label="Share your feedback"
                                        />
                                    </div>
                                </Box>
                            </div>
                        </div>
                        <div className={`${mainStyles.wrapper_right_cart}`}>
                            <div className={`${mainStyles.pay_box} ${styles.mb_15}`}>
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item xs={6} className={`${mainStyles.b_700}`}>
                                        Booking ID
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={`${mainStyles.flex} ${styles.float_right}`}>
                                            <span className={`${mainStyles.mr_8}`}>1238868735</span>
                                            <img className={`${mainStyles.track_paste}`} src={require(`../../assets/icons/paste.PNG`)} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={`${mainStyles.pay_box}  ${styles.mb_15} `}>
                                <div className={`${styles.m_16}`}>
                                    <div className={`${mainStyles.b_700}`}>Deliver to</div>
                                    <div>144233, Abc Street, Singapore</div>
                                </div>
                            </div>

                            <div className={`${mainStyles.pay_box}`}>
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item xs={6}>
                                        Item
                                    </Grid>
                                    <Grid item xs={3}>
                                        Qty
                                    </Grid>
                                    <Grid item xs={3}>
                                        Price
                                    </Grid>

                                    <Grid item xs={6}>
                                        Organic Bananas
                                    </Grid>
                                    <Grid item xs={3}>
                                        x1
                                    </Grid>
                                    <Grid item xs={3}>
                                        $ 4.99
                                    </Grid>

                                    <Grid item xs={6}>
                                        Red Apples
                                    </Grid>
                                    <Grid item xs={3}>
                                        x1
                                    </Grid>
                                    <Grid item xs={3}>
                                        $ 4.99
                                    </Grid>

                                    <Grid item xs={6}>
                                        <span className={`${styles.primary_color}`}>+ More details</span>
                                    </Grid>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={3}>
                                    </Grid>
                                </Grid>

                                <Typography className={`${mainStyles.send_typography}  ${styles.b_700}`} m={2} component="div" gutterBottom>
                                    <span className={stylesHeader.cursor}>Payments</span>
                                </Typography>
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item xs={9}>
                                        <div className={styles.flex}>
                                            <img src={dollar} className={mainStyles.visa_image} />
                                            <Typography className={styles.send_typography} mt={0.5} component="div" gutterBottom>
                                                <span className={stylesHeader.cursor}>Cash</span>
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Checkbox {...label} defaultChecked className={`${styles.primary_color}`} />
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item xs={9}>
                                        Subtotal
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>$ 14.97</span>
                                    </Grid>
                                    <Grid item xs={9}>

                                        Delivery Fees
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>
                                            $ 4.00
                                        </span>

                                    </Grid>
                                    <Grid item xs={9}>
                                        Discount
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>
                                            - $ 1.00
                                        </span>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{ m: 2 }}>
                                    <Grid item xs={9}>
                                        <span className={`${styles.f_18} ${styles.b_700}`}>Total</span>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span className={`${styles.f_18} ${styles.b_700}`}> $ 17.97</span>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${mainStyles.footer_div}`}>
                <span>© 2022 Send. All Rights Reserved.</span>
            </div>
        </>
    )
}

const mapStateToProps = ({
    menuState, headerState, navState, cartCount
}: StoreState): { open: MenuDataInterFace; headerOpen: HeaderDataInterFace; navOpen: NavigatorDataInterFace; cartCount : CartCountInterFace } => {
    return {
        open: menuState,
        headerOpen: headerState,
        navOpen: navState,
        cartCount: cartCount
    };
};

export default connect(mapStateToProps, {
    ToggleMenuACT, HeaderOpenACT, NavOpenACT, CartCountACT
})(WebEcommerceTrackCompleted);