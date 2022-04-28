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
import { Link } from "react-router-dom";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import stylesHeader from '../css/header.module.css';
import styles from '../pages/css/pages.module.css';
import LogoIcon from './../../assets/icons/logo.png';

//layout
import { StoreState } from './../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';

const HeaderNoMenu = (props : any) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        props.NavOpenACT(true);

    };
    return (
        <>
            <Box>
                <AppBar position="static" className={stylesHeader.header}>
                    <Toolbar>
                        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }} align="left">
                        <img src={LogoIcon} alt="Logo" className={stylesHeader.landing_logoStyle} />
                        </Typography>
                        <Typography variant="body2" mr={1} component="div" gutterBottom>
                        <span className={stylesHeader.cursor}>Language</span>
                        </Typography>
                        <Typography variant="body2" component="div" gutterBottom onClick={handleClick}>
                            <span className={stylesHeader.cursor}>Login / Signup</span>
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ fontSize: 24, mr: 1 }} className={stylesHeader.cursor} onClick={handleClick}></KeyboardArrowDownIcon>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose} className={stylesHeader.send_link}>Consumer</MenuItem>
                            <MenuItem onClick={handleClose} className={stylesHeader.send_link}>Courier</MenuItem>
                            <MenuItem onClick={handleClose} className={stylesHeader.send_link}>
                                <Link to="/on-boarding" id="link_01">
                                    Service Provider
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose} className={stylesHeader.send_link}>
                                <Link to="/admin-dashboard" id="link_01">
                                    Administrator
                                </Link>
                            </MenuItem>
                        </Menu>

                        <Typography  variant="body2" component="div" gutterBottom >
                           <span className={stylesHeader.cursor}>Help</span> 
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
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
  })(HeaderNoMenu);