import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import { Route, Switch, Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Shoping from "../../Assets/shoping_card.png";
import Registration from "../../Component/Registration/Registartion";
import Login from "../../Component/Login/Login";
import "./Content.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 228,
    borderRadius: "6px",
    position: "absolute",
    right: "335px",
    boxShadow: "0px 5px 15px #00000029",
    border: "1px solid #E4E4E4",
    padding: "19px 36px",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      right: "unset",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "-webkit-fill-available",
      height:"100%",
      padding: "60px 36px",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: "214px",
    width: "236px",
    borderRadius: "105px",
  },
  mediaCard: {
    minWidth: 275,
    padding: "19px",
    borderRadius: "21px",
    position: "relative",
    right: "115px",
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    padding: "0px",
  },

  shopingFooter: {
    font: "15px",
    color: "#0A0102",
    textTransform: "uppercase",
  },
  shopingBottom: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

export default function Content() {
  const classes = useStyles();
  return (
    <div className="mainContent">
      <Card className={classes.mediaCard}>
        <CardMedia
          className={classes.media}
          image={Shoping}
          title="Contemplative Reptile"
        />
        <CardActions className={classes.shopingBottom}>
          <div className={classes.shopingFooter}>Online Book Shopping</div>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <div className="buttonSection">
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/registartion">SignUp</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/registartion" component={Registration} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </CardContent>
      </Card>
    </div>
  );
}
