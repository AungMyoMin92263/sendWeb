import React from "react";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import {
    Button,
    Container,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonIcon from "@mui/icons-material/Person";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//css
import styles from '../css/OnBoarding.module.css';

const green = {
    color: "rgba(52, 168, 83, 1)"
}
const OnBoardingAtom2 = () => {
    const [values, setValues] = React.useState({
        shop: "Good grocery",
        postalCode: "244987",
        streetName: "Merchant Street",
        buildingName: "-",
        block: '',
        floor: '',
        unit: ''
    })

    const inputSmallStyle = {
        background: "rgba(132, 73, 2, 0.08)",
        width: "90px",
        padding: "4px",
    };

    return (
        <>
            <div>
                <Typography className={styles.send_typography_header}
                    variant="subtitle2"
                    p={1}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="left"
                >
                    What is your shop's name?
                </Typography>
                <div className={styles.inputStyle}>
                    <IconButton
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
                        aria-label="shop"
                    >
                        <AddBusinessIcon />
                    </IconButton>
                    <FormControl
                        variant="standard"
                        sx={{ width: "calc(100% - 50px)" }}
                    >
                        <TextField className={styles.send_textfield} 
                            label="Shop Name"
                            id="standard-size-normal"
                            defaultValue={values.shop}
                            variant="standard"
                        />
                    </FormControl>
                </div>
                <Typography className={styles.send_typography_header}
                    variant="subtitle2"
                    p={1}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="left"
                >
                    Where is your shop?
                </Typography>
                <div className={styles.inputStyle}>
                    <IconButton
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
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
                
                <Typography className={styles.send_typography}
                            variant="subtitle2"
                            p={1}
                            component="div"
                            sx={{ flexGrow: 1 }}
                            align="left"
                        >
                            Please adjust the pin if needed
                </Typography>
                {/* <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#A5A5A5",
                        color: "#FFF",
                        width: "30px",
                        height: "45px",
                        marginBottom: "8px",
                        float: 'left'
                    }} >
                    <ArrowBackIosIcon sx={{ width : '18px'}} />
                </Button>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#E39435",
                        color: "#FFF",
                        width: "150px",
                        height: "45px",
                        marginBottom: "8px",
                        float: 'right'
                    }} >
                    Next
                </Button> */}
            </div>
        </>
    );
};

export default OnBoardingAtom2;
