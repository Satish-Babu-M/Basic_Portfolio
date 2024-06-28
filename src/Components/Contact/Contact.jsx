import React from 'react'
import styles from "./ContactStyles.module.css"

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <div className={styles.ring}>
            <i className="clr-green"></i>
            <i className="clr-red"></i>
            <i className="clr-yellow"></i>
            <div className={styles.login}>
            <h1 className='sectionTitle'>Contact</h1>
            <form action="https://formspree.io/f/xdknndbq" method='POST'>
                <div className={styles.inputBx}>
                <input type="text" placeholder="Name" name="Name" required/>
                </div>
                <div class={styles.inputBx}>
                <input type="email" placeholder="Email" name="Email" required/>
                </div>
                <div class={styles.inputBx}>
                <input type="text" placeholder="Message" name="Message" required/>
                </div>
                <button className={styles.hover} type="submit">Submit</button>
            </form>
                
            </div>
        </div>
    </section> 
  )
}

export default Contact