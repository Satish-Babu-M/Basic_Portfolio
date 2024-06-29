import React from 'react'
import sun from "../../assets/icons8-sun.svg"
import moon from "../../assets/icons8-moon-30.png"
import {useTheme} from "../../common/ThemeContext"
import styles from "./AppBarStyles.module.css"

function AppBar() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = (theme === 'light' ? sun : moon);

  const scrollToSection = (id) =>{
    const element = document.getElementById(id);
    if(element){
        element.scrollIntoView({behavior: "smooth"});
    }
};
  return (
    <div  >
              <nav className={styles.navigation}>
                <ul >
                  <li >
                    <a href="#" onClick={()=> scrollToSection("home")} >Home</a>
                  </li>
                  <li >
                    <a href="#" onClick={()=> scrollToSection("projects")} >Projects</a>
                  </li>
                  <li >
                    <a href="#" onClick={()=> scrollToSection("skills")} >Skills</a>
                  </li>
                  <li> 
                    <a href="#" onClick={()=> scrollToSection("contact")} >Contact</a>
                  </li>
                  <li>
                  <img className={styles.colorMode}
                  src={themeIcon} 
                  alt="Color theme"
                  onClick ={toggleTheme}
                  />
                  </li>
                  
                </ul>
            
              </nav>
        
    </div>
  )
}

export default AppBar