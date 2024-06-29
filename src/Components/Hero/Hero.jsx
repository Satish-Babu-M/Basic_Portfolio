import styles from "./HeroStyles.module.css";
import profileLight from "../../assets/Profile_Light.png";
import profileDark from "../../assets/Profile_Dark.png";
import linkedInLight from "../../assets/icons8-linked-in.svg"
import linkedInDark from "../../assets/icons8-linkedin.svg"
import gitLight from "../../assets/icons8-git.svg"
import gitDark from "../../assets/icons8-github.svg"
import Resume from "../../assets/Resume.pdf"
import {useTheme} from "../../common/ThemeContext"

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const linkedInIcon = (theme === 'light' ? linkedInLight : linkedInDark);
    const gitIcon = (theme === 'light' ? gitLight : gitDark);
    const myImg = (theme === 'light' ? profileLight : profileDark);
    

  return (
    <section id ="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero}
             src={myImg} alt="Profile Picture of Satish"
               /> 
            </div>
        <div className= {styles.info}>
            <h1 className= "section-Title">Satish Babu <br /> Malempati</h1>
            <h2>Full Stack Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/satish-babu-m/" target="_blank">
                    <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/Satish-Babu-M" target="_blank">
                    <img src={gitIcon} alt="GitHub Icon" />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modren React web apps for<br/> 
                Commercial Businesses.</p>
            <a href={Resume} download>
                <button className={styles.hover} >Resume</button>
            </a>
        </div>
         </section>
  )
}

export default Hero 