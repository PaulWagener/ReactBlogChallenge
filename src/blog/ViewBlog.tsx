import * as React from 'react';
import Blog from './Blog';
import './ViewBlog.css';

/**
 * Shows all details of a single blog entry
 */
class ViewBlog extends React.Component  {
  props: {
    blog: Blog // The blog entry to present
  };

  render() {
    return (
      <article className="viewblog">
        <h2>{this.props.blog.title}</h2>
        <div className="postedDate">{this.props.blog.posted.toDateString()}</div>
        <div>{this.props.blog.content}</div>
      </article>
    );
  }
}
export default ViewBlog;