import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function StagesOfDevelopment() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <h2>Stages of your business solution development</h2>
      <h4>Here is how we develop your project: from idea validation to futher maintenance and support</h4><br />
      <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={1}>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <div style={{ width: "100%", padding: "5px", margin: "5px", backgroundColor: "white" }}>
              <h3>Stage 1</h3>
              <h4 style={{ color: "green", fontWeight: "bold" }}>Concept development</h4>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Business analysis
                </li>
                <li style={{ textAlign: "left" }}>
                  Wireframes & Prototyping
                </li >
                <li style={{ textAlign: "left" }}>
                  Project estimation
                </li>
              </ul>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <div style={{ width: "100%", padding: "5px", margin: "5px" }}>
              <h3>Stage 2</h3>
              <h4 style={{ color: "green", fontWeight: "bold" }}>UX/UI development</h4>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Brand identity
                </li>
                <li style={{ textAlign: "left" }}>
                  UI design
                </li >
                <li style={{ textAlign: "left" }}>
                  UX design
                </li>
              </ul>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <div style={{ width: "100%",  padding: "5px", margin: "5px" }}>
              <h3>Stage 3</h3>
              <h4 style={{ color: "green", fontWeight: "bold" }}>Web, mobile app development</h4>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Product roadmap development
                </li>
                <li style={{ textAlign: "left" }}>
                  Project architecture development
                </li >
                <li style={{ textAlign: "left" }}>
                  Web, mobile app development itself
                </li>
              </ul>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <div style={{ width: "100%", padding: "5px", margin: "5px" }}>
              <h3>Stage 4</h3>
              <h4 style={{ color: "green", fontWeight: "bold" }}>Quality assistance</h4>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Quality assistance and consulting
                </li>
                <li style={{ textAlign: "left" }}>
                  Software testing life cycle
                </li >
                <li style={{ textAlign: "left" }}>
                  Manual and automated testing
                </li>
              </ul>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <div style={{ width: "100%", padding: "5px", margin: "5px" }}>
              <h3>Stage 5</h3>
              <h4 style={{ color: "green", fontWeight: "bold" }}>Business platform support</h4>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Web, mobile application support and further product maintenance
                </li>
              </ul>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={1}>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
