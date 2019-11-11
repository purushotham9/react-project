import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        {/* <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={3}>
            <div style={{ boxShadow: "0 0 10px #E8EAE8", height: "370px", borderRadius: "5px", padding: "20px", margin: "10px", backgroundColor: "white" }}>
              <img src="desktopLogo.png" alt="web" style={{ height: "100px", }}></img>
              <h3>Web Development</h3>
              <p >From idea validation to its realese develop your custom web application with the latest technologies.</p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{ boxShadow: "0 0 10px #E8EAE8", height: "370px", borderRadius: "5px", padding: "20px", margin: "10px" }}>
              <img src="mobileLogo.png" alt="mobile"  style={{ height: "100px", width: "80px" }}></img>
              <h3>Mobile Development</h3>
              <p >Make your product accessible on-the-go with iOS and Android mobile application crafted especially for your niche. </p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{ boxShadow: "0 0 10px #E8EAE8", height: "370px", borderRadius: "5px", padding: "20px", margin: "10px" }}>
              <img src="qa.png" alt="qa" style={{ height: "100px", width: "80px" }}></img>
              <h3>Quality Assurance</h3>
              <p >Create a product of exceptional quality with manual and automated testing throughout all stages of the development cycle. </p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{ boxShadow: "0 0 10px #E8EAE8", height: "370px", borderRadius: "5px", padding: "20px", margin: "10px" }}>
              <img src="uiux.jpg" alt="uiux" style={{ height: "100px", width: "140px" }}></img>
              <h3>UI/UX Design</h3>
              <p>Get an authentic brand identity, UI/UX design for your web or mobile product all in one beautiful pack </p>
            </div>
          </GridItem>
        </GridContainer> */}
        <Carousel responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["desktop", "superLargeDesktop"]}>
          <div> <div style={{ boxShadow: "0 0 10px #E8EAE8", height: "370px", borderRadius: "5px", padding: "20px", margin: "10px", backgroundColor: "white" }}>
            <img src="desktopLogo.png" alt="web" style={{ height: "100px", }}></img>
            <h3>Web Development</h3>
            <p >From idea validation to its realese develop your custom web application with the latest technologies.</p>
          </div></div>
          <div><div style={{ boxShadow: "0 0 10px #E8EAE8", height: "370px", borderRadius: "5px", padding: "20px", margin: "10px" }}>
            <img src="mobileLogo.png" alt="mobile" style={{ height: "100px", width: "80px" }}></img>
            <h3>Mobile Development</h3>
            <p >Make your product accessible on-the-go with iOS and Android mobile application crafted especially for your niche. </p>
          </div></div>
          <div><div style={{ boxShadow: "0 0 10px #E8EAE8", height: "370px", borderRadius: "5px", padding: "20px", margin: "10px" }}>
            <img src="qa.png" alt="qa" style={{ height: "100px", width: "80px" }}></img>
            <h3>Quality Assurance</h3>
            <p >Create a product of exceptional quality with manual and automated testing throughout all stages of the development cycle. </p>
          </div></div>
          <div><div style={{ boxShadow: "0 0 10px #E8EAE8", height: "370px", borderRadius: "5px", padding: "20px", margin: "10px" }}>
            <img src="uiux.jpg" alt="uiux" style={{ height: "100px", width: "140px" }}></img>
            <h3>UI/UX Design</h3>
            <p>Get an authentic brand identity, UI/UX design for your web or mobile product all in one beautiful pack </p>
          </div></div>
        </Carousel>

      </div>
    </div>
  );
}
