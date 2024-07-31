import React from "react";
import { useFetch } from '../../Hooks/useFetch.jsx'

const Feed = () => {
    const { data, error, request } = useFetch()

    React.useEffect(async () => {
        await request('URL')
    }, [])

    if(error) return <p>{error}</p>
    return <section>
        {data.map(post => {
            return <div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </div>
        })}
    </section>
}

export default Feed