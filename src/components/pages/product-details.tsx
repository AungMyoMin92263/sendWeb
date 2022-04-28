import React from "react";

// import component 👇
import UserDashShopCard from "../atoms/ui-elements/UserDashShopCard";

//import styles 👇
import "react-modern-drawer/dist/index.css";

// style
import styles from '../css/pages.module.css';

// app bar
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

//crousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { Paper } from "@mui/material";

//image
import Welcome from "./../../assets/images/welcome.jpg";
import Item from "./../../assets/images/batteryItem.jpg";
import Item1 from "./../../assets/images/battery1.jpg";
import Item2 from "./../../assets/images/battery2.jpg";
import Item3 from "./../../assets/images/battery3.jpg";
import Item4 from "./../../assets/images/battery4.jpg";

import Cat from "./../../assets/images/sdcard.jpg";
import Cat1 from "./../../assets/images/sdcard1.jpg";
import Cat2 from "./../../assets/images/sdcard2.jpeg";
import Cat3 from "./../../assets/images/sdcard3.jpg";
import Cat4 from "./../../assets/images/sdcard4.jpg";
import Cat5 from "./../../assets/images/sdcard5.jpg";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Banner from "./../../assets/images/bannerFinal.jpg";
import products from "./products";
const imageStyle = {
  width: "90%",
  height: "auto",
};

const CarouselImageStyle = {
  width: "180px",
  height: "200px",
};

const itemImageStyle = {
  width: "60px",
  height: "auto",
};

const div3 = {
  height: "33.33%",
  width: "100%",
  paddingLeft: "15px",
};

const cursor = {
  cursor: "pointer",
};

//crousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

//crousel
const responsiveProducts = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const ProductDetailsPage = (props: { id: number }) => {
  const [items, setItems] = React.useState(products);

  let ind = items.findIndex((p) => p.id == props.id);
  let index = ind > -1 ? ind : 0;
  const [product, setProduct] = React.useState(items[index]);
  const [qty, setQty] = React.useState(1);
  const [price, setPrice] = React.useState(product.price);
  const [subTotal, setSubTotal] = React.useState(product.price * qty);
  const [cost, setCost] = React.useState(subTotal + 5);

  const addItemClicked = () => {
    setQty((prevState) => prevState + 1);
    setCost((prevState) => product.price * qty + 5);
    setSubTotal((prevState) => product.price * qty);
  };

  return (
    <>
      <div
        className="content"
        style={{ height: "calc(100vh - 70px)", overflowY: "hidden" }}
      >
        <div
          style={{
            width: "352px",
            height: "100vh",
            float: "right",
            borderLeft: "1px solid lightgrey",
            overflow: "hidden",
          }}
        >
          <Typography className={styles.send_typography}
            variant="subtitle2"
            p={4}
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Your Order from Mart
          </Typography>
          <div
            style={{
              width: "100%",
              backgroundColor: "#F5F5F5",
              height: "100px",
            }}
          >
            <div style={{ width: "100%", display: "flex" }}>
              <img
                src={require(`../../assets/icons/${product.basicInformation.productImages[0].dataURL}`)}
                alt="Item"
                style={itemImageStyle}
              />
              <Typography className={styles.send_typography}
                variant="subtitle2"
                pl={1}
                pb={1}
                component="div"
                sx={{ flexGrow: 1 }}
              >
                {product.name}
              </Typography>
              <Typography className={styles.send_typography}
                variant="subtitle2"
                pl={1}
                pb={1}
                component="div"
                sx={{ flexGrow: 1 }}
              >
                S${product.price}
              </Typography>
            </div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  float: "right",
                  display: "flex",
                  backgroundColor: "#FFF",
                }}
              >
                <DeleteIcon
                  sx={{ color: "#E39435", fontSize: 24, mr: 2 }}
                  style={cursor}
                ></DeleteIcon>
                <Typography className={styles.send_typography} variant="subtitle2" mr={1} component="div">
                  {qty}
                </Typography>
                <AddIcon
                  sx={{ color: "#E39435", fontSize: 24, mr: 2 }}
                  onClick={() => addItemClicked()}
                  style={cursor}
                ></AddIcon>
              </div>
            </div>
          </div>
          <Box sx={{ flexGrow: 1, m: 1 }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ ml: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                >
                  Subtotal{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ mr: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                  align="right"
                >
                  {subTotal}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ ml: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                >
                  Small order fee{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ mr: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                  align="right"
                >
                  $2.00
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ ml: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                >
                  Delivery fee{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ mr: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                  align="right"
                >
                  $2.00
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ ml: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                >
                  Platform fee{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ mr: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                  align="right"
                >
                  $1.00
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ ml: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                >
                  Total (Incl. GST){" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={styles.send_typography}
                  sx={{ mr: 2 }}
                  variant="body2"
                  component="div"
                  gutterBottom
                  align="right"
                >
                  {cost}
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <LocalOfferIcon
              sx={{ color: "#E39435", fontSize: 24, m: 2 }}
            ></LocalOfferIcon>
            <Typography className={styles.send_typography}
              variant="body2"
              pl={2}
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
            >
              $2.10 off delivery fee with $40.00 and above. Let's go!
            </Typography>
            <Divider />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#E39435",
                color: "#FFF",
                width: "322px",
                height: "50px",
                margin: "15px",
              }}
            >
              Go to Checkout
            </Button>
          </Box>
        </div>

        <div
          style={{
            width: "calc(100% - 353px)",
            float: "right",
            alignItems: "center",
            height: "calc(100vh - 70px)",
            overflowY: "auto",
          }}
        >
          <div
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
                <Grid container>
                  <Grid item xs={6}>
                    <div style={{ width: "100%" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignContent: "flex-start",
                          p: 1,
                          ml: 3,
                          mb: 3,
                          bgcolor: "background.paper",
                          borderRadius: 1,
                        }}
                      >
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
                          {product.basicInformation.productImages.map(
                            (image) => (
                              <div>
                                <Paper>
                                  <img
                                    src={require(`../../assets/icons/${image.dataURL}`)}
                                    alt="Shop"
                                    style={CarouselImageStyle}
                                  />
                                </Paper>
                              </div>
                            )
                          )}
                        </Carousel>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={div3}></div>
                    <div style={div3}>
                      <Typography className={styles.send_typography}
                        component="div"
                        variant="subtitle1"
                        sx={{ color: "#E39435" }}
                      >
                        {product.name}
                      </Typography>
                      <Typography className={styles.send_typography}
                        component="div"
                        sx={{ color: "#E39435", fontSize: "14px" }}
                      >
                        {product.specification.weight} 
                        {product.specification.weightUnit.name}
                      </Typography>
                      <Typography className={styles.send_typography}
                        component="div"
                        sx={{ color: "#E39435", fontSize: "14px" }}
                      >
                        S$ {product.price}
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#E39435",
                          color: "#FFF",
                          width: "200px",
                          height: "40px",
                          marginTop: "15px",
                        }}
                        onClick={() => addItemClicked()}
                      >
                        Add to Cart
                      </Button>
                    </div>
                    <div style={div3}></div>
                  </Grid>
                </Grid>
                <Divider />
                <Typography className={styles.send_typography} align="left" component="div" variant="subtitle1" sx={{ m: 3 }}>
                  Product Information
                </Typography>
                <Divider />

                <Typography className={styles.send_typography} align="left" component="div" variant="subtitle1" sx={{ m: 3 }}>
                  Similar products for you
                </Typography>
                <div style={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      p: 1,
                      ml: 3,
                      mb: 3,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                  >
                    <Carousel
                      swipeable={false}
                      draggable={false}
                      showDots={false}
                      responsive={responsiveProducts}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      autoPlay={false}
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
                      {items.map((product) => (
                        <div>
                          <Paper
                            sx={{
                              backgroundColor: "#FFF",
                              minHeight: "120px",
                              mr: 1,
                              width: "180px",
                              height: "210px",
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
                                  style={imageStyle}
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
                    </Carousel>
                  </Box>
                </div>
                <Typography className={styles.send_typography} align="left" component="div" variant="subtitle1" sx={{ m: 3 }}>
                  Best match for this product
                </Typography>
                <div style={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      p: 1,
                      ml: 3,
                      mb: 3,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                  >
                    <Carousel
                      swipeable={false}
                      draggable={false}
                      showDots={false}
                      responsive={responsiveProducts}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      autoPlay={false}
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
                      {items.map((product) => (
                        <div>
                          <Paper
                            sx={{
                              backgroundColor: "#FFF",
                              minHeight: "120px",
                              mr: 1,
                              width: "180px",
                              height: "210px",
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
                                  style={imageStyle}
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
                    </Carousel>
                  </Box>
                </div>
                <Divider />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
