import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      Posts: []
    };
  }
  componentDidMount() {
    fetch("http://www.creatiwa.it/wp-json/wp/v2/posts")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server don't load !");
        }
      })
      .then(responseData => {
        this.setState({ Posts: responseData });
      });
  }
  render() {
    const PostsStyle = {
      background: "rgb(243, 154, 148)",
      margin: "0 auto",
      width: "50%",
      padding: 10,
      boxShadow: "10px 10px 5px #888888"
    };
    const listStyle = {
      listStyle: "none",
      padding: 10
    };
    let posts = this.state.Posts.map(post =>
      <li key={post.id} style={listStyle}>
        <h3>
          -{" "}
          <a
            href={post.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            {post.title.rendered}
          </a>
        </h3>
        <p>
          {post.excerpt.rendered}
        </p>
        <span style={{ color: "#777777" }}>
          Scritto alle: {post.date}
        </span>
      </li>
    );
    return (
      <div className="Post" style={PostsStyle}>
        <h1 style={{ textAlign: "center" }}>Last News</h1>
        <ul>
          {posts}
        </ul>
      </div>
    );
  }
}

export default Posts;
