import React from "react";
import styles from './Input.module.css'

const Input = ({type, id, label, value, onChange, error}) => {
    return <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <input className={styles.input} type={type} value={value} onChange={onChange} id={id}/>
        {error && <p className={styles.error}>{error}</p>}
    </div>
}

export default Input