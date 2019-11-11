import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Button
          href="/services"
          color="transparent">
           Servcices
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
        href="/contact-us"
        color="transparent">
        Contact Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        
      </ListItem>
      <ListItem className={classes.listItem}>
       
      </ListItem>
    </List>
  );
}
