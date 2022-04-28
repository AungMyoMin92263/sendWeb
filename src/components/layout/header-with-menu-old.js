import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import styles from '../css/header.module.css';

// app bar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import UserDashboard from '../pages/LandingShoppingPage';
import AdminDashboard from '../pages/AdminDashboard';
import ProviderDashboard from '../pages/ProviderDashboard';
import LoginSignupPage from '../pages/LoginSignup';
import OrderFromShops from '../pages/OrderFromShops';
import ShopDetailsPage from '../pages/ShopDetails';
import ProductEntry from '../pages/ProductEntry';
import ProductList from '../pages/ProductList';

//list
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

const HeaderWithMenu = (props) => {

  const [isOpen, setIsOpen] = React.useState(true)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = (index) => {
    switch (index) {
      case 0: {
        let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
      case 1: {
        let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
      case 2: {
        let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
      case 3: {
        let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
      case 4: {
        setOpen(!open);
        break;
      }
      case 5: {
        let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
      case 6: {
        let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
      case 7: {
        let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
      default: {
        let temp = { menu: tempProps.menu, content: 'ProviderDashboard', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
    }
  };
  const [tempProps, setTempProps] = React.useState(props);

  const clickedSubMenu = (text) => {
    switch (text) {
      case 'Products List': {
        let temp = { menu: tempProps.menu, content: 'ProductList', subMenu: tempProps.subMenu };
        setTempProps(Object.assign({}, temp));
        break;
      }
      case 'Product Entry': {
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
                <ListItemText primary={textSub} style={{ fontSize: '12px' }} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      );
    } else return (<></>);
  }

  const SideMenu = () => {
    if (isOpen) {
      return (
        // <div className={styles.side_menu_style}>
        <div style={{
          background: '#FFF',
          color: '#5A5A5A',
          border: '1px solid #FFD39D',
          width: ' 230px !important',
          height: '100vh',
          float: 'left'
        }}>
          <List>
            {props.menu.map((text, index) => (
              <>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{ fontSize: '12px' }} />
                  {open && index == 1 ? <ExpandLess /> : <></>}
                </ListItemButton>
                {SubMenu(index)}
              </>

            ))}
          </List>
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
            <div className={styles.send_content_div}>
              <React.Fragment><UserDashboard /></React.Fragment>
            </div>
          )
        }
        else return (
          <div className={styles.send_content_div_full}>
            <React.Fragment><UserDashboard /></React.Fragment>
          </div>
        );
      }
      case 'AdminDashboard': {
        if (isOpen) {
          return (
            <div className={styles.send_content_div}>
              <React.Fragment><AdminDashboard /></React.Fragment>
            </div>
          )
        }
        else return (
          <div className={styles.send_content_div_full}>
            <React.Fragment><AdminDashboard /></React.Fragment>
          </div>
        );
      }
      case 'ProviderDashboard': {
        if (isOpen) {
          return (
            <div className={styles.send_content_div}>
              <React.Fragment><ProviderDashboard /></React.Fragment>
            </div>
          )
        }
        else return (
          <div className={styles.send_content_div_full}>
            <React.Fragment><ProviderDashboard /></React.Fragment>
          </div>
        );
      }
      case 'ProductEntry': {
        if (isOpen) {
          return (
            <div className={styles.send_content_div}>
              <React.Fragment><ProductEntry /></React.Fragment>
            </div>
          )
        }
        else return (
          <div className={styles.send_content_div_full}>
            <React.Fragment><ProductEntry /></React.Fragment>
          </div>
        );
      }

      case 'ProductList': {
        if (isOpen) {
          return (
            <div className={styles.send_content_div}>
              <React.Fragment><ProductList /></React.Fragment>
            </div>
          )
        }
        else return (
          <div className={styles.send_content_div_full}>
            <React.Fragment><ProductList /></React.Fragment>
          </div>
        );
      }

      case 'OrderFromShops': {
        if (isOpen) {
          return (
            <div className={styles.send_content_div}>
              <React.Fragment><OrderFromShops /></React.Fragment>
            </div>
          )
        }
        else return (
          <div className={styles.send_content_div_full}>
            <React.Fragment><OrderFromShops /></React.Fragment>
          </div>
        );
      }
      case 'ShopDetailsPage': {
        if (isOpen) {
          return (
            <div className={styles.send_content_div}>
              <React.Fragment><ShopDetailsPage /></React.Fragment>
            </div>
          )
        }
        else return (
          <div className={styles.send_content_div_full}>
            <React.Fragment><ShopDetailsPage /></React.Fragment>
          </div>
        );
      }
      default: {
        if (isOpen) {
          return (
            <div className={styles.send_content_div}>
              <React.Fragment><UserDashboard /></React.Fragment>
            </div>
          )
        }
        else return (
          <div className={styles.send_content_div_full}>
            <React.Fragment><UserDashboard /></React.Fragment>
          </div>
        );
      }
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{
          background: '#E39435',
          color: '#FFF',
          borderBottom: '1px solid #FFF'
        }}>
          <Toolbar>
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
            <Typography className={styles.send_typography} variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
              E Service Platform
            </Typography>
            <Typography className={styles.send_typography} variant="body1" mr={1} component="div" gutterBottom>
              Language
            </Typography>
            <Typography className={styles.send_typography} variant="body1" mr={1} component="div" gutterBottom>
              Logout
            </Typography>
            <Typography className={styles.send_typography} variant="body1" mr={1} component="div" gutterBottom>
              Help
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ width: '100%' }}>
          {SideMenu()}
          {ContentDiv()}
        </div>
      </Box>
    </>
  )
}

export default HeaderWithMenu