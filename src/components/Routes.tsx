import React from 'react';

import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginSignupPage from './pages/LoginSignup';
import HeaderNoMenu from './layout/header-no-menu';
import HeaderWithMenu from './layout/header-with-menu';
import LandingShopDetails from './pages/UserDashboard';
import LandingShoppingPage from './pages/LandingShoppingPage';
import ProductDetailsPage from './pages/product-details';
import UserDashboard01 from './pages/UserDashboard01';
import Shop01 from './pages/Shop01';
import Product01 from './pages/Product01';
import { Product } from './interfaces/Product';
import LoginPage from './pages/LoginPage';
import OTPPage from './pages/OTPPage';
import SignupPage from './pages/Signup-01';
import OnBoardingPage from './pages/OnBoarding';
import styles from './css/pages.module.css';
import styleHeader from './css/header.module.css';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import ProviderDashboard from './pages/ProviderDashboard';
import SideMenu from './layout/side-menu';
import { MenuDataInterFace } from './interfaces/menu.interface';
import { StoreState } from './reducers/index';
import { connect } from 'react-redux';
import InventoryPage from './pages/InventoryPage';
import ProductList from './pages/ProductList';
import CustomerList from './pages/CustomerList';
import CustomerEntry from './pages/CustomerEntry';
import AdminDashboard from './pages/AdminDashboard';
import ProductEntry from './pages/AddNewProduct';
import { ToggleMenuACT } from './actions/menuAction';
import { Box } from '@mui/material';

import { HeaderDataInterFace } from './interfaces/header.interface';
import { HeaderOpenACT } from './actions/HeaderAction';
import { NavOpenACT } from './actions/NavigatorAction';
import { NavigatorDataInterFace } from './interfaces/navigator.interface';

import HeaderUser from './layout/header-user-dashboard';
import WebEcommerce from './pages/WebEcommerce';
import WebEcommerceCategory from './pages/WebEcommerceCategory';
import WebEcommerceShop from './pages/WebEcommerceShop';
import WebEcommerceCart from './pages/WebEcommerceCart';
import WebEcommerceThankYou from './pages/WebEcommerceThankYou';
import WebEcommerceTrack from './pages/WebEcommerceTrack';
import WebEcommerceTrackCompleted from './pages/WebEcommerceTrackCompleted';

//platform test
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export const pageEndpoint: { [key: string]: string } = {
  main: '',
  LoginPage: 'login',
  SignupPage: 'signup',
  OTPPage: 'otp',
  OnBoardingPage: 'on-boarding',
  InventoryPage: 'inventory',
  WebEcommerce: 'web-ecommerce',
  WebEcommerceCategory: 'web-ecommerce-category',
  WebEcommerceShop: 'web-ecommerce-shop',
  WebEcommerceCart: 'web-ecommerce-cart',
  WebEcommerceThankYou: 'web-ecommerce-thankyou',
  WebEcommerceTrack: 'web-ecommerce-track',
  WebEcommerceTrackCompleted: 'web-ecommerce-track-completed',
  userDash: "user-dashboard",
  proDash: "provider-dashboard",
  adminDash: "admin-dashboard",
  shopDetails: "shop-details",
  LandingShopDetails: "main-shop-details",
  LandingShoppingPage: "main-shopping",
  ProductDetailsPage: "product-details",
  ProductList: "product-list",
  ProductEntry: "product-entry",
  CustomerList: "customer-list",
  CustomerEntry: "customer-entry",
  UserDashboard01: "user-dashboard01",
  Shop01: "shop01",
  Product01: "product01",
  noMatch: '*'
};

let propsUserDash = {
  route: `/${pageEndpoint.userDash}`,
  menu: [
    { id: 0, title: 'Dashboard', icon: 'DashboardIcon', route: `/${pageEndpoint.userDash}` },
    { id: 1, title: 'Shops', icon: 'InventoryIcon', route: `/${pageEndpoint.userDash}` },
    { id: 2, title: 'Profile', icon: 'LibraryBooksIcon', route: `/${pageEndpoint.userDash}` },
    { id: 3, title: 'Logout', icon: 'MessageIcon', route: `/${pageEndpoint.userDash}` },
  ],
  content: "UserDashboard"
};

let propsAdminDash = {
  route: `/${pageEndpoint.adminDash}`,
  menu: [
    { id: 0, title: 'Dashboard', icon: 'DashboardIcon', route: `/${pageEndpoint.adminDash}` },
    { id: 1, title: 'Users', icon: 'PersonIcon', route: `/${pageEndpoint.CustomerList}` },
    { id: 2, title: 'Profile', icon: 'PersonIcon', route: `/${pageEndpoint.adminDash}` }
  ],
  content: "AdminDashboard"
};

let propsProDash = {
  route: `/${pageEndpoint.proDash}`,
  menu: [
    { id: 0, title: 'Dashboard', icon: 'DashboardIcon', route: `${pageEndpoint.proDash}` },
    { id: 1, title: 'Inventory', icon: 'InventoryIcon', route: `/${pageEndpoint.InventoryPage}` },
    { id: 2, title: 'Orders', icon: 'LibraryBooksIcon', route: `/${pageEndpoint.proDash}` },
    { id: 3, title: 'Messages', icon: 'MessageIcon', route: `/${pageEndpoint.proDash}` },
    { id: 4, title: 'Profile', icon: 'PersonIcon', route: `/${pageEndpoint.proDash}` },
  ],
  content: "ProviderDashboard",
};

let propsOnBoardPro = {
  route: `/${pageEndpoint.OnBoardingPage}`,
  menu: [],
  content: "OnBoardingPage"
};

let propsLandingPage = {
  route: `/${pageEndpoint.main}`,
  menu: [],
  content: "LandingPage"
};

let propsShoppingPage = {
  route: `/${pageEndpoint.LandingShoppingPage}`,
  menu: [],
  content: "LandingShoppingPage"
};

let propsProductEntry = {
  route: `/${pageEndpoint.ProductEntry}`,
  menu: [
    { id: 0, title: 'Dashboard', icon: 'DashboardIcon', route: `${pageEndpoint.proDash}` },
    { id: 1, title: 'Inventory', icon: 'InventoryIcon', route: `/${pageEndpoint.InventoryPage}` },
    { id: 2, title: 'Orders', icon: 'LibraryBooksIcon', route: `/${pageEndpoint.proDash}` },
    { id: 3, title: 'Messages', icon: 'MessageIcon', route: `/${pageEndpoint.proDash}` },
    { id: 4, title: 'Profile', icon: 'PersonIcon', route: `/${pageEndpoint.proDash}` },
  ],
  content: "ProductEntry",
  selectedMenu: { id: 1, title: 'Inventory', icon: 'InventoryIcon', route: `/${pageEndpoint.InventoryPage}` }
};

let propsProductList = {
  route: `/${pageEndpoint.ProductList}`,
  menu: [
    { id: 0, title: 'Dashboard', icon: 'DashboardIcon', route: `${pageEndpoint.proDash}` },
    { id: 1, title: 'Inventory', icon: 'InventoryIcon', route: `/${pageEndpoint.InventoryPage}` },
    { id: 2, title: 'Orders', icon: 'LibraryBooksIcon', route: `/${pageEndpoint.proDash}` },
    { id: 3, title: 'Messages', icon: 'MessageIcon', route: `/${pageEndpoint.proDash}` },
    { id: 4, title: 'Profile', icon: 'PersonIcon', route: `/${pageEndpoint.proDash}` },
  ],
  content: "ProductList"
};

let propsInventoryPage = {
  route: `/${pageEndpoint.InventoryPage}`,
  menu: [
    { id: 0, title: 'Dashboard', icon: 'DashboardIcon', route: `${pageEndpoint.proDash}` },
    { id: 1, title: 'Inventory', icon: 'InventoryIcon', route: `/${pageEndpoint.InventoryPage}` },
    { id: 2, title: 'Orders', icon: 'LibraryBooksIcon', route: `/${pageEndpoint.proDash}` },
    { id: 3, title: 'Messages', icon: 'MessageIcon', route: `/${pageEndpoint.proDash}` },
    { id: 4, title: 'Profile', icon: 'PersonIcon', route: `/${pageEndpoint.proDash}` },
  ],
  content: "InventoryPage",
  selectedMenu: { id: 1, title: 'Inventory', icon: 'InventoryIcon', route: `/${pageEndpoint.InventoryPage}` }
};

let propsCustomerList = {
  route: `/${pageEndpoint.CustomerList}`,
  menu: [
    { id: 0, title: 'Dashboard', icon: 'DashboardIcon', route: `/${pageEndpoint.adminDash}` },
    { id: 1, title: 'Users', icon: 'PersonIcon', route: `/${pageEndpoint.CustomerList}` },
    { id: 2, title: 'Profile', icon: 'PersonIcon', route: `/${pageEndpoint.adminDash}` },
  ],
  content: "CustomerList",
  selectedMenu: { id: 1, title: 'Users', icon: 'PersonIcon', route: `/${pageEndpoint.CustomerList}` }
};

let propsCustomerEntry = {
  route: `/${pageEndpoint.CustomerEntry}`,
  menu: [
    { id: 0, title: 'Dashboard', icon: 'DashboardIcon', route: `/${pageEndpoint.adminDash}` },
    { id: 1, title: 'Users', icon: 'PersonIcon', route: `/${pageEndpoint.CustomerList}` },
    { id: 2, title: 'Profile', icon: 'PersonIcon', route: `/${pageEndpoint.adminDash}` }
  ],
  content: "CustomerEntry",
  selectedMenu: { id: 1, title: 'Users', icon: 'PersonIcon', route: `/${pageEndpoint.CustomerList}` }
};

const routes = [
  {
    path: `/${pageEndpoint.main}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <LandingPage {...propsLandingPage} />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.OnBoardingPage}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <OnBoardingPage {...propsOnBoardPro} />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.proDash}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <React.Fragment>
        {SideMenuFunc(propsProDash)}
      </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <ProviderDashboard {...propsProDash} />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.SignupPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <SignupPage />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.LoginPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <LoginPage />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.OTPPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <OTPPage />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.LandingShopDetails}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <LandingShopDetails />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.WebEcommerce}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <WebEcommerce />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.WebEcommerceCategory}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <WebEcommerceCategory />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.WebEcommerceShop}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <WebEcommerceShop />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.WebEcommerceCart}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <WebEcommerceCart />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.WebEcommerceThankYou}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <WebEcommerceThankYou />
      </React.Fragment>
    ),
  },
   {
    path: `/${pageEndpoint.WebEcommerceTrack}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <WebEcommerceTrack />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.WebEcommerceTrackCompleted}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <WebEcommerceTrackCompleted />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.UserDashboard01}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <UserDashboard01 />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.Shop01}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <Shop01 />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.Product01}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <Product01 />
      </React.Fragment>
    ),
  },

  {
    path: `/${pageEndpoint.LandingShoppingPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <LandingShoppingPage {...propsShoppingPage} />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.InventoryPage}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <React.Fragment>
        {SideMenuFunc(propsInventoryPage)}
      </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <InventoryPage {...propsInventoryPage} />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.ProductList}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <React.Fragment>
        {SideMenuFunc(propsProductList)}
      </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <ProductList />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.ProductEntry}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <React.Fragment>
        {SideMenuFunc(propsProductEntry)}
      </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <ProductEntry />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.CustomerList}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <React.Fragment>
        {SideMenuFunc(propsCustomerList)}
      </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <CustomerList {...propsCustomerList} />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.CustomerEntry}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <React.Fragment>
        {SideMenuFunc(propsCustomerEntry)}
      </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <CustomerEntry />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.adminDash}`,
    exact: true,
    header: () => (
      <></>
    ),
    navigator: () => (
      <React.Fragment>
        {SideMenuFunc(propsAdminDash)}
      </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <AdminDashboard {...propsAdminDash} />
      </React.Fragment>
    ),
  }

]

const SideMenuFunc = (param: any) => {
  return <SideMenu routeParam={param} />;
}
const Routes = (props: any) => {
  const toggleDrawer = () => {
    props.ToggleMenuACT(!props.open.open);
    props.NavOpenACT(true);
  }

  const content = () => {
    if (props.headerOpen.headerOpen) {
      return <div id="content" className={styles.send_content_header}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.navigator />}
            />
          ))}
        </Switch>
        <div>
          {main()}
        </div>
      </div>;
    } else {
      return <div id="content" className={styles.send_content_no_header}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.navigator />}
            />
          ))}
        </Switch>
        <div>
          {main()}
        </div>
      </div>;
    }
  }

  const main = () => {
    if (props.navOpen.navOpen) {
      return <div className={styleHeader.send_content_div}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>;
    } else {
      return <div className={styleHeader.send_content_div_full}>
        <div>
          {humburger()}
        </div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>;
    }
  }

  const humburger = () => {
    if (!props.open.open)
      return <Box sx={{ width: 1350, textAlign: 'left' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 0.5, flexGrow: 1 }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Box>;
    else
      return <></>;
  }

  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <div className={styles.primary_font}>
          <div id="main">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.header />}
                />
              ))}
            </Switch>
          </div>
          <div className={styles.content}>
            <div className='container-fluid'>
              {content()}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
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
})(Routes);
