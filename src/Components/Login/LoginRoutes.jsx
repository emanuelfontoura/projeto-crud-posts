import React from "react";
import { Routes, Route } from "react-router-dom";
import Head from '../Helper/Head.jsx'
import Login from './Login.jsx'
import LoginReset from './LoginReset.jsx'
import LoginLost from './LoginLost.jsx'

const Login = () => {
    return <section>
        <div>
            <Head title='Login' description='Page for login in account' />
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/lost" element={<LoginLost />}/>
                <Route path="/reset" element={<LoginReset />}/>
            </Routes>
        </div>
    </section>
}

export default Login