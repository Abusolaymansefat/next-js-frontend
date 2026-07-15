import React from 'react'

const MyServerComponent = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postData = await posts.json();
    console.log(postData)
    return (
        <div>
            <h1>My Server Component</h1>
        </div>
    )
}

export default MyServerComponent