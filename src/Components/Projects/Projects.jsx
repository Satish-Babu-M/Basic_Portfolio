import React from 'react'
import styles from "./ProjectsStyles.module.css"
import Covid19 from "../../assets/predicting-covid-19-deat.webp"
import JobPortal from "../../assets/Job-Portal.webp"
import ML from "../../assets/ML.jpg"
import Bus from "../../assets/Bus-booking-portal.png"
import ProjectCard from '../../common/ProjectCard.jsx'

function Projects() {
  return (
    <section id = "projects" className ={styles.container}>
        <h1 className = "sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={Covid19} 
            link="https://github.com/Satish-Babu-M/Covid-19-Death-Prediction-using-ML"
             title="Covid - 19 Death Prediction" 
             description="Using Machine Learning"/>

             <ProjectCard 
             src={JobPortal} 
             link="https://github.com/Satish-Babu-M/Job-Portal"
             title="Job Portal"
             description="Enhancing job search"/>

            <ProjectCard 
            src={ML} 
             link="https://github.com/Satish-Babu-M/Distributed-ML-in-Heterogeneous-Environments"
             title="Empowering Edge Systems"
             description="Distributed ML in Heterogeneous Systems"/>

            <ProjectCard 
            src={Bus} 
             link="https://github.com/Satish-Babu-M/Online-Bus-Booking-Portal"
             title="Bookings.com"
             description="Online Bus Booking Portal"/>

             
        </div>
    </section>
  )
}

export default Projects