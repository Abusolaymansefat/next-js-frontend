import React from 'react'

const AuthorsPage = async () => {

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  const postData = await posts.json();
  console.log(postData)
  return (
    <div>
      <h1>authors page here </h1>
    </div>
  )
}

export default AuthorsPage
