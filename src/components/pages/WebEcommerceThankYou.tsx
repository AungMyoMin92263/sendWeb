import React from 'react';

import { Grid, Paper } from "@mui/material";

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
import Button from '@mui/material/Button';

//icon
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MessageIcon from '@mui/icons-material/Message';
import AddCircleIcon from "@mui/icons-material/AddCircle";

// app bar
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//crousel
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from "react-router-dom";

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';

import serviceMenus from "./ServiceMenu";
import Shop from "./../../assets/icons/shop-commerce.png";

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';

// import component 👇
import UserDashShopCard from "../atoms/ui-elements/UserDashShopCard";
import products from "./products";
import categories from "./categories";

//custom textfield
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import makeStyles from '@mui/styles/makeStyles';
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useHistory } from "react-router-dom";

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


const WebEcommerceThankYou = (props: any) => {
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

    const [items, setItems] = React.useState(products);
    let history = useHistory();

    const goCart = () => {
        history.push("/web-ecommerce-cart");
    };

    const goTrack = () => {
        history.push("/web-ecommerce-track");
    };

    if (!props.open.open) props.ToggleMenuACT(true);
    if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);
    if (props.navOpen.navOpen) props.NavOpenACT(false);

    const [selectedServiveMenu, setSelectedServiveMenu] = React.useState(
        serviceMenus[0]
    );

    const menuClicked = (menu: any) => {
        setSelectedServiveMenu(menu);
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
                                <ShoppingBasketIcon sx={{ color: '#FFF', fontSize: 24, mt: 2 }} className={stylesHeader.cursor} onClick={handleClick}></ShoppingBasketIcon>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div className={`${styles.w_100}`}>
                    <Typography className={styles.send_typography_page_title} variant="h6" component="div" sx={{ flexGrow: 1, m: 3 }} align="center">
                        <div>
                            <img className={`${mainStyles.w_200}`}
                                src={require(`../../assets/icons/mark.PNG`)}
                            />
                        </div>
                        <div className={`${mainStyles.thankyou}`}>
                            Thank you
                        </div>
                        <div className={`${mainStyles.order_success}`}>
                            Your order has been accepted
                        </div>
                    </Typography>
                    <Box
                        sx={{
                            pt: 3,
                            pb: 3,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div className={mainStyles.thankyou_btn_left}>
                            <div className={styles.mt_15}>Continue Shopping</div>
                        </div>
                        <div className={mainStyles.thankyou_btn_right}>
                            <div className={`${styles.cursor} ${styles.mt_15}`} onClick={goTrack}>Track My order</div>
                        </div>
                    </Box>

                    <Typography className={styles.send_typography}
                        variant="subtitle2"
                        pb={3}
                        pt={3}
                        component="div"
                        sx={{ flexGrow: 1 }}
                        align="left"
                    >
                        Related Products
                    </Typography>
                    <div style={{ width: "100%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignContent: "flex-start",
                                bgcolor: "background.paper",
                                borderRadius: 1,
                                mb: 3
                            }}
                        >
                            {items.map((product) => (
                                <div>
                                    <Paper
                                        sx={{
                                            backgroundColor: "#FFF",
                                            minHeight: "120px",
                                            mr: 1,
                                            mb: 1,
                                            width: "159px",
                                            height: "220px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                                textAlign: "center",
                                                minHeight: "90px",
                                            }}
                                        >
                                            <NavLink to="">
                                                <img
                                                    src={require(`../../assets/icons/${product.basicInformation.productImages[0].dataURL}`)}
                                                    alt="Shop"
                                                    className={`${mainStyles.productImageStyle}`}
                                                />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <div>
                                                        <Typography className={styles.send_typography}
                                                            variant="subtitle2"
                                                            pl={1}
                                                            pb={1}
                                                            component="div"
                                                            sx={{ flexGrow: 1 }}
                                                        >
                                                            {product.name}
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography className={styles.send_typography}
                                                            variant="subtitle2"
                                                            pl={1}
                                                            pb={1}
                                                            component="div"
                                                            sx={{ flexGrow: 1 }}
                                                        >
                                                            {product.specification.weight}
                                                            {product.specification.weightUnit.name}
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography className={styles.send_typography}
                                                            variant="subtitle2"
                                                            pl={1}
                                                            pb={1}
                                                            component="div"
                                                            sx={{ flexGrow: 1 }}
                                                        >
                                                            $ {product.price}
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div
                                                        style={{
                                                            width: "100%",
                                                            textAlign: "right",
                                                            verticalAlign: "center",
                                                            marginTop: '40px'
                                                        }}
                                                    >
                                                        <AddCircleIcon
                                                            sx={{
                                                                color: "#E39435",
                                                                fontSize: 36,
                                                                mb: 0.5,
                                                                mr: 0.5,
                                                                mt: 5,
                                                            }}
                                                            className={`${mainStyles.cursor}`}
                                                            onClick={goCart}
                                                        ></AddCircleIcon>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Paper>
                                </div>
                            ))}
                        </Box>
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
})(WebEcommerceThankYou);