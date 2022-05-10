import React from 'react';

import { Container, Grid, Paper, Stack } from "@mui/material";

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
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';

//icon
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MessageIcon from '@mui/icons-material/Message';
import AddCircleIcon from "@mui/icons-material/AddCircle";

import featuredoffer1 from './../../assets/icons/featuredoffer1.png';
import featuredoffer2 from './../../assets/icons/featuredoffer2.png';
import featuredoffer3 from './../../assets/icons/featuredoffer3.png';

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
import { CartCountInterFace } from '../interfaces/cartCount.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';
import { CartCountACT } from '../actions/CartCountAction';

import serviceMenus from "./ServiceMenu";
import Banner from "./../../assets/icons/banner.png";

import products from "./products";
import categories from "./categories";
import { useHistory } from "react-router-dom";

// import component 👇
import UserDashShopCard from "../atoms/ui-elements/UserDashShopCard";
import Shop2 from "./../../assets/icons/shop-commerce.png";

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

const WebEcommerce = (props: any) => {
    console.log('props ...',props)
    //cards
    let history = useHistory();

    const goShop = () => {
    history.push("/web-ecommerce-shop");
    };
    let propsShop1 = {
        title: "Farmart, Bedok",
        navigateTo: "",
        icon: "shop.png",
        footer: "",
        rating: 5,
        duration: 5,
        delievery: 1.5,
    };

    let propsShop2 = {
        title: "Minny Row Market",
        navigateTo: "",
        icon: "shop-commerce.png",
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

    const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
    const clickedImageNext = (index: number) => {
        setSelectedImageIndex(index);
    }
    const step = () => {
        switch (selectedImageIndex) {
            case 0: {
                return <div className={stylesOnBoarding.send_stepper}>

                    <div className={stylesOnBoarding.send_step_selected} onClick={() => clickedImageNext(0)}>
                    </div>
                    <div className={stylesOnBoarding.send_step} onClick={() => clickedImageNext(1)}>
                    </div>
                    <div className={stylesOnBoarding.send_step} onClick={() => clickedImageNext(2)}>
                    </div>
                </div>;
            }
            case 1: {
                return <div className={stylesOnBoarding.send_stepper}>
                    <div className={stylesOnBoarding.send_step} onClick={() => clickedImageNext(0)}>
                    </div>
                    <div className={stylesOnBoarding.send_step_selected} onClick={() => clickedImageNext(1)}>
                    </div>
                    <div className={stylesOnBoarding.send_step} onClick={() => clickedImageNext(2)}>
                    </div>
                </div>;
            }
            case 2: {
                return <div className={stylesOnBoarding.send_stepper}>
                    <div className={stylesOnBoarding.send_step} onClick={() => clickedImageNext(0)}>
                    </div>
                    <div className={stylesOnBoarding.send_step} onClick={() => clickedImageNext(1)}>
                    </div>
                    <div className={stylesOnBoarding.send_step_selected} onClick={() => clickedImageNext(2)}>
                    </div>
                </div>;
            }
        }
    }

    const goCart = () => {
        history.push("/web-ecommerce-cart");
    };

    const addCart = () => {
        if(props.cartCount) {
            props.CartCountACT(props.cartCount.cartCount);
        }
    };

    return (
        <>
            <div className={stylesHeader.send_wrapper}>
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
                <div className={`${mainStyles.flex}`}>
                    <div className={`${mainStyles.wrapper_left}`}>
                        <div className={`${mainStyles.commerce_left}`}>
                            <div className={`${mainStyles.top_category_div}`}>
                                <Box
                                    sx={{
                                        pt: 2,
                                        pb: 2,
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Stack direction="row" spacing={2}>
                                        <>

                                            {serviceMenus.map((menu: any) => (
                                                <>
                                                    <NavLink to="/web-ecommerce-category">
                                                        <div className={`${mainStyles.cursor}`} onClick={() => menuClicked(menu)}>
                                                            <div>
                                                                <img className={`${mainStyles.menu_image}`}
                                                                    src={require(`../../assets/icons/${menu.image}`)}
                                                                />
                                                            </div>
                                                            <div className={`${mainStyles.top_category_btn}`}>
                                                                <Typography className={styles.send_typography}
                                                                    variant="subtitle2"
                                                                    component="div"
                                                                    sx={{ flexGrow: 1 }}
                                                                >
                                                                    {menu.label}
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </>
                                            ))}
                                        </>
                                    </Stack>
                                </Box>
                            </div>
                            <div className={`${styles.w_100} ${styles.pt_30}`}>
                                <Stack direction="row" spacing={2}>
                                    <div>
                                        <NavLink to="/main-shopping">
                                            <img src={featuredoffer1} alt="Shop" className={`${mainStyles.top_category_image}`} />
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/main-shopping">
                                            <img src={featuredoffer2} alt="Shop" className={`${mainStyles.top_category_image}`} />
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/main-shopping">
                                            <img src={featuredoffer3} alt="Shop" className={`${mainStyles.top_category_image}`} />
                                        </NavLink>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                    </div>
                    <div className={`${mainStyles.wrapper_right}`}>
                        <div className={`${mainStyles.commerce_right}`}>
                            <div className={`${mainStyles.right_div_image}`}>
                                <img src={Banner} alt="Shop" className={`${mainStyles.bannerImageStyle}`} />
                                <div className={`${stylesOnBoarding.w_100} ${stylesOnBoarding.align_center}`}>
                                    <Box
                                        sx={{
                                            pt: 2,
                                            pb: 2,
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {step()}
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <div className={`${mainStyles.cat_row_div}`}>
                    <Box
                        sx={{
                            pt: 2,
                            pb: 2,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Stack direction="row" spacing={2}>
                            <>

                                {categories.map((menu: any) => (
                                    <>
                                        <NavLink to="/web-ecommerce-category">
                                            <div className={`${mainStyles.cursor}`} onClick={() => menuClicked(menu)}>
                                                <div>
                                                    <img className={`${mainStyles.cat_image}`}
                                                        src={require(`../../assets/icons/${menu.image}`)}
                                                    />
                                                </div>
                                                <div>
                                                    <Typography className={styles.send_typography}
                                                        variant="subtitle2"
                                                        component="div"
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        {menu.name}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </>
                                ))}
                            </>
                        </Stack>
                    </Box>
                </div>
                {/* <div className={`${mainStyles.mt_24_lift}`}> */}
                <div>
                    <div className={`${mainStyles.product_row_div}`}>
                        <Typography className={styles.send_typography}
                            variant="subtitle2"
                            pb={2}
                            pt={1}
                            component="div"
                            sx={{ flexGrow: 1 }}
                            align="left"
                        >
                            Flash Sale
                        </Typography>
                        <div style={{ width: "100%" }}>
                            <div style={{ width: "100%" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignContent: "flex-start",
                                        bgcolor: "background.paper",
                                        borderRadius: 1,
                                    }}
                                >
                                    {items.map((product) => (
                                        <div>
                                            <Paper
                                                sx={{
                                                    backgroundColor: "#FFF",
                                                    minHeight: "120px",
                                                    mr: 2,
                                                    mb: 2,
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
                                                    <NavLink to="/product-details">
                                                        <img
                                                            src={require(`../../assets/icons/${product.basicInformation.productImages[0].dataURL}`)}
                                                            alt="Shop"
                                                            className={`${mainStyles.productImageStyle}`}
                                                        />
                                                        <div className={mainStyles.promotion_tag}>
                                                        55%
                                                        </div>
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
                                                                    onClick={addCart}
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
                    <div className={`${mainStyles.product_div_right}`}>
                        <div className={`${styles.w_100}`}>
                            <Typography className={styles.send_typography}
                                variant="subtitle2"
                                pt={1}
                                pb={2}
                                pl={4.5}
                                component="div"
                                sx={{ flexGrow: 1 }}
                                align="left"
                            >
                                Featured Grocery Shops
                            </Typography>

                            <div className={`${styles.w_100}`}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignContent: "flex-start",
                                        justifyContent: "center",
                                    }}
                                >
                                    <NavLink to="/web-ecommerce-shop">
                                        <Box
                                            sx={{
                                                mr: 1,
                                                mb: 1,
                                            }}
                                        >
                                            <UserDashShopCard {...propsShop1} />
                                        </Box>
                                    </NavLink>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignContent: "flex-start",
                                        justifyContent: "center",
                                    }}
                                >
                                    <NavLink to="/web-ecommerce-shop">
                                        <Box
                                            sx={{
                                                mr: 1,
                                                mb: 1
                                            }}
                                        >
                                            <UserDashShopCard {...propsShop2} />
                                        </Box>
                                    </NavLink>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={`${mainStyles.footer_div}`}>
                <span>© 2022 Send. All Rights Reserved.</span>
            </div> */}
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
})(WebEcommerce);