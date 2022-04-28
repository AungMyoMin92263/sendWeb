import React from 'react';
import {
    Container
} from "@mui/material";
import { makeStyles } from '@mui/styles';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import stylesHeader from '../css/header.module.css';
import styles from '../css/pages.module.css';

// app bar
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import UserDashboard from '../pages/LandingShoppingPage';
import AdminDashboard from '../pages/AdminDashboard';
import ProviderDashboard from '../pages/ProviderDashboard';
import LoginSignupPage from '../pages/LoginSignup';
import OrderFromShops from '../pages/OrderFromShops';
import ShopDetailsPage from '../pages/ShopDetails';
import ProductEntry from '../pages/AddNewProduct';
import ProductList from '../pages/ProductList';
import CustomerList from '../pages/CustomerList';
import CustomerEntry from '../pages/CustomerEntry';
import InventoryPage from '../pages/InventoryPage';
import Typography from '@mui/material/Typography';


//list
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import LogoIcon from './../../assets/icons/logo.png';

import OnBoardingPage from './../pages/OnBoarding';

const HeaderWithMenu = (props) => {
    const [isOpen, setIsOpen] = React.useState(true)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const [tempProps, setTempProps] = React.useState(props);
    const [selectedPage, setSelectedPage] = React.useState(props.content);

    const [selectedMenu, setSelectedMenu] = React.useState(props.menu[0]);
    const [open, setOpen] = React.useState(false);

    const handleClick = (index) => {
        if (selectedPage == 'ProviderDashboard') {
            switch (index) {
                case 0: {
                    let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                case 1: {
                    setOpen(!open);
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                case 2: {
                    let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                case 3: {
                    let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                case 4: {
                    let temp = { menu: tempProps.menu, content: 'CustomerList', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                case 5: {
                    let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                case 6: {
                    let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                case 7: {
                    let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                default: {
                    let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
            }
        } else if (selectedPage == 'AdminDashboard') {
            switch (index) {
                case 0: {
                    let temp = { menu: tempProps.menu, content: 'AdminDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                case 1: {
                    // let temp = { menu: tempProps.menu, content: 'CustomerList', subMenu: tempProps.subMenu };
                    // setTempProps(Object.assign({}, temp));
                    // setSelectedMenu(props.menu[index]);
                    // break;

                    setOpen(!open);
                    setSelectedMenu(props.menu[index]);
                    break;
                }
                default: {
                    let temp = { menu: tempProps.menu, content: 'AdminDashboard', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    setSelectedMenu(props.menu[index]);
                    break;
                }
            }
        }
    };


    const clickedSubMenu = (text) => {
        if (selectedPage == 'ProviderDashboard') {
            switch (text) {
                case 'Inventory': {
                    let temp = { menu: tempProps.menu, content: 'InventoryPage', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    break;
                }
                case 'Add a new product': {
                    let temp = { menu: tempProps.menu, content: 'ProductEntry', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    break;
                }
                default: {
                    let temp = { menu: tempProps.menu, content: 'ProductList', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    break;
                }
            }
        } else if (selectedPage == 'AdminDashboard') {
            switch (text) {
                case 'Customers': {
                    let temp = { menu: tempProps.menu, content: 'CustomerList', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    break;
                }
                case 'Add Customer': {
                    let temp = { menu: tempProps.menu, content: 'CustomerEntry', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    break;
                }
                default: {
                    let temp = { menu: tempProps.menu, content: 'CustomerList', subMenu: tempProps.subMenu };
                    setTempProps(Object.assign({}, temp));
                    break;
                }
            }
        }
    }

    const SubMenu = (index) => {
        if (props.subMenu.length > 0 && index == 1) {
            return (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.subMenu.map((textSub, ind) => (
                            <ListItemButton sx={{ pl: 4 }} onClick={() => clickedSubMenu(textSub)}>
                                <ListItemIcon>
                                    {ind % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <Typography className={styles.send_typography} variant="caption" component="div">
                                    <ListItemText>
                                        <Typography className={styles.send_typography} variant="body2" component="div">
                                            {textSub}
                                        </Typography>
                                    </ListItemText>
                                </Typography>
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            );
        } else return (<></>);
    }

    const SideMenu = () => {
        if (isOpen && props.menu.length > 0) {
            return (
                // <div className={stylesHeader.side_menu_style}>
                <div className={stylesHeader.side_menu_style}>
                    <div>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>

                    <div>
                        <img src={LogoIcon} alt="Logo" className={stylesHeader.imageStyle} />
                    </div>

                    <List>
                        {props.menu.map((text, index) => (

                            <>
                                {
                                    selectedMenu == text ? <div className={stylesHeader.send_selected_menu}>
                                        <ListItemButton onClick={() => handleClick(index)} className={stylesHeader.send_cursor}>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <DashboardIcon /> : <InventoryIcon />}
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography className={styles.send_typography} variant="body2" component="div">
                                                    {text}
                                                </Typography>
                                            </ListItemText>

                                            {open && index == 1 ? <ExpandLess /> : <></>}
                                        </ListItemButton>
                                        {SubMenu(index)}
                                    </div> : <div><ListItemButton onClick={() => handleClick(index)} className={stylesHeader.send_cursor}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <DashboardIcon /> : <InventoryIcon />}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography className={styles.send_typography} variant="body2" component="div">
                                                {text}
                                            </Typography>
                                        </ListItemText>
                                        {open && index == 1 ? <ExpandLess /> : <></>}
                                    </ListItemButton>
                                        {SubMenu(index)} </div>
                                }

                            </>

                        ))}
                    </List>

                    <div className={stylesHeader.footer}>
                        <div className={stylesHeader.mb_15}>
                            <span className={stylesHeader.cursor}>EN | CN</span>
                        </div>
                        <div className={stylesHeader.mb_15}>
                            <span className={stylesHeader.cursor}>Help</span>
                        </div>
                        <div className={stylesHeader.mb_15}>
                            <span className={stylesHeader.cursor}>Sign out</span>
                        </div>
                    </div>

                </div>
            )
        }
        else return ('');
    }

    const ContentDiv = () => {
        switch (tempProps.content) {
            case 'UserDashboard': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><UserDashboard /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><UserDashboard /></React.Fragment>
                    </div>
                );
            }
            case 'AdminDashboard': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><AdminDashboard /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><AdminDashboard /></React.Fragment>
                    </div>
                );
            }

            case 'OnBoardingPage': {
                return (
                    <div className={stylesHeader.send_content_div_onboarding_full}>
                        <React.Fragment><OnBoardingPage /></React.Fragment>
                    </div>
                );
            }
            case 'ProviderDashboard': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><ProviderDashboard /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><ProviderDashboard /></React.Fragment>
                    </div>
                );
            }
            case 'ProductEntry': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><ProductEntry /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><ProductEntry /></React.Fragment>
                    </div>
                );
            }


            case 'InventoryPage': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><InventoryPage /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><InventoryPage /></React.Fragment>
                    </div>
                );
            }

            case 'ProductList': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><ProductList /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><ProductList /></React.Fragment>
                    </div>
                );
            }
            case 'CustomerList': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><CustomerList /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><CustomerList /></React.Fragment>
                    </div>
                );
            }
            case 'CustomerEntry': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><CustomerEntry /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><CustomerEntry /></React.Fragment>
                    </div>
                );
            }

            case 'OrderFromShops': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><OrderFromShops /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><OrderFromShops /></React.Fragment>
                    </div>
                );
            }
            case 'ShopDetailsPage': {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><ShopDetailsPage /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><ShopDetailsPage /></React.Fragment>
                    </div>
                );
            }
            default: {
                if (isOpen) {
                    return (
                        <div className={stylesHeader.send_content_div}>
                            <React.Fragment><UserDashboard /></React.Fragment>
                        </div>
                    )
                }
                else return (
                    <div className={stylesHeader.send_content_div_full}>
                        <React.Fragment><UserDashboard /></React.Fragment>
                    </div>
                );
            }
        }
    }

    const humburger = () => {
        if (!isOpen) return <div className="w-230">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ float: 'left' }}
                onClick={toggleDrawer}
            >
                <MenuIcon />
            </IconButton>
        </div>;
        else return <></>;
    }

    const container = () => {
        if (tempProps.content == "OnBoardingPage")
            return <div className={styles.send_container}>
                <div className={styles.send_page}>
                    {ContentDiv()}
                </div>
            </div>;
        else {
            return <div className={styles.send_container}>
                <div className={styles.send_page}>
                    {humburger()}
                    {SideMenu()}
                    {ContentDiv()}
                </div>
            </div>;
        }
    }

    return (
        <>
            {container()}
        </>
    )
}

export default HeaderWithMenu