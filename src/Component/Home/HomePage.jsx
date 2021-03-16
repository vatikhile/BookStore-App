import React from 'react'; 
import { makeStyles } from "@material-ui/core/styles";

import Logo from "../../Assets/education.svg";
// import IconButton from '@material-ui/core/IconButton';
import InputBase from "@material-ui/core/InputBase";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import DisplayNotes from "../../Component/DisplayBooks/DisplayBooks"
// import Button from '@material-ui/core/Button';
import "./HomePage.css";

export default function Home() {
  // const classes = useStyles();
  return (
    <div className="mainDiv">
      <div className="topnav">
        <div className="block">
          <div >
            <img src={Logo} alt="FundooImg" />
            <div className="title">BookStore</div>
            <InputBase name="Search" placeholder="Search" className="input" />
          </div>
          <div className="rightIcons">
            {/* <IconButton> */}
            <div>
            <ShoppingCartOutlinedIcon/>
         
            </div>
            <div>
            <PersonOutlineOutlinedIcon />
            </div>
            {/* </IconButton> */}
          </div>
        
        </div>
      </div>

      
      {/* <div className="menubar">
        <div className="Menublock">
          <div >
           Books
          </div>
          <div className="rightIconsmenu">
            <div>
           Sort Items
           </div>
          </div>
        
        </div>
      </div> */}
      <div className="menubar">
        <div className="Menublock">
          <div >
           <DisplayNotes/>
          </div>
       
        
        </div>
      </div>
   
    </div>
  );
}
