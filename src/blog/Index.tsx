import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    RouteComponentProps
  } from 'react-router-dom';

import Menu from './Menu';
import Blog from './Blog';
import List from './List';
import ViewBlog from './ViewBlog';
import AddNewBlog from './AddNewBlog';

import blogs from './static_content';

/**
 * Component that is responsible for showing a list of blog posts, and allowing adding a new one
 */
class Index extends React.Component {
  state: {blogs: Blog[]};

  constructor() {
    super();
    this.state = {blogs: blogs}; // Blog posts come from a static source
  }

  /**
   * Remove blogpost from a specific index
   */
  deleteBlog(index: number) {
    if (confirm('Weet u zeker dat u dit blogpost wil verwijderen?')) {
      this.state.blogs.splice(index, 1);
      this.setState({blogs: this.state.blogs});
    }
  }

  /**
   * Add a blog post
   */
  addBlog(blog: Blog) {
    this.state.blogs.push(blog);
    this.setState({blogs: this.state.blogs});
  }

  render() {
    const self = this;
    return (
      <Router>
        <div>
          <Menu />

          <Route
            exact={true}
            path="/"
            component={() => (<List blogs={this.state.blogs} deleteHandler={this.deleteBlog.bind(this)}/>)}
          />
          <Route exact={true} path="/add" component={() => (<AddNewBlog addBlogHandler={this.addBlog.bind(this)}/>)}/>
          <Route
            path="/blog/:blogId"
            component={(props: RouteComponentProps<{blogId: number}>) => {
              const blogId = +props.match.params.blogId;
              const blog = self.state.blogs.filter(b => b.id === blogId)[0];
              return (<ViewBlog blog={blog}/>);
            }}
          />
        </div>
      </Router>
    );
  }
}

export default Index;
