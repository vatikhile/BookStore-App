import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import UserService from "../../Service/userService/userService";
import "./Login.css";
const useStyles = makeStyles({
  input: {
    width: "100%",
    border: "1px solid #E2E2E2",
    borderRadius: "2px",
    marginBottom: "7px",
  },

  buttonAction: {
    textTransform: "capitalize",
    height: "20px",
    border: "3px",
    width: "100%",
    color: "#ffffff",
  },
  buttonContent: {
    backgroundColor: "#A03037",
    marginTop: "15px",
  },
});

export default function Login(props) {
  const classes = useStyles();
  const service = new UserService();
  const [infoLogin, setInfoLogin] = useState({
    emailId: "",
    password: "",
  });

  const [isEmailIdError, setEmailIdError] = useState(false);

  const [ispasswordError, setpasswordError] = useState(false);

  const validate = () => {
    setEmailIdError(false);
    setpasswordError(false);
    let isValid = false;

    var regEmail = /^[A-Za-z0-9]+([._+-][0-9a-zA-Z]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?/;
    let regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!regEmail.test(infoLogin.emailId)) {
      console.log("name");
      setEmailIdError(true);

      isValid = true;
    }

    if (!regPassword.test(infoLogin.password)) {
      console.log("name1");
      setpasswordError(true);

      isValid = true;
    }

    return isValid;
  };
  const handleClick = (e) => {
    console.log("APItrue11");
    e.preventDefault();
    if (!validate()) {
      let userData = {
        email: infoLogin.emailId,
        password: infoLogin.password,
      };
      service
        .login(userData)
        .then((data) => {
          console.log("dataa", data);
          localStorage.setItem("userToken", data.data.result.accessToken);
          localStorage.setItem("email", data.data.email);
          localStorage.setItem("fname", data.data.firstName);
          localStorage.setItem("lname", data.data.lastName);
          props.history.push("/Home");
        })
        .catch((Err) => {
          console.log("err", Err);
        });
    }
    console.log("APItrue1122");
  };
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setInfoLogin((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };
  return (
    <div>
      <div className="fields">
        <InputLabel shrink>Email Id</InputLabel>{" "}
        <InputBase
          className={isEmailIdError ? "errorInput" : "Input"}
          name="emailId"
          onChange={handleChanges}
        />
        <InputLabel shrink>Password</InputLabel>{" "}
        <InputBase
          type="password"
          className={ispasswordError ? "errorInput" : "Input"}
          name="password"
          onChange={handleChanges}
        />
        <div className="loginSocial">
          <Button>Facebook</Button>
          <Button>Google</Button>
        </div>
      </div>
      <CardActions className={classes.buttonContent}>
        <Button className={classes.buttonAction} onClick={handleClick}>
          Login
        </Button>
      </CardActions>
    </div>
  );
}
