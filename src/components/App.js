import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import Article from "./Article";
import ArticleList from "./ArticleList";
import About from "./About";
console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      
      <Header name={blogData.name} />
      <ArticleList posts={blogData.posts} key={blogData.posts} id={blogData.posts} title={blogData.posts} date={blogData.posts} preview={blogData.posts} />
      <About about={blogData.about} image={blogData.image} key={blogData.image} id={blogData.image} name={blogData.name}  />
      <Article post={blogData.posts[0]} key={blogData.posts[0].id} id={blogData.posts[0].id} title={blogData.posts[0].title}
       date ={blogData.posts[0].date} preview={blogData.posts[0].preview}/>
      <Article post={blogData.posts[1]} key={blogData.posts[1].id} id={blogData.posts[1].id} title={blogData.posts[1].title}
        date={blogData.posts[1].date} preview={blogData.posts[1].preview} />
      <Article post={blogData.posts[2]} key={blogData.posts[2].id} id={blogData.posts[2].id} title={blogData.posts[2].title}
      date={blogData.posts[2].date} preview={blogData.posts[2].preview} />

    </div>
   
  );
}

export default App;
