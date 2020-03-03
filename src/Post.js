// postTitle
// author
// content: should render one or more paragraphs of content
// comments: should render one or more comments
import React, {Component} from "react";

let elems = {
  title: "Dino Blog Post Title",
  author: "David Blaine",
  content: "I am writing a post about a dino.  Someone's in the kitchen with dino.  Someone's in the kitchen, I knoowww.",
  comments: "I have heard about dino!"
}

class Post extends Component {
  render () {
    return (
      <div className="App">
        <h1>{elems.title}</h1>
        <h5>by: {elems.author}</h5>
        <p>{elems.content}</p>
        <h3>Comments:</h3>
        <p>{elems.comments}</p>
      </div>
    )
  }
}

export default Post;