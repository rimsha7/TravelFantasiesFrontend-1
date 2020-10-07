import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import cover from "../hotelCover.jpg";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      marginTop: "50px",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    testimonials: {
      backgroundColor: "white",
      border: "ridge",
      borderBottom: "solid",
      borderColor: "white",
      borderBottomColor: "#339ba5",
      borderRadius: "10px",
      marginRight: "50px",
      marginLeft: "50px",
      marginBottom: "50px",
    },
    imgTextWrapper: {
      position: "absolute",
      top: "0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      paddingLeft: "100px",
      paddingRight: "100px",
    },
    imageWrapper: {
      verticalAlign: "top",
      display: "inlineBlock",
      textAlign: "center",
      width: "120px",
    },
    divStyle: {
      display: "block",
    },
    subtitle: {
      transition: "1s ease-in-out",
      color: "transparent",
    },
    card: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
  })
);

const Hotels = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <div style={{ marginTop: "100px" }}>
      {/* <Grid
        container
        style={{
          marginBottom: "30px",
          marginTop: "40px",
        }}
      >
        <Grid item xs={12}>
          <img src={cover} width="100%" height="50%" alt="cover" />
        </Grid>
      </Grid> */}
      <Card className={classes.card}>
        <div className={classes.con}>
          <CardContent className={classes.content}>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                className={classes.media}
                image="https://www.w3schools.com/css/img_lights.jpg"
              />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 8,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Your text
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      {/* <Sidebar> </Sidebar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1 style={{ textAlign: "center" }}> Hotels Of Pakistan </h1>

        <TextField style={{ position: "absolute", right: "0px" }}>
          {" "}
          Search Hotels{" "}
        </TextField>
        <hr></hr>

        <Grid container wrap="wrap" spacing={2}>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
        </Grid>
      </main> */}
    </div>
  );
};
export default Hotels;
