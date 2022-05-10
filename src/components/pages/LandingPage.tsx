import React from 'react'

// import component 👇

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import styles from '../css/pages.module.css';
import stylesHeader from '../css/header.module.css';

// app bar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { NavLink } from "react-router-dom";
import { TextField } from '@mui/material';

import Grid from '@mui/material/Grid';
import Banner from './../../assets/images/bannerFinal.jpg';

//icon
import SearchIcon from '@mui/icons-material/Search';
import ReactPlayer from 'react-player';
import LogoIcon from './../../assets/icons/logo.png';

import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';
// import { DashboardCard } from '../atoms/DashboardCard';

const LandingPage = (props: any) => {
  const [type, setType] = React.useState('consumer')

  
  if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);
  if (props.navOpen.navOpen) props.NavOpenACT(false);

  //cards
  let propsAppStore = {
    title: "Download on ",
    count: "the App Store",
    navigateTo: "",
    icon: "",
    footer: "",
  };
  let propsPlayStore = {
    title: "Get it on",
    count: " Google Play",
    navigateTo: "",
    icon: "",
    footer: "",
  };
  let propsHuaweiStore = {
    title: "Explore it on",
    count: " App Gallery",
    navigateTo: "",
    icon: "",
    footer: "",
  };

  const clickedType = (type: string) => {
    setType((prevState) => type)
  }

  const checkType = () => {
    switch (type) {
      case 'consumer': {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Grow Your Business
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Service with us
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={6}>

              </Grid>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} ml={3} mt={2.5} mb={2.5} variant="subtitle1" component="div" gutterBottom>
                  Payments with us
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      }
      case 'courier': {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Order from us
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Grocery
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={6}>

              </Grid>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} ml={3} mt={2.5} mb={2.5} variant="subtitle1" component="div" gutterBottom>
                  Home Services
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      }
      case 'provider': {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Earn with us
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Drive with us
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={6}>

              </Grid>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} ml={3} mt={2.5} mb={2.5} variant="subtitle1" component="div" gutterBottom>
                  Deliever with us
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      }
      default: {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Grow Your Business
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Service with us
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={6}>

              </Grid>
              <Grid item xs={6}>
                <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom>
                  Payments with us
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      }
    }
  }

  return (
    <>
      <div style={{ margin : '-15px 0px 0px -15px' }}>
        <div style={{ width: '100%' }}>
          <div style={{ width: "300px", float: 'right' }}>
            <img src={Banner} alt="Shop" className={styles.BannerStyle} />
          </div>
          <div style={{
            width: "calc(100% - 300px)",
            float: 'right',
            background: "#f2f3f4",
            color: "#424242",
            height: "288px",
            alignItems: "center"
          }}>
            <div style={{ height: '100px' }}>
              <Typography  m={3} className={`${styles.send_typography} ${styles.cursor}`} variant="h5" component="div" gutterBottom>
                It's the food and groceries you love, delivered
              </Typography>
            </div>
            <div>
              <TextField className={styles.send_textfield}
                sx={{ width: "80%", minHeight: '50px', m: 3 }}
                label="Search ..."
                InputProps={{
                  endAdornment: (
                    <NavLink to="/web-ecommerce">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </NavLink>
                  )
                }}
              />
            </div>
          </div>
        </div>
        <div>

        </div>
        <div style={{ width: '100%', height: '300px' }}>
          <ReactPlayer url='https://www.youtube.com/watch?v=akZjX4M-XH0' width='100%' height='300px' playing={true} />
        </div>
        <div style={{ width: '100%', marginTop: '292px' }}>
          <AppBar position="static" className={styles.style}>
            <Toolbar>
              <Typography  m={2} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom onClick={() => clickedType('consumer')}>
                Consumer
              </Typography>
              <Typography  m={2} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom onClick={() => clickedType('courier')}>
                Courier
              </Typography>
              <Typography  m={2} className={`${styles.send_typography} ${styles.cursor}`} variant="subtitle1" component="div" gutterBottom onClick={() => clickedType('provider')}>
                Service Provider
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <Box sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
          {checkType()}
        </Box>
        <Divider />

        <Box sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
          <Typography className={styles.send_typography} variant="h6" p={3} align="center" component="div" gutterBottom onClick={() => clickedType('consumer')} sx={{ flexGrow: 1 }}>
            About Us
          </Typography>
          <Typography className={styles.send_typography} variant="subtitle1" pl={3} pb={3} align="center" component="div" gutterBottom onClick={() => clickedType('consumer')} sx={{ flexGrow: 1 }}>
            In every daily lifes,we're always with you.
            From essential services to
            earning opportunities. We're an
            all-in-one platform for your home.
          </Typography>
        </Box>

        <Divider />
        <Box sx={{ flexGrow: 1 }}>
          <Typography className={styles.send_typography} variant="h6" align="left" component="div" gutterBottom sx={{ flexGrow: 1 }} pt={2} pl={2}>
            Put us in Your Pocket
          </Typography>
          <Typography className={styles.send_typography} variant="subtitle1" align="left" component="div" gutterBottom sx={{ flexGrow: 1 }} pt={2} pl={2} pb={2}>
            Download groceries and
            home services you love
          </Typography>
          {/* <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              pl: 2,
            }}
          >
            <Box sx={{
              width: 200,
              height: 200,
              mr: 1
            }}>
              <DashboardCard {...propsAppStore} />
            </Box>
            <Box sx={{
              width: 200,
              height: 200,
              mr: 1
            }}>
              <DashboardCard {...propsPlayStore} />
            </Box>
            <Box sx={{
              width: 200,
              height: 200,
              mr: 1
            }}>
              <DashboardCard {...propsHuaweiStore} />
            </Box>
          </Box> */}
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={6}>
              <Typography className={`${styles.send_typography} ${styles.cursor}`}
              m={2} variant="subtitle1" component="div" gutterBottom>
                Terms and Policies
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={`${styles.send_typography} ${styles.cursor}`} align="right" m={2} variant="subtitle1" component="div" gutterBottom>
                <img src={LogoIcon} alt="Logo" className={stylesHeader.landing_logoFooterStyle} />
              </Typography>
            </Grid>
          </Grid>
        </Box>
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
})(LandingPage);