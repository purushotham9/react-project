import React from "react";
import classNames from "classnames";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Form from 'react-bootstrap/Form';

import CustomInput from "components/CustomInput/CustomInput.js";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import emailjs from 'emailjs-com';


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ContactUs(props) {
  const classes = useStyles();
  const { ...rest } = props;

  // function sendEmail(e) {
  //   // console.log(e.traget)
  //   e.preventDefault();
  //   emailjs.sendForm('default_service', 'sample12346', e.target, 'user_drMK65kImcRnTLnVDxnR6')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }

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
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={1}></GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <h2>Get in touch with us</h2>
            <p>We use transparency as a tool to help our customers achieve their goals.
              So, let 's discuss how you and Kvana team can launch your business idea or reinvent your product
            </p>
            <h3>Our Branches :</h3>
            <h4 style={{ textAlign: "center" }}>USA</h4>
            <hr style={{ width: "100px" }}></hr>
            <GridContainer justify="center">
              <GridItem xs={2} sm={2} md={2}>
                <p><img src="locationLogo.png" alt="location" style={{ height: "50px", marginLeft: "auto", marginRight: "auto" }}></img></p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <br />
                <b>360 S Market Street,UNIT 1306, San Jose,CA 95113.(415) 484-5689</b></GridItem>
              <GridItem xs={2} sm={2} md={2}><br />
                <p><img src="message.png" alt="message" style={{ marginLeft: "10px" }}></img></p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <br />
                <a href="mailto:Contact@kvana.com?" style={{ color: "black" }}>Contact@kvana.com</a></GridItem>
              <GridItem xs={2} sm={2} md={2}><br />
                <p>&nbsp;&nbsp;&nbsp;<img src="phone.png" alt="phone"></img></p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <br />
                <a href="tel:(415) 484-5689" style={{ color: "black" }}>(415) 484-5689</a></GridItem>
            </GridContainer>
            <h4 style={{ textAlign: "center" }}>INDIA</h4>
            <hr style={{ width: "100px" }}></hr>
            <GridContainer justify="center">
              <GridItem xs={2} sm={2} md={2}>
                <p><img src="locationLogo.png" alt="location" style={{ height: "50px", marginLeft: "auto", marginRight: "auto" }}></img></p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <br />
                <b>#302, Harsha Homes, CBI colony, Madhapur,
                  Hyderabad-500081, India.</b></GridItem>
              <GridItem xs={2} sm={2} md={2}><br />
                <p>&nbsp;&nbsp;&nbsp;<img src="phone.png" alt="phone"></img></p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <br />
                <a href="tel:(040) 4853 3949" style={{ color: "black" }}>(040) 4853 3949</a></GridItem>
              <GridItem xs={2} sm={2} md={2}><br />
                <p>&nbsp;&nbsp;&nbsp;<img src="phone.png" alt="phone"></img></p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <br />
                <a href="tel:+919640685656" style={{ color: "black" }}>+919640685656</a></GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}><br /><br /><br />
            <div style={{ boxShadow: "0 0 10px black", height: "530px", borderRadius: "5px", padding: "20px", margin: "10px" }}><br /><br />
              <form className="contact-form">
                <CustomInput
                  labelText="Name"
                  id="first"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                type="email" 
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    name:"email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                value="subject"
                  labelText="Subject"
                  id="subject"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "text",
                  }}
                />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Your message</Form.Label>
                  <Form.Control as="textarea" rows="4" />
                </Form.Group>
                {/* <Button href="skype:purushotham.kvana@gmail.com?call" color="info" size="sm" style={{ float: "left" }}>
                Skype message
              </Button> */}
                <Button type="submit" value="Send" color="primary" size="sm" style={{ float: "right" }} >
                  Send
              </Button>
              </form>            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={1}></GridItem>
        </GridContainer>
        <br /><br /><br />
      </div>
      <Footer />
    </div>
  );
}

// sendMail() {
//   var link = "mailto:purushotham.kvana@gmail.com"
//            + "&subject=" + escape("This is my subject")
//           //  + "&body=" + escape(document.getElementById('myText').value)
//   ;

//   window.location.href = link;
// }
