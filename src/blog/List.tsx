import * as React from 'react';
import Blog from './Blog';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

/**
 * Show a list of blog postings
 */
class List extends React.Component {
  props: {
    blogs: Blog[]
    deleteHandler: (index: number) => void
  };

  render() {
    return (
      <Paper className="bloglist">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Post date</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.blogs.map((blog, i) => {
              return (
                <TableRow key={blog.title}>
                  <TableCell><Link to={'/blog/' + blog.id}>{blog.title}</Link></TableCell>
                  <TableCell>{blog.posted.toDateString()}</TableCell>
                  <TableCell>
                    <div className="tag-container">
                      {blog.tags.map((tag, j) => (
                        <Chip label={tag} key={j}/>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button raised={true} color="primary" onClick={() => this.props.deleteHandler(i)}>Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
    }
  }

export default List;
