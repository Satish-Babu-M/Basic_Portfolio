import React from 'react'
import styles from "../Skills/SkillsStyles.module.css"
import MarkDark from "../../assets/icons8-done.svg"
import MarkLight from "../../assets/icons8-checkmark.svg"
import {useTheme} from "../../common/ThemeContext"
import SkillList from '../../common/SkillList'

function Skills() {
    const {theme, toggleTheme} = useTheme();
    const CheckMark = theme === 'light' ? MarkLight : MarkDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={CheckMark} skill="Python"/>
            <SkillList src={CheckMark} skill="Java"/>
            <SkillList src={CheckMark} skill="C"/>
            <SkillList src={CheckMark} skill="JavaScript"/>
            <SkillList src={CheckMark} skill="TypeScript"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={CheckMark} skill="HTML"/>
            <SkillList src={CheckMark} skill="CSS"/>
            <SkillList src={CheckMark} skill="Tailwind CSS"/>
            <SkillList src={CheckMark} skill="MUI"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={CheckMark} skill="React"/>
            <SkillList src={CheckMark} skill="Next JS"/>
            <SkillList src={CheckMark} skill="Redux"/>
            <SkillList src={CheckMark} skill="Recoil"/>
            
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={CheckMark} skill="Node JS"/>
            <SkillList src={CheckMark} skill="Express JS"/>
            <SkillList src={CheckMark} skill="Mongo DB"/>
            <SkillList src={CheckMark} skill="My SQL"/>
        </div>
    </section>
  )
}

export default Skills