import * as React from 'react';
import './App.css';
import Index from './blog/Index';

// Set up Material-UI
import { MuiThemeProvider } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import AppBar from 'material-ui/AppBar';

import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
}});

import Grid from 'material-ui/Grid/Grid';
import Paper from 'material-ui/Paper';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar className="appbar" position="static">
            <h1>React Challenge Blog</h1>
          </AppBar>

          <Grid container={true} spacing={24} justify="center">
            <Grid item={true} xs={10}>
              <Paper className="content">
                <Index />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
