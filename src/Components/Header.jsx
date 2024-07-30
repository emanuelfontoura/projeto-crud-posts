import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.headerContainer}>
            <a href="/" className={styles.headerLogo}>Logo</a>
            <nav className={styles.headerNav}>
                <ul>
                    <li><a href="/">Posts</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header