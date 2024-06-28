import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Coder from "../../assets/icons8-coder-16.png"
import styles from "./AppBarStyles.module.css"

function AppBar() {
  return (
    <div style={{display:"flex",justifyContent:'space-between',paddingTop:10}}>
        <div>
            <a href="" >
                <img className={styles.coder} src={Coder} alt="COder Image" />
            </a>
        </div>

        <div style={{display:'flex'}}>
            <div style={{marginRight:10}}><Button  variant="outlined" onClick={()=>{navigate("/Signup")}}>Projects</Button></div>
            <div style={{marginRight:10}}><Button  variant="outlined" onClick={()=>{navigate("/Signin")}}>Skills</Button></div>
            <div style={{marginRight:10}}><Button  variant="outlined" onClick={()=>{navigate("/Signin")}}>Contact</Button></div>
        </div>
        
    </div>
  )
}

export default AppBar