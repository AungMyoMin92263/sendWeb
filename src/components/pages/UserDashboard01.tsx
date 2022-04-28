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
import { Container, Grid, Paper, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//image
import Banner from "./../../assets/icons/banner.png";
import Banner1 from "./../../assets/icons/banner1.png";
import promotion1 from "./../../assets/icons/promotion1.png";
import promotion2 from "./../../assets/icons/promotion2.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import products from "./products";

import "./../../assets/icons/grocery.png";
import Carousel from "react-multi-carousel";

const bannerImageStyle = {
  width: "98%",
  height: "150px",
  backgroundColor: "lightgray",
};
const typeMenu = [
  {
    id: 0,
    label: "Grocery",
    image: "grocery.png",
  },
  {
    id: 0,
    label: "Cleaning",
    image: "cleaning.png",
  },
  {
    id: 0,
    label: "Services",
    image: "services.png",
  },
  {
    id: 0,
    label: "Other",
    image: "other.png",
  },
];

const imageStyle = {
  width: "100%",
  maxHeight: "145px",
  marginRight: "8px",
};

const productImageStyle = {
  width: "100px",
  height: "auto",
};

const menuImageStyle = {
  width: "24px",
  height: "24px",
};
const cursor = {
  cursor: "pointer",
};

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

const UserDashboard01 = () => {
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

  const [items, setItems] = React.useState(products);

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
            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <img
                style={menuImageStyle}
                src={require(`../../assets/icons/grocery.png`)}
              />
              <Typography className={styles.send_typography}
                style={cursor}
                ml={2}
                variant="subtitle2"
                component="div"
                gutterBottom
              >
                Grocery Delievery
              </Typography>
            </Stack>
            <TextField className={styles.send_textfield} 
              sx={{ width: "100%", minHeight: "50px", mb: 2 }}
              label="Search ..."
              InputProps={{
                endAdornment: (
                  <NavLink to="/shop01">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </NavLink>
                ),
              }}
            />
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

            <Typography className={styles.send_typography}
              variant="subtitle2"
              pb={2}
              pt={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Promotion
            </Typography>
            <div style={{ width: "100%" }}>
            <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    pt: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                <div style={{ width : '100px',marginRight : "4px" }}>
                  <NavLink to="/shop01">
                    <img src={promotion1} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div style={{ width : '100px',marginRight : "4px" }}>
                  <NavLink to="/shop01">
                    <img src={promotion2} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div style={{ width : '100px',marginRight : "4px" }}>
                  <NavLink to="/shop01">
                    <img src={promotion1} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div style={{ width : '100px',marginRight : "4px" }}>
                  <NavLink to="/shop01">
                    <img src={promotion2} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div style={{ width : '100px',marginRight : "4px" }}>
                  <NavLink to="/shop01">
                    <img src={promotion1} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div style={{ width : '100px',marginRight : "4px" }}>
                  <NavLink to="/shop01">
                    <img src={promotion2} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
                <div style={{ width : '100px',marginRight : "4px" }}>
                  <NavLink to="/shop01">
                    <img src={promotion1} alt="Shop" style={imageStyle} />
                  </NavLink>
                </div>
              </Box>
            </div>
            <Typography className={styles.send_typography}
              variant="subtitle2"
              pb={2}
              pt={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Today's Selection
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
                          mr: 1,
                          mb: 1,
                          width: "180px",
                          height: "200px",
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
                              style={productImageStyle}
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
                                  style={cursor}
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

            <Typography className={styles.send_typography}
              variant="subtitle2"
              pb={2}
              pt={1.5}
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Featured Grocery Shops
            </Typography>
            <div style={{ width: "100%" }}>
              <Stack direction="row" spacing={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <NavLink to="/shop01">
                    <Box
                      sx={{
                        mr: 1,
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
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <NavLink to="/shop01">
                    <Box
                      sx={{
                        mr: 1,
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
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <NavLink to="/shop01">
                    <Box
                      sx={{
                        mr: 1,
                      }}
                    >
                      <UserDashShopCard {...propsShop1} />
                    </Box>
                  </NavLink>
                </Box>
              </Stack>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UserDashboard01;
