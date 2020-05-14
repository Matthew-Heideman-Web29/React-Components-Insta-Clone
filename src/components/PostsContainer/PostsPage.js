//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data.js";

const PostsPage = (props) => {
  // set up state for your data
  const search = props.search;
  const [posts, setPosts] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {search.length === 0
        ? posts.map((post, i) => {
            return <Post key={i} post={post} />;
          })
        : posts.map((post, i) => {
          if(post.username.includes(search)){
            return <Post key={i} post={post} />;
          }
          })}
    </div>
  );
};

export default PostsPage;
