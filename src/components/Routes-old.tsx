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
import styles from '../components/css/pages.module.css';

export const pageEndpoint: { [key: string]: string } = {
  main: '',
  LoginPage: 'login',
  SignupPage: 'signup',
  OTPPage: 'otp',
  OnBoardingPage: 'on-boarding',
  InventoryPage : 'inventory',
  userDash: "user-dashboard",
  proDash: "provider-dashboard",
  adminDash: "admin-dashboard",
  orderFromShops: "order-from-shops",
  shopDetails: "shop-details",
  LandingShopDetails : "main-shop-details",
  LandingShoppingPage : "main-shopping",
  ProductDetailsPage : "product-details",
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
  menu: ['Dashboard', 'Shops', 'Profile', 'Logout'],
  content: "UserDashboard",
  subMenu : []
};
let propsAdminDash = {
  menu: ['Dashboard','Users','Profile'],
  content: "AdminDashboard",
  subMenu : ['Customers','Add Customer']
};

let propsProDash = {
  menu: ['Dashboard', 'Inventory', 'Orders', 'Messages','Customer','Profile'],
  icons : ['DashboardIcon','InventoryIcon','LibraryBooksIcon','MessageIcon','PersonIcon','PersonIcon'],
  content: "ProviderDashboard",
  subMenu : ['Inventory','Add a new product']
};

let propsOnBoardPro = {
  menu: [],
  icons : [],
  content: "OnBoardingPage",
  subMenu : []
};

let propsProductEntry = {
  menu: ['Dashboard', 'Inventory', 'Orders', 'Messages','Customer','Profile'],
  content: "ProductEntry",
  subMenu : ['Products List','Product Entry']
};

let propsProductList = {
  menu: ['Dashboard', 'Inventory', 'Orders', 'Messages','Customer','Profile'],
  content: "ProductList",
  subMenu : ['Products List','Product Entry']
};

let propsInventoryPage = {
  menu: ['Dashboard', 'Inventory', 'Orders', 'Messages','Customer','Profile'],
  content: "InventoryPage",
  subMenu : ['Inventory','Add a new product']
};

let propsCustomerList = {
  menu: ['Dashboard','Users','Profile'],
  content: "CustomerList",
  subMenu : []
};

let propsCustomerEntry = {
  menu: ['Dashboard','Users','Profile'],
  content: "CustomerEntry",
  subMenu : []
};

let propsOrdersFromShop = {
  menu: ['Dashboard', 'Shops', 'Profile', 'Logout'],
  content: "OrderFromShops",
  subMenu : []
};

let propsShopDetails = {
  menu: ['Dashboard', 'Shops', 'Profile', 'Logout'],
  content: "ShopDetailsPage",
  subMenu : []
};

let routeDetailsParam = {
  id : 0
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
    main: () => (
      <React.Fragment>
        <LandingPage />
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
    main: () => (
      <React.Fragment>
        <LandingShopDetails />
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
    main: () => (
      <React.Fragment>
        <LandingShoppingPage />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.userDash}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu  {...propsUserDash} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  
  {
    path: `/${pageEndpoint.OnBoardingPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsOnBoardPro} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.proDash}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsProDash} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.InventoryPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsInventoryPage} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.ProductList}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsProductList} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.CustomerList}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsCustomerList} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.ProductEntry}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsProductEntry} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.CustomerEntry}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsCustomerEntry} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.adminDash}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsAdminDash} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.orderFromShops}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsOrdersFromShop} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.shopDetails}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderWithMenu {...propsShopDetails} />
      </React.Fragment>
    ),
    main: () => (
      <></>
    ),
  },
  {
    path: `/${pageEndpoint.ProductDetailsPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <HeaderNoMenu />
      </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <ProductDetailsPage {...routeDetailsParam}/>
      </React.Fragment>
    ),
  },
  
];




interface IStates {
}

export default class Routes extends React.Component<IStates> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
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
        <div id="content" className={styles.send_content}>
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
        </div>
      </div>
    );
  }
}