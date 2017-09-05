import * as React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom';

class Menu extends React.Component {
  props: {
    history?: any
  };

  handleChange = (event: object, value: number) => {
    this.props.history.push(value);
  }

  render() {
    return (
      <nav>
        <Tabs value={this.props.history.location.pathname} onChange={this.handleChange} centered={true}>
          <Tab value="/" label="List" />
          <Tab value="/add" label="Add new blog" />
        </Tabs>
      </nav>
    );
  }
}

export default withRouter(Menu);
