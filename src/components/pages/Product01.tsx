import React from "react";

//import styles 👇
import "react-modern-drawer/dist/index.css";

// style
import styles from '../css/pages.module.css';

// import component 👇
// app bar
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

//crousel
import { NavLink } from "react-router-dom";
import { Container, Grid, Paper, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//image
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import products from "./products";
import "./../../assets/icons/grocery.png";
import { Product } from "../interfaces/Product";

const bannerImageStyle = {
  width: "auto",
  height: "150px",
  backgroundColor: "lightgray",
};

const imageStyle = {
  width: "100px",
  height: "auto",
};

const itemImageStyle = {
  width: "60px",
  height: "auto",
};

const menuImageStyle = {
  width: "24px",
  height: "24px",
};
const cursor = {
  cursor: "pointer",
};

// interface Product {
//     name: string,
//     properties: string,
//     description: string,
//     price: string,
// }

const Product01 = () => {
  const [items, setItems] = React.useState(products);
  const [selectedItem, setSelectedItem] = React.useState(items[0]);
  const [qty, setQty] = React.useState(1);
  const [price, setPrice] = React.useState(selectedItem.price);
  const [subTotal, setSubTotal] = React.useState(selectedItem.price * qty);
  const [cost, setCost] = React.useState(subTotal + 5);

  const addItemClicked = (item: Product) => {
    setSelectedItem(item);
    setQty((prevState) => prevState + 1);
    setCost((prevState) => item.price * qty + 5);
    setSubTotal((prevState) => item.price * qty);
  };

  let propsShop1 = {
    title: "Farmart, Bedok",
    navigateTo: "",
    icon: "shop1.png",
    footer: "",
    rating: 5,
    duration: 5,
    delievery: 1.5,
  };

  return (
    <>
      <div
        style={{
          width: "352px",
          height: "calc(100vh - 70px)",
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
          style={{ width: "100%", backgroundColor: "#F5F5F5", height: "100px" }}
        >
          <div style={{ width: "100%", display: "flex" }}>
            <img
              src={require(`../../assets/icons/${selectedItem.basicInformation.productImages[0].dataURL}`)}
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
              {selectedItem.name}
            </Typography>
            <Typography className={styles.send_typography}
              variant="subtitle2"
              pl={1}
              pb={1}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              S${selectedItem.price}
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
                onClick={() => addItemClicked(selectedItem)}
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
          overflowY: "hidden" 
        }}
      >
        <div
          className="content"
          style={{
            textAlign: "center",
            backgroundColor: "rgb(237 236 236)",
            padding: "15px",
            height: "calc(100vh - 100px)",
            overflowY : 'auto'
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
                <Typography className={styles.send_typography}
                  style={cursor}
                  variant="subtitle2"
                  component="div"
                  gutterBottom
                  align="center"
                >
                  Fruits
                </Typography>
              </Stack>
              <TextField className={styles.send_textfield} 
                sx={{ width: "100%", minHeight: "50px", mb: 2 }}
                label="Search ..."
                InputProps={{
                  endAdornment: (
                    <NavLink to="">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </NavLink>
                  ),
                }}
              />

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
                                  onClick={() => addItemClicked(product)}
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
          </Container>
        </div>
      </div>
    </>
  );
};

export default Product01;
