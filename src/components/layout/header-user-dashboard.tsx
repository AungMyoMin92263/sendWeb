import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css'

// app bar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { TextField } from '@mui/material';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import stylesHeader from '../css/header.module.css';
import styles from '../css/pages.module.css';
import LogoIcon from './../../assets/icons/logo_white.png';

//layout
import { StoreState } from './../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';
import Grid from '@mui/material/Grid';
import { NavLink } from "react-router-dom";

//icon
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MessageIcon from '@mui/icons-material/Message';

const HeaderUser = (props: any) => {
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
    return (
        <>
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
})(HeaderUser);