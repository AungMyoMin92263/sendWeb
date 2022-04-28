import React from "react";

//import styles 👇
import "react-modern-drawer/dist/index.css";

// style
import styles from '../css/pages.module.css';

// import component 👇
import UserDashShopCard from "../atoms/ui-elements/UserDashShopCard";
// app bar
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

//crousel
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { Container, Grid, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//image
import Banner from "./../../assets/icons/banner.png";
import Banner1 from "./../../assets/icons/banner1.png";
import featuredoffer1 from "./../../assets/icons/featuredoffer1.png";
import featuredoffer2 from "./../../assets/icons/featuredoffer2.png";

import "./../../assets/icons/grocery.png";
import Carousel from "react-multi-carousel";
import serviceMenus from "./ServiceMenu";

const bannerImageStyle = {
  width: "98%",
  height: "150px",
  backgroundColor: "lightgray",
};

const imageStyle = {
  width: "100%",
  maxHeight: "145px",
  marginRight: "8px",
};

const menuImageStyle = {
  width: "42px",
  height: "42px",
  backgroundColor: "lightgray",
  padding: "5px",
};
const cursor = {
  cursor: "pointer",
};

//crousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const responsiveShops = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LandingShopDetails = () => {
  const [selectedServiveMenu, setSelectedServiveMenu] = React.useState(
    serviceMenus[0]
  );
  const menuClicked = (menu: any) => {
    setSelectedServiveMenu(menu);
  };
  //cards
  let propsShop1 = {
    title: "Farmart, Bedok",
    navigateTo: "",
    icon: "shop1.png",
    footer: "",
    rating: 5,
    duration: 5,
    delievery: 1.5,
  };

  let propsShop2 = {
    title: "Farmart, Bedok",
    navigateTo: "",
    icon: "shop2.png",
    footer: "",
    rating: 5,
    duration: 5,
    delievery: 2,
  };

  return (
    <>
      <div
        className="content"
        style={{
          textAlign: "center",
          backgroundColor: "rgb(237 236 236)",
          padding: "15px",
        }}
      >
        <Container maxWidth="md">
          <div
            style={{
              backgroundColor: "#FFF",
              padding: "30px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF",
                boxShadow: 2,
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <Grid container>
                <Grid item xs={6}>
                  <Typography className={styles.send_typography}
                    style={cursor}
                    variant="subtitle2"
                    component="div"
                    gutterBottom
                  >
                    Delievering to : Singapore 600111
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={styles.send_typography}
                    style={cursor}
                    variant="subtitle2"
                    component="div"
                    gutterBottom
                  >
                    When : ASAP
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <div style={{ width: "100%" }}>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"desktop"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <img src={Banner} alt="Shop" style={bannerImageStyle} />
                <img src={Banner1} alt="Shop" style={bannerImageStyle} />
              </Carousel>
            </div>
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
                      <NavLink to="/user-dashboard01">
                        <div style={cursor} onClick={() => menuClicked(menu)}>
                          <div>
                            <img
                              style={menuImageStyle}
                              src={require(`../../assets/icons/${menu.image}`)}
                            />
                          </div>
                          <div>
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
            <TextField className={styles.send_textfield} 
              sx={{ width: "100%", minHeight: "50px", mb: 2 }}
              label="Search ..."
              InputProps={{
                endAdornment: (
                  <NavLink to="/user-dashboard01">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </NavLink>
                ),
              }}
            />
            <div style={{ width: "100%" }}>
              <Typography className={styles.send_typography}
                variant="subtitle2"
                pb={1}
                component="div"
                sx={{ flexGrow: 1 }}
                align="left"
              >
                Featured Offers
              </Typography>
            </div>

            <div style={{ width: "100%" }}>
              <Stack direction="row" spacing={2}>
                <div>
                  <NavLink to="/shop01">
                    <img src={featuredoffer1} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shop01">
                    <img src={featuredoffer2} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shop01">
                    <img src={featuredoffer1} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shop01">
                    <img src={featuredoffer2} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shop01">
                    <img src={featuredoffer1} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shop01">
                    <img src={featuredoffer2} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shop01">
                    <img src={featuredoffer1} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shop01">
                    <img src={featuredoffer2} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
              </Stack>
            </div>
            <div style={{ width: "100%" }}>
              <Typography className={styles.send_typography}
                variant="subtitle2"
                pt={1}
                pb={1}
                component="div"
                sx={{ flexGrow: 1 }}
                align="left"
              >
                Featured Grocery Shops
              </Typography>
            </div>
            <div style={{ width: "100%" }}>
              <Stack direction="row" spacing={2}>
                <NavLink to="/shop01">
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                  >
                    <Box
                      sx={{
                        mr: 1,
                      }}
                    >
                      <UserDashShopCard {...propsShop1} />
                    </Box>
                  </Box>
                </NavLink>
                <NavLink to="/shop01">
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                  >
                    <Box
                      sx={{
                        mr: 1,
                      }}
                    >
                      <UserDashShopCard {...propsShop1} />
                    </Box>
                  </Box>
                </NavLink>
                <NavLink to="/shop01">
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                  >
                    <Box
                      sx={{
                        mr: 1,
                      }}
                    >
                      <UserDashShopCard {...propsShop1} />
                    </Box>
                  </Box>
                </NavLink>
              </Stack>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingShopDetails;
