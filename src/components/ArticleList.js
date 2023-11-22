import React from "react"

function ArticleList({posts}){
    return(
        <main>
           {posts.map((post)=>(
            <li key ={post.id}>{post.title}</li>
           ))}
        </main>
    )
}
export default ArticleList