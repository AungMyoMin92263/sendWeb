import React from "react";
import styles from '../css/OnBoarding.module.css';
import {
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import OnBoardingIcon from './../../assets/icons/onboarding.png';
import Logo from './../../assets/icons/logo.png';

import OnBoardingAtom1 from './onBoarding-Atom1';
import OnBoardingAtom2 from './onBoarding-Atom2';
import OnBoardingAtom3 from './onBoarding-Atom3';
import OnBoardingAtom4 from './onBoarding-Atom4';
import OnBoardingAtom5 from './onBoarding-Atom5';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//layout
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { ToggleMenuACT } from '../actions/menuAction';
import { HeaderOpenACT } from '../actions/HeaderAction';
import { NavOpenACT } from '../actions/NavigatorAction';

const OnBoardingPage = (props: any) => {
  if (!props.open.open) props.ToggleMenuACT(true);
  if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);
  if (props.navOpen.navOpen) props.NavOpenACT(false);

  const [selectedPageIndex, setSelectedPageIndex] = React.useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const displayPage = () => {
    switch (selectedPageIndex) {
      case 0: {
        return <div><OnBoardingAtom1></OnBoardingAtom1></div>
      }
      case 1: {
        return <div><OnBoardingAtom2></OnBoardingAtom2></div>
      }
      case 2: {
        return <div><OnBoardingAtom3></OnBoardingAtom3></div>

      }
      case 3: {
        return <div><OnBoardingAtom4></OnBoardingAtom4></div>
      }
      case 4: {
        return <div><OnBoardingAtom5></OnBoardingAtom5></div>
      }
    }
  }
  const clickedImageNext = (index: number) => {
    setSelectedImageIndex(index);
  }

  const clickedPageNext = (index: number) => {
    setSelectedPageIndex(index);
  }

  const BackButton = () => {
    if (selectedPageIndex == 1 || selectedPageIndex == 2 || selectedPageIndex == 3 || selectedPageIndex == 4) {
      return <Button
        className={styles.send_onboarding_back_button}
        onClick={() => clickedPageNext(selectedPageIndex - 1)}>
        <ArrowBackIosIcon sx={{ width: '18px' }} />
      </Button>;
    } else return <></>;
  }

  const clickedNextBtn = () => {
    if (!props.navOpen.navOpen) props.NavOpenACT(true);
  }
  const NextButton = () => {
    if (selectedPageIndex == 4) {
      return <Button
        className={styles.send_onboarding_next_button} >
        <Link to="/provider-dashboard" id="link_02" onClick={clickedNextBtn}>
          Next
        </Link>
      </Button>
    }
    else return <Button
      onClick={() => clickedPageNext(selectedPageIndex + 1)}
      className={styles.send_onboarding_next_button} >
      Next
    </Button>;
  }
  const progress_step = () => {
    switch (selectedPageIndex) {
      case 0: {
        return <div className={styles.send_progress_stepper}>

          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(0)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(1)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(2)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(3)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(4)}>
          </div>
        </div>;
      }
      case 1: {
        return <div className={styles.send_progress_stepper}>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(0)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(1)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(2)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(3)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(4)}>
          </div>
        </div>;
      }
      case 2: {
        return <div className={styles.send_progress_stepper}>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(0)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(1)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(2)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(3)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(4)}>
          </div>
        </div>;
      }
      case 3: {
        return <div className={styles.send_progress_stepper}>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(0)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(1)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(2)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(3)}>
          </div>
          <div className={styles.send_progress_step} onClick={() => clickedImageNext(4)}>
          </div>
        </div>;
      }
      case 4: {
        return <div className={styles.send_progress_stepper}>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(0)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(1)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(2)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(3)}>
          </div>
          <div className={styles.send_progress_step_selected} onClick={() => clickedImageNext(4)}>
          </div>
        </div>;
      }
    }
  }
  const step = () => {
    switch (selectedImageIndex) {
      case 0: {
        return <div className={styles.send_stepper}>

          <div className={styles.send_step_selected} onClick={() => clickedImageNext(0)}>
          </div>
          <div className={styles.send_step} onClick={() => clickedImageNext(1)}>
          </div>
          <div className={styles.send_step} onClick={() => clickedImageNext(2)}>
          </div>
        </div>;
      }
      case 1: {
        return <div className={styles.send_stepper}>
          <div className={styles.send_step} onClick={() => clickedImageNext(0)}>
          </div>
          <div className={styles.send_step_selected} onClick={() => clickedImageNext(1)}>
          </div>
          <div className={styles.send_step} onClick={() => clickedImageNext(2)}>
          </div>
        </div>;
      }
      case 2: {
        return <div className={styles.send_stepper}>
          <div className={styles.send_step} onClick={() => clickedImageNext(0)}>
          </div>
          <div className={styles.send_step} onClick={() => clickedImageNext(1)}>
          </div>
          <div className={styles.send_step_selected} onClick={() => clickedImageNext(2)}>
          </div>
        </div>;
      }
    }
  }

  return (
    <>
    <div className={styles.send_wrapper}>
      <Grid container>
        <Grid item md={6} sm={12} xs={12}>
          <div className={styles.p_15}>
            <div className={`${styles.w_100}`}>
              <img src={Logo} alt="logo" className={styles.logoStyle} />
            </div>
            <div className={`${styles.w_100} ${styles.align_center}`}>
              <img src={OnBoardingIcon} alt="Shop" className={styles.imageStyle} />
            </div>
            <Typography className={styles.send_typography_header}
              variant="subtitle1"
              p={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Become a seller
            </Typography>
            <Typography className={styles.send_typography}
              variant="subtitle2"
              p={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </Typography>
            <Typography className={styles.send_typography}
              variant="subtitle2"
              p={1}
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </Typography>
            {step()}
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div className={styles.on_boarding_right}>
            {progress_step()}
            <div className={`${styles.page_wrapper}`}>
              {displayPage()}
              {BackButton()}
              {NextButton()}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
  );
};

const mapStateToProps = ({
  menuState, headerState, navState
}: StoreState): { open: MenuDataInterFace; headerOpen: HeaderDataInterFace; navOpen: NavigatorDataInterFace } => {
  return {
    open: menuState,
    headerOpen: headerState,
    navOpen: navState
  };
};

export default connect(mapStateToProps, {
  ToggleMenuACT, HeaderOpenACT, NavOpenACT
})(OnBoardingPage);
