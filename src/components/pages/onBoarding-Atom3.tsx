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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//css
import styles from '../css/OnBoarding.module.css';

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

const OnBoardingAtom3 = () => {
    const [values, setValues] = React.useState({
        id: "6438 1234", //mobile
        name: "Simon Sia",
        email: "simonsia@send.com",
        password: "yuzana",
        showPassword: false,
    });

    const handleChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const inputStyle = {
        background: "rgba(132, 73, 2, 0.08)",
        width: "315px",
        margin: "8px",
        padding: "8px",
        marginBottom: "16px",
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
                    What kind of services you can provide?
                    (Multiple selection available)
                </Typography>

                <>
                    {typeMenu.map((menu: any) => (
                        <>

                            <div className={styles.send_check_block}>
                                    <img className={styles.menuImageStyle} src={require(`../../assets/icons/${menu.image}`)} />
                                    <Typography className={styles.send_typography} variant="subtitle2" component="div" sx={{ mt : 2}}>
                                        {menu.label}
                                    </Typography>
                            </div>
                        </>

                    ))}
                </>

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
                    <ArrowBackIosIcon sx={{ width: '18px' }} />
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

export default OnBoardingAtom3;
