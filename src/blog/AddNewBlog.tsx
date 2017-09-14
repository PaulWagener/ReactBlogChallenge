import * as React from 'react';
import './AddNewBlog.css';
import Blog from './Blog';

interface AddNewBlogState {
  title: string;
  content: string;
  tags: string;
}

interface AddNewBlogProps {
  addBlogHandler: (blog: Blog) => void;
}

class AddNewBlog extends React.Component<AddNewBlogProps, AddNewBlogState> {

  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      tags: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.currentTarget.name;

    const data = {};
    data[name] = event.currentTarget.value;
    this.setState(data);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    let blog = new Blog();
    blog.id = Math.round(Math.random() * 100000);
    blog.title = this.state.title;
    blog.content = this.state.content;
    blog.tags = this.state.tags.split(' ');
    blog.posted = new Date();
    this.props.addBlogHandler(blog);

    this.setState({
      title: '',
      content: '',
      tags: ''
    });
    alert('Blog is toegevoegd!');
  }

  render() {
    return (
      <div className="add">
        <form onSubmit={this.handleSubmit} ref="form">
          <div>
            <label>Titel:</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} ref="title"/>
          </div>

          <div>
            <label>Content:</label>
            <textarea name="content" value={this.state.content} onChange={this.handleInputChange} ref="content"/>
          </div>

          <div>
            <label>Tags:</label>
            <input
              name="tags"
              placeholder="tv media foo"
              value={this.state.tags}
              onChange={this.handleInputChange}
              ref="tags"
            />
          </div>

          <button type="submit" ref="submit">Add blog</button>
        </form>
      </div>
    );
  }
}

export default AddNewBlog;
