import React from "react";

//import styles 👇
import "react-modern-drawer/dist/index.css";

// style
import styles from '../css/pages.module.css';

// app bar
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

//crousel
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import { NavLink } from "react-router-dom";
import { Container, Grid, Paper, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "./../../assets/icons/banner.png";
import Banner1 from "./../../assets/icons/banner1.png";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import "./../../assets/icons/grocery.png";
import categories from "./categories";

const bannerImageStyle = {
  width: "auto",
  height: "150px",
  backgroundColor: "lightgray",
};

const imageStyle = {
  width: "60%",
  maxHeight: "auto",
};

const shopImageStyle = {
  width: "80px",
  height: "auto",
};
const cursor = {
  cursor: "pointer",
};

const Shop01 = () => {
  let propsShop1 = {
    title: "Farmart, Bedok",
    navigateTo: "",
    icon: "shop1.png",
    footer: "",
    rating: 5,
    duration: 5,
    delievery: 1.5,
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

  return (
    <>
      <div
        className="content"
        style={{
          textAlign: "center",
          backgroundColor: "rgb(237 236 236)",
          padding: "15px",
          height: "calc(100vh - 94px)",
          overflowY: "auto",
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
                style={shopImageStyle}
                src={require(`../../assets/icons/shop.png`)}
              />
              <div>
                <Typography className={styles.send_typography}
                  style={cursor}
                  ml={2}
                  variant="subtitle2"
                  component="div"
                  gutterBottom
                  align="left"
                >
                  Farmart, Bedok
                </Typography>
                <Box sx={{ display: "flex", mt: 1 }}>
                  <PedalBikeIcon sx={{ fontSize: 16, mr: 0.5 }}></PedalBikeIcon>
                  <Typography className={styles.send_typography}
                    pr={2}
                    gutterBottom
                    sx={{ fontSize: 12 }}
                    component="div"
                  >
                    15 km
                  </Typography>
                  <AccessTimeFilledIcon
                    sx={{ fontSize: 16, mr: 0.5 }}
                  ></AccessTimeFilledIcon>
                  <Typography className={styles.send_typography}
                    pr={2}
                    gutterBottom
                    sx={{ fontSize: 12 }}
                    component="div"
                  >
                    8 mins{" "}
                  </Typography>
                  <StarOutlineOutlinedIcon
                    sx={{ fontSize: 16, mr: 0.5 }}
                  ></StarOutlineOutlinedIcon>
                  <Typography className={styles.send_typography}
                    pr={2}
                    gutterBottom
                    sx={{ fontSize: 12 }}
                    component="div"
                  >
                    4.5
                  </Typography>
                </Box>
              </div>
            </Stack>

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
                <img src={Banner1} alt="Shop" style={bannerImageStyle} />
                <img src={Banner1} alt="Shop" style={bannerImageStyle} />
              </Carousel>
            </div>
            <TextField className={styles.send_textfield} 
              sx={{ width: "100%", minHeight: "50px", mt : 1,mb : 1 }}
              label="Search ..."
              InputProps={{
                endAdornment: (
                  <NavLink to="/product01">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </NavLink>
                ),
              }}
            />

            <Typography className={styles.send_typography}
              variant="subtitle2"
              pb={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align = "left"
            >
              Categories
            </Typography>
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
                <>
                  {categories.map((menu: any) => (
                    <>
                      <NavLink to="/product01">
                        <Box
                          sx={{
                            backgroundColor: "#F5F5F5",
                            boxShadow: 1,
                            width: "90px",
                            height: "100px",
                            textAlign: "center",
                            color: "#E39435",
                            paddingTop: "15px",
                            mr : 1,
                            mb: 1
                          }}
                        >
                          <div>
                            <img
                              style={imageStyle}
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
                        </Box>
                      </NavLink>
                    </>
                  ))}
                </>
              </Box>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Shop01;
