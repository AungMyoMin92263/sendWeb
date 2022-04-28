import React from "react";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import {
    TextField,
    Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

//css
import styles from '../css/OnBoarding.module.css';

const OnBoardingAtom1 = () => {
    const [values, setValues] = React.useState({
        id: "6438 1234", //mobile
        city: "Singapore",
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
                    Tell us about you
                </Typography>
                <div className={styles.inputStyle}>
                    <IconButton
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
                        aria-label="city"
                    >
                        <PersonIcon />
                    </IconButton>
                    <FormControl
                        variant="standard"
                        sx={{ width: "calc(100% - 50px)" }}
                    >
                        <TextField className={styles.send_textfield} 
                            label="City"
                            id="standard-size-normal"
                            defaultValue={values.name}
                            variant="standard"
                        />
                    </FormControl>
                </div>
                <div className={styles.inputStyle}>
                    <IconButton
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
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
                            defaultValue={values.id}
                            variant="standard"
                        />
                    </FormControl>
                </div>
                <div className={styles.inputStyle}>
                    <IconButton
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
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
                            defaultValue={values.name}
                            variant="standard"
                        />
                    </FormControl>
                </div>
                <div className={styles.inputStyle}>
                    <IconButton
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
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
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
                        aria-label="password"
                    >
                        <LockIcon />
                    </IconButton>
                    <FormControl
                        variant="standard"
                        sx={{ width: "calc(100% - 50px)" }}
                    >
                        <InputLabel htmlFor="standard-adornment-password">
                            Password
                        </InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange("password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                {/* <Button
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

export default OnBoardingAtom1;
