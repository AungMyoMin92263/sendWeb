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
import { NavLink, Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonIcon from "@mui/icons-material/Person";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FileUploadIcon from '@mui/icons-material/FileUpload';
//css
import styles from '../css/OnBoarding.module.css';

const green = {
    color: "rgba(52, 168, 83, 1)"
}
const OnBoardingAtom5 = () => {
    const [values, setValues] = React.useState({
        idType: "NRIC",
        NRIC_front: "IMG_9774.jpg",
        NRIC_back: "IMG_9775.jpg",
    })

    const inputStyle = {
        background: "rgba(132, 73, 2, 0.08)",
        width: "315px",
        margin: "8px",
        padding: "8px",
        marginBottom: "16px",
    };

    const inputSmallStyle = {
        background: "rgba(132, 73, 2, 0.08)",
        width: "90px",
        padding: "4px",
    };

    const [selectedFile, setSelectedFile] = React.useState();
    const [isFilePicked, setIsFilePicked] = React.useState(false);

    const changeHandlerBack = (event) => {
        console.log('event',event)
        setSelectedFile(event.target.files[0]);
        console.log('selectedFile', selectedFile)
        let temp = values;
        temp.NRIC_back = event.target.files[0].name;
        setValues(temp);
        setIsFilePicked(true);
        handleSubmission();
    };
    
    const changeHandlerFront = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        // setValues(prev => {
        // idType: prev.idType;
        // NRIC_front: event.target.files[0].name;
        // NRIC_back: prev.NRIC_back; });
        handleSubmission();
    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);

        fetch(
            'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                    Almost there, please submit your ID
                    for verification
                </Typography>
                <div className={styles.inputStyle}>
                    <FormControl
                        variant="standard"
                        sx={{ width: "calc(100% - 50px)" }}
                    >
                        <TextField className={styles.send_textfield} 
                            label="ID Type"
                            id="standard-size-normal"
                            defaultValue={values.idType}
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
                    Please upload a copy of your NRIC
                </Typography>
                <div className={styles.inputStyle}>

                    <FormControl
                        variant="standard"
                        sx={{ width: "calc(100% - 50px)" }}
                    >
                        <TextField className={styles.send_textfield} 
                            label="NRIC (Front)"
                            id="standard-size-normal"
                            defaultValue={values.NRIC_front}
                            variant="standard"
                        />
                    </FormControl>
                    <IconButton
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
                        aria-label="NRIC_front"
                    >
                        {/* <input
                            type="file"
                            onChange={changeHandlerFront}
                        /> */}
                        <FileUploadIcon />
                    </IconButton>
                </div>

                <div className={styles.inputStyle}>

                    <FormControl
                        variant="standard"
                        sx={{ width: "calc(100% - 50px)" }}
                    >
                        <TextField className={styles.send_textfield} 
                            label="NRIC (Back)"
                            id="standard-size-normal"
                            defaultValue={values.NRIC_back}
                            variant="standard"
                        />
                    </FormControl>
                    <IconButton
                        sx={{ mt: 1, mr: 1, color: "#E39435" }}
                        aria-label="NRIC_back"
                    >
                        {/* <input
                            type="file"
                            onChange={changeHandlerBack}
                        /> */}
                        <FileUploadIcon>
                        </FileUploadIcon>
                    </IconButton>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
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
                </Button>*/}
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
                    <Link to="/provider-dashboard" id="link_02">
                        Next
                    </Link>
                </Button>  */}
            </div>
        </>
    );
};

export default OnBoardingAtom5;
