import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../../Service/userService/userService";
import "./Registration.css";
const useStyles = makeStyles({
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

export default function Registration() {
  const classes = useStyles();
  const services = new Services();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    Password: "",
    mobile: "",
  });

  const [isNameError, setNameError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);
  const [isMobileError, setMobileError] = useState(false);
  // const [isValid, setValid] = useState(false);
  const validate = () => {
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setMobileError(false);
    let isValid = false;

    let regName = /^[A-Z]{1}[a-z]{2,}$/;
    var regEmail = /^[A-Za-z0-9]+([._+-][0-9a-zA-Z]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?/;
    let regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let mobilePattern = /^[6-9]{1}[0-9]{9}$/;

    if (!regName.test(info.name)) {
      console.log("name");
      setNameError(true);
      isValid = true;
    }

    if (!regEmail.test(info.email)) {
      console.log("name1");
      setEmailError(true);
      isValid = true;
    }
    if (!regPassword.test(info.Password)) {
      console.log("name2");
      setPasswordError(true);
      isValid = true;
    }
    if (!mobilePattern.test(info.mobile)) {
      console.log("name3");
      setMobileError(true);
      isValid = true;
    }

    return isValid;
  };

  const handleClick = (e) => {
    console.log("APItrue11");
    e.preventDefault();
    if (!validate()) {
      const data = {
        fullName: info.name,
        email: info.email,
        password: info.Password,
        phone: info.mobile,
      };
      console.log("data", data);
      services
        .userRegister(data)
        .then((data) => {
          console.log("registration successful", data);
          //   props.history.push("/login");
        })
        .catch((err) => {
          console.log("Registration Error" + err);
        });
    }
    console.log("APItrue1122");
  };
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };
  return (
    <div>
      <div className="fields">
        <InputLabel shrink>Full Name</InputLabel>{" "}
        <InputBase
          className={isNameError ? "errorInput" : "Input"}
          name="name"
          onChange={handleChanges}
        />
        <InputLabel shrink>Email Id</InputLabel>{" "}
        <InputBase
          name="email"
          className={classes.input}
          className={isEmailError ? "errorInput" : "Input"}
          onChange={handleChanges}
        />
        <InputLabel shrink>password</InputLabel>{" "}
        <InputBase
          name="Password"
          type="password"
          className={classes.input}
          className={isPasswordError ? "errorInput" : "Input"}
          onChange={handleChanges}
        />
        <InputLabel shrink>Mobile Number</InputLabel>{" "}
        <InputBase
          name="mobile"
          className={classes.input}
          className={isMobileError ? "errorInput" : "Input"}
          onChange={handleChanges}
        />
      </div>
      <CardActions className={classes.buttonContent}>
        <Button className={classes.buttonAction} onClick={handleClick}>
          Signup
        </Button>
      </CardActions>
    </div>
  );
}
