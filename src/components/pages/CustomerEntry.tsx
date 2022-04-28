import React from 'react';
// import component 👇
import Toolbar from '@mui/material/Toolbar';

import styles from '../css/pages.module.css';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from "@mui/icons-material/Person";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import {
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Box from '@mui/material/Box';
import categories from './categories';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';


const CustomerEntry = (props : any) => {
if(props.headerOpen.headerOpen)props.HeaderOpenACT(false);

  const [values, setValues] = React.useState({
    name: 'Customer Name',
    mobile: '64381234',
    email: 'customer@send.com',
    role: '',
    postalCode: '244987',
    streetName: 'Merchant Street',
    buildingName: '-',
    block: '484',
    floor: '01',
    unit: '02'
  });

  const selectTemplate = [];
  for (let cate of categories) {
    selectTemplate.push(<MenuItem value={cate.categoryId}> {cate.name} </MenuItem>);
  }

  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  const handleChangeCategory = (event : any) => {
    let index = categories.findIndex(cat => cat.categoryId == event.target.value)
    if (index > -1) {
      setSelectedCategory(categories[index]);
    }
  };

  return (
    <>
      <div>
        <Toolbar>
          <Typography className={styles.send_typography_page_title} variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
            Add Customers
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />} className={styles.send_btn_contained}>
            Add More
          </Button>
        </Toolbar>
        <div className={styles.m_15}>
          <Grid container sx={{ mb: 3 }}>
            <Grid item sm={6}>
              <div className={styles.border_right}>
                <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, m: 1 }}>
                  Basic Information
                </Typography>

                <div className={styles.inputStyle}>
                  <IconButton
                    sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                    aria-label="name"
                  >
                    <PersonIcon />
                  </IconButton>
                  <FormControl
                    variant="standard"
                    sx={{ width: "calc(100% - 50px)" }}
                  >
                    <TextField className={styles.send_textfield} 
                      label="Name"
                      id="standard-size-normal"
                      defaultValue={values.name}
                      variant="standard"
                    />
                  </FormControl>
                </div>
                <div className={styles.inputStyle}>
                  <IconButton
                    sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                    aria-label="mobile"
                  >
                    <PhoneIphoneIcon />
                  </IconButton>
                  <FormControl
                    variant="standard"
                    sx={{ width: "calc(100% - 50px)" }}
                  >
                    <TextField className={styles.send_textfield} 
                      label="Mobile"
                      id="standard-size-normal"
                      defaultValue={values.mobile}
                      variant="standard"
                    />
                  </FormControl>
                </div>
                <div className={styles.inputStyle}>
                  <IconButton
                    sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                    aria-label="email"
                  >
                    <LocalPostOfficeIcon />
                  </IconButton>
                  <FormControl
                    variant="standard"
                    sx={{ width: "calc(100% - 50px)" }}
                  >
                    <TextField className={styles.send_textfield} 
                      label="Email"
                      id="standard-size-normal"
                      defaultValue={values.email}
                      variant="standard"
                    />
                  </FormControl>
                </div>

                <div className={styles.inputStyle}>
                  <IconButton
                    sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                    aria-label="role"
                  >
                    <BookmarkIcon />
                  </IconButton>
                  <FormControl
                    variant="standard"
                    sx={{ width: "calc(100% - 50px)" }}
                  >
                    <Box sx={{ width: '265px', border: 'none' }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedCategory.categoryId}
                          label={selectedCategory.name}
                          onChange={handleChangeCategory}
                          sx={{ height: '40px' }}
                        >
                          {selectTemplate}
                        </Select>
                      </FormControl>
                    </Box>
                  </FormControl>
                </div>
              </div>

            </Grid>
            <Grid item sm={6}>
              <div className={styles.ml_30}>

                <Typography className={styles.send_typography} variant="body2" component="div" sx={{ flexGrow: 1, m: 1 }}>
                  Address
                </Typography>
                <div className={styles.inputStyle}>
                  <IconButton
                    sx={{ mt: 1, mr: 1, color: "rgba(227, 148, 53, 1)" }}
                    aria-label="postalCode"
                  >
                    <AddLocationAltIcon />
                  </IconButton>
                  <FormControl
                    variant="standard"
                    sx={{ width: "calc(100% - 50px)" }}
                  >
                    <TextField className={styles.send_textfield} 
                      label="Postal Code"
                      id="standard-size-normal"
                      defaultValue={values.postalCode}
                      variant="standard"
                    />
                  </FormControl>
                </div>
                <div className={styles.inputStyle}>
                  <FormControl
                    variant="standard"
                    sx={{ width: "calc(100% - 50px)" }}
                  >
                    <TextField className={styles.send_textfield} 
                      label="Street Name"
                      id="standard-size-normal"
                      defaultValue={values.streetName}
                      variant="standard"
                    />
                  </FormControl>
                </div>

                <div className={styles.inputStyle}>
                  <FormControl
                    variant="standard"
                    sx={{ width: "calc(100% - 50px)" }}
                  >
                    <TextField className={styles.send_textfield} 
                      label="Building Name"
                      id="standard-size-normal"
                      defaultValue={values.buildingName}
                      variant="standard"
                    />
                  </FormControl>
                </div>
                <div className={styles.flex_box}>
                  <div className={styles.div_3}>
                    <div className={styles.inputSmallStyle}>
                      <FormControl
                        variant="standard"
                        sx={{ width: "100%" }}
                      >
                        <TextField className={styles.send_textfield} 
                          label="Block"
                          id="standard-size-normal"
                          defaultValue={values.block}
                          variant="standard"
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className={styles.div_3}>
                    <div className={styles.inputSmallStyle}>
                      <FormControl
                        variant="standard"
                        sx={{ width: "100%" }}
                      >
                        <TextField className={styles.send_textfield} 
                          label="Floor"
                          id="standard-size-normal"
                          defaultValue={values.floor}
                          variant="standard"
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className={styles.div_3}>
                    <div className={styles.inputSmallStyle}>
                      <FormControl
                        variant="standard"
                        sx={{ width: "100%" }}
                      >
                        <TextField className={styles.send_textfield} 
                          label="Unit"
                          id="standard-size-normal"
                          defaultValue={values.unit}
                          variant="standard"
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div>
            <Button variant="contained" className={styles.send_button}>
              Cancel
            </Button>
            <div className={styles.float_right}>
              <Button variant="contained" className={styles.send_button_active}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({
  menuState,headerState,navState
}: StoreState): { open: MenuDataInterFace; headerOpen : HeaderDataInterFace;navOpen : NavigatorDataInterFace } => {
  return {
    open: menuState,
    headerOpen : headerState,
    navOpen : navState
  };
};

export default connect(mapStateToProps,{
  ToggleMenuACT,HeaderOpenACT,NavOpenACT
})(CustomerEntry);


