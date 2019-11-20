import React from "react";
// react components for routing our app without refresh
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import classNames from "classnames";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionExamples from '../Components/Sections/SectionExamples';
import StagesOfDevelopment from '../Components/Sections/StagesOfDevelopment';

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
       <Header
        brand={<Link to="/"><img src="kvanaLogo.svg" alt="kvana"></img></Link>}
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 100,
          color: "black"
        }}
        {...rest}
        style={{position: "fixed"}}
      />
      <div className={classNames(classes.main)}>
      <br /><br /><br /><br />
      <h2 className="services" style={{textAlign: "center"}}>Services</h2>
      <h4 style={{textAlign: "center"}}>Kvana provides a wide range of marketplace development services for various industries</h4>
      <SectionExamples />
      <StagesOfDevelopment />
      </div>
        <Footer />
    </div>
  );
}
