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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//css
import styles from '../css/OnBoarding.module.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const OnBoardingAtom4 = () => {

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
                    Please read the Terms & Conditions
                </Typography>
                <div className={styles.send_terms_box}>
                <Typography className={styles.send_typography}
                    variant="body1"
                    p={1}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="left"
                >
                    Introduction
                </Typography>
                <Typography className={styles.send_typography}
                    variant="body2"
                    p={1}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="left"
                >
                    These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.
                </Typography>
                <Typography className={styles.send_typography}
                    variant="body2"
                    p={1}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="left"
                >
                                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

                </Typography>

                <Typography className={styles.send_typography}
                    variant="body2"
                    p={1}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="left"
                >
                    Minors or people below 18 years old are not allowed to use this Website.
                </Typography>

                <Typography className={styles.send_typography}
                    variant="body1"
                    p={1}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="left"
                >
                    Intellectual Property Rights
                </Typography>
                <Typography className={styles.send_typography}
                    variant="body2"
                    p={1}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="left"
                >
                    Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.
                </Typography>
                </div>
                <div className={styles.m_15}>
                <Checkbox {...label} defaultChecked />
                <span> I read and agreed to the Terms & Conditions</span>
                </div>

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

export default OnBoardingAtom4;
