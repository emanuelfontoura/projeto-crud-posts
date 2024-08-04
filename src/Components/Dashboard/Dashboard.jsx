import React from "react";
import useFetch from "../../Hooks/useFetch";
import styles from './Dashboard.module.css'

const Dashboard = () => {
    const { data, error, request } = useFetch()

    // React.useEffect(async () => {
    //     await request('URL', options)
    // }, [])

    return <section className={styles.container}>
        <div className={styles.total}>Total posts: </div>
        <h1 className={styles.allTitle}>All your posts</h1>
        {/* <div className={styles.postsContainer}>
            {posts.map(post => {
                return <div className={styles.post}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            })}
        </div> */}
    </section>
}

export default Dashboard