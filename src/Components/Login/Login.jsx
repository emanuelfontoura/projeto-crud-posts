import React from "react";
import useForm from '../../Hooks/useForm.jsx'
import { Link } from "react-router-dom";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import styles from './Login.module.css'

const Login = () => {
    const {valid, setValid} = React.useState(false)
    const email = useForm('email')
    const password = useForm()

    return <section className={styles.container}>
        <form action="*" method="POST" className={styles.form}>
            <Input type='email' id='email' label='Email' {...email}/>
            <Input type='password' id='password' label='Password' {...password}/>
            {!email.error && !password.error ? <Button text='Sign in'/> : <Button text='Sign in' disabled />}
        </form>
        <Link className={styles.register} to='/register'>Register</Link>
        <Link className={styles.lost} to='/login/lost'>Do you lost password? Click here to reset</Link>
    </section>
}

export default Login