import React from "react";
import styles from './Input.module.css'

const Input = ({type, id, label, error, ...props}) => {
    return <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <input className={styles.input} type={type} id={id} {...props}/>
        {error && <p className={styles.error}>{error}</p>}
    </div>
}

export default Input