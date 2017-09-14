import * as React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const MenuRouter = withRouter<{}>(
  class Menu extends React.Component<RouteComponentProps<{}>, {}> {

    handleChange = (event: object, value: string) => {
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
);

export default MenuRouter;
