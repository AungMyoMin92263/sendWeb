import React from 'react';

import { Divider, Grid, Paper } from "@mui/material";
import Button from '@mui/material/Button';

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import styles from '../css/pages.module.css';
import mainStyles from '../css/web-commerce.module.css';
import stylesHeader from '../css/header.module.css';
import LogoIcon from './../../assets/icons/logo_white.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

//icon
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MessageIcon from '@mui/icons-material/Message';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
import EditIcon from '@mui/icons-material/Edit';

// import component 👇
import products from "./products";

//custom textfield
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';
import Checkbox from '@mui/material/Checkbox';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Dollar from './../../assets/icons/dollar.png';
import Visa from './../../assets/icons/visa.png';

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


const WebEcommerceCart = (props: any) => {
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
                    <Typography className={styles.send_typography_page_title} variant="h6" component="div" sx={{ flexGrow: 1, m: 3 }} align="center">
                        <div>
                            <img className={`${mainStyles.menu_image}`}
                                src={require(`../../assets/icons/grocery.png`)}
                            />
                        </div>
                        <br></br>
                        Grocery Shopping Cart
                    </Typography>
                    <div className={styles.send_table_3row}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Qty</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.item}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap'
                                                    }}
                                                >
                                                    <img className={`${mainStyles.cart_menu_image} ${mainStyles.mr_8}`}
                                                        src={require(`../../assets/icons/product1.png`)}
                                                    />
                                                    <div>
                                                        <div>
                                                            <span className={`${styles.f_13} ${styles.b_700}`}>{row.item}</span>
                                                        </div>
                                                        <div>

                                                            <span className={`${styles.f_12}`}>{row.ingredient}</span>
                                                        </div>
                                                    </div>
                                                </Box>

                                            </TableCell>
                                            <TableCell>
                                                <div className={`${styles.flex}`}>
                                                    <RemoveCircleIcon sx={{ fontSize: 30, mr: 1 }} className={`${styles.primary_color} ${styles.cursor}`}></RemoveCircleIcon>
                                                    <span className={`${styles.mt_6}`}>{row.qty}</span>
                                                    <AddCircleIcon sx={{ fontSize: 30, ml: 1 }} className={`${styles.primary_color} ${styles.cursor}`}></AddCircleIcon>
                                                </div>
                                            </TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className={`${mainStyles.flex} ${mainStyles.cat_bg}`}>
                        <div className={`${mainStyles.wrapper_left_cart}`}>
                            <Typography className={styles.send_typography} mr={4} mt={3} component="div" gutterBottom>
                                <span className={stylesHeader.cursor}>Do you have a voucher?</span>
                            </Typography>
                            <div className={`${mainStyles.flex} ${mainStyles.mb_8}`}>

                                <CssTextField label="Enter Voucher Code" id="custom-css-outlined-input"
                                    className={mainStyles.textfield_cart} />&nbsp;&nbsp;&nbsp;
                                {/* <Button variant="contained" className={styles.send_button_active_cart_apply}>
                                Apply
                                </Button> */}

                                <Button
                                    variant="contained"
                                    className={`${mainStyles.send_button_active_cart_apply}`}
                                >
                                    Apply
                                </Button>

                            </div>

                            <Typography className={styles.send_typography} mr={4} mt={3} component="div" gutterBottom>
                                <span className={stylesHeader.cursor}>Deliver to</span>
                            </Typography>

                            <div className={`${mainStyles.flex} ${mainStyles.mb_8}`}>
                                <CssTextField label="144233, Abc Street, Singapore" id="custom-css-outlined-input"
                                    className={mainStyles.cart_input}
                                />
                                <EditIcon sx={{ fontSize: 18, mr: 0.5, ml: 2, mt: 1 }} className={`${styles.float_right} ${styles.primary_color}`}></EditIcon>
                            </div>


                            <Typography className={styles.send_typography} mr={4} mt={3} component="div" gutterBottom>
                                <span className={stylesHeader.cursor}>                        Note for driver
                                </span>
                            </Typography>

                            <div className={`${mainStyles.flex} ${mainStyles.mb_8}`}>
                                <CssTextField label="ie. Please leave items at doorstep" id="custom-css-outlined-input"
                                    className={mainStyles.cart_input} />
                            </div>

                            <div className={`${mainStyles.flex}`}>
                                <Typography className={styles.send_typography} mr={29} mt={3} mb={3} component="div" gutterBottom>
                                    <span className={stylesHeader.cursor}>Contactless delivery</span>
                                </Typography>
                                <Checkbox {...label} defaultChecked className={`${styles.float_right} ${styles.primary_color} ${mainStyles.mt_12}`} />
                            </div>
                        </div>
                        <div className={`${mainStyles.wrapper_right_cart}`}>
                            <div className={`${mainStyles.pay_box}`}>
                                <Typography className={styles.send_typography} m={2} component="div" gutterBottom>
                                    <span className={stylesHeader.cursor}>Payments</span>
                                </Typography>
                                <Divider />
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item xs={6}>
                                        <div className={styles.flex}>
                                            <img src={Dollar} className={mainStyles.visa_image} />
                                            <Typography className={styles.send_typography} mt={0.5} component="div" gutterBottom>
                                                <span className={stylesHeader.cursor}>Cash</span>
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Checkbox {...label} defaultChecked className={`${styles.float_right} ${styles.primary_color}`} />
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid container sx={{ m: 2 }}>
                                    <Grid item xs={6}>
                                        <div className={styles.flex}>
                                            <img src={Visa} className={mainStyles.visa_image} />
                                            <Typography className={styles.send_typography} mt={0.5} component="div" gutterBottom>
                                                <span className={stylesHeader.cursor}>
                                                    Visa 1234
                                                </span>
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>

                                    </Grid>
                                </Grid>
                                <Divider />

                                <Grid container sx={{ m: 2 }}>
                                    <Grid item xs={6}>
                                        Subtotal
                                    </Grid>
                                    <Grid item xs={6} className={`${styles.right} ${styles.mr_8}`} >
                                        <span>$ 14.97</span>
                                    </Grid>
                                    <Grid item xs={6}>

                                        Delivery Fees
                                    </Grid>
                                    <Grid item xs={6} className={`${styles.right} ${styles.mr_8}`} >
                                        <span>
                                            $   4.00
                                        </span>

                                    </Grid>
                                    <Grid item xs={6}>

                                        Discount
                                    </Grid>
                                    <Grid item xs={6} className={`${styles.right} ${styles.mr_8}`} >
                                        <span>
                                            - $   1.00
                                        </span>

                                    </Grid>
                                    <Grid item xs={6}>

                                        Total
                                    </Grid>
                                    <Grid item xs={6} className={`${styles.right} ${styles.mr_8}`} >
                                        <span>
                                            $ 17.97
                                        </span>
                                    </Grid>
                                </Grid>
                                <Button
                                    variant="contained"
                                    className={`${mainStyles.send_button_active_cart}`}
                                    onClick={goOrderSuccess}
                                >
                                    <Grid container>
                                        <Grid item xs={6}>
                                            Go to Checkout
                                        </Grid>
                                        <Grid item xs={6} className={`${styles.right} ${styles.mr_8}`}>
                                            <span >
                                                $ 17.97
                                            </span>
                                        </Grid>
                                    </Grid>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ 
                width: '100%',
                display: 'block',
                marginTop  : '25px'
            }}>
                
            <div className={`${mainStyles.footer_div}`}>
                <div className={`${styles.mt_15}`}>
                    <span>© 2022 Send. All Rights Reserved.</span>
                </div>
            </div>
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
})(WebEcommerceCart);