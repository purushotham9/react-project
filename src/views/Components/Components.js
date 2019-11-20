import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div >
      <Header
        brand={<img src="kvanaLogo.svg" alt="kvana"></img>}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
        style={{position: "fixed"}}
      />
      <Parallax image={require("assets/img/landing.png")}>
      </Parallax>
      <div className={classNames(classes.main)}>
        <br />
        <h2 style={{textAlign: "center"}}>Our Services</h2>
        <SectionExamples />
        <SectionDownload />
        <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">

          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.textCenter} justify="center">
              <GridItem xs={12} sm={12} md={4}><br /><br />
                <h3 style={{ textAlign: "left" }}>About Us</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
              <h4 style={{textAlign: "left"}}>We are part of Facebook's FBStart program and IBM's Global Entreprenuer program
            At Kvana, we are a collective of designers, developers, and digital strategists, our philosophy for delivering fresh is integrating everywhere, in our teams, workspaces, process, and deliverables. Together with our clients, we create innovative combinations.</h4><br /><br />
                <GridContainer className={classes.textCenter} justify="center">
                </GridContainer>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
