import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import BookSearch from './components/book-search/BookSearch';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <NavBar/>
        <BookSearch/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
