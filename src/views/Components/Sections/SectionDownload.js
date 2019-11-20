import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.textCenter} justify="center">
              <GridItem xs={12} sm={12} md={4}><br /><br /><br /><br /><br /><br />
                <h3 style={{ textAlign: "left" }}>Technologies we are passionate about</h3>              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <GridContainer className={classes.textCenter} justify="center">
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="react.png" alt="react" style={{ height: "70px", width: "150px", marginTop: "19px" }}></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="react-native.png" alt="react-native" style={{ height: "110px", width: "150px" }}></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="angular.png" alt="angular" style={{ height: "100px", width: "150px", marginTop: "10px" }}></img>
                  </GridItem>
                </GridContainer><br />
                <GridContainer className={classes.textCenter} justify="center">
                <GridItem xs={12} sm={6} md={4}>
                    <img src="ios.jpeg" alt="react" style={{ height: "70px", width: "150px", marginTop: "19px" }}></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="android.jpg" alt="react-native" style={{ height: "110px", width: "150px" }}></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="nodejs.png" alt="npdejs" style={{ height: "100px", width: "150px" }}></img>
                  </GridItem>
                </GridContainer><br />
                <GridContainer className={classes.textCenter} justify="center">
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="amazonws.png" alt="amazonws" style={{ height: "70px", width: "150px", margin: "20px" }}></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="rubyonrails.png" alt="rubyonrails" style={{ height: "70px", width: "150px", margin: "20px" }}></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="graphQL.png" alt="graphQL" style={{ height: "100px", width: "150px", margin: "20px" }}></img>
                  </GridItem>
                  
                </GridContainer>
              </GridItem>

            </GridContainer>
          </GridItem>
        </GridContainer><br /><br /><br />
        <GridContainer className={classes.textCenter} justify="center">

          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.textCenter} justify="center">
              <GridItem xs={12} sm={12} md={4}><br />
                <h3 style={{ textAlign: "left" }}>Greate Companies love working with us</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}><br />
                <GridContainer className={classes.textCenter} justify="center">
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="adobeLogo.png" alt="adobe" style={{ height: "60px", width: "200px", margin: "20px" }}></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="AdobeExperienceMgr.png" alt="aemm" style={{ height: "110px", width: "200px", margin: "5px 5px 5px 20px" }}></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <img src="dpsc.jpg" alt="dpsc" style={{ height: "80px", width: "80px", margin: "20px" }}></img>
                  </GridItem>
                </GridContainer><br />
                <GridContainer className={classes.textCenter} justify="center">
                </GridContainer>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
