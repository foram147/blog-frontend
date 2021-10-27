import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = {
    blogPosts: [],
  };
  async fetchBlogPosts() {
    let response = await fetch(
      `${process.env.REACT_APP_BE_PROD_URL}/blogPosts`
    );
    if (response.ok) {
      let blogPosts = await response.json();
      this.setState({ blogPosts });
    }
  }
  componentDidMount() {
    this.fetchBlogPosts();
  }
  render() {
    return (
      <Row>
        {this.state.blogPosts.map((post) => (
          <>
            {console.log(post)}
            <Col md={4} style={{ marginBottom: 50 }}>
              <BlogItem key={post.title} {...post} />
            </Col>
          </>
        ))}
      </Row>
    );
  }
}
