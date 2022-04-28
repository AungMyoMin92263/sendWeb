import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider, Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

//icons
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { pink } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import styles from '../../css/pages.module.css';
import mainStyles from '../../css/web-commerce.module.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';

const style = {
  background: "#FFF",
  color: "#E39435",
  borderRadius: "5"
};
export default function UserDashShopCard(props: any) {
  console.log('props', props)
  return (
    <Card sx={{ width: 383, height: 250 }} style={style}>
      <CardActionArea>
        {/* <div style={{ textAlign: 'right',zIndex : 1500 }}>
          <FavoriteBorderIcon sx={{ fontSize: '24px', color: '#E39435', m: 1 }}></FavoriteBorderIcon>
        </div> */}
        {/* <CardMedia
          component="img"
          height="auto"
          width="123px"
          image={require(`./../../../assets/icons/${props.icon}`)}
          alt="Shops"
        /> */}

        <img className={`${styles.card_image}`} src={require(`./../../../assets/icons/${props.icon}`)} />
        {/* <Divider /> */}
        <CardContent>
          <Typography className={styles.send_typography} gutterBottom variant="subtitle2" component="div">
            {props.title}
          </Typography>
          <Grid container sx={{ mb : 1}}>
            <Grid item xs={10}>
              <Box sx={{ display: 'flex' }}>
                <PedalBikeIcon sx={{ fontSize: 16, mr: 0.5, mt: 0.5 }}></PedalBikeIcon>
                <Typography className={styles.send_typography} pr={2} gutterBottom sx={{ fontSize: 12 }} component="div">{props.delievery} km</Typography>
                <AccessTimeFilledIcon sx={{ fontSize: 16, mr: 0.5, mt: 0.5 }}></AccessTimeFilledIcon>
                <Typography className={styles.send_typography} pr={2} gutterBottom sx={{ fontSize: 12 }} component="div">{props.duration}mins </Typography>

              </Box>
            </Grid>
            <Grid item xs={2}>
            <Box sx={{ display: 'flex' }}>
              <StarIcon sx={{ fontSize: 16, mr: 0.5, mt: 0.5 }}></StarIcon>
              <Typography className={styles.send_typography} pr={2} gutterBottom sx={{ fontSize: 12 }} component="div">{props.rating}</Typography>
            </Box>
            </Grid>
          </Grid>

          <div className={mainStyles.shop_label_div}>
            <LocalOfferIcon sx={{ fontSize: 14, mr: 0.5 }}></LocalOfferIcon><span>          S$10.00 off delivery fee
            </span>
          </div>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}
