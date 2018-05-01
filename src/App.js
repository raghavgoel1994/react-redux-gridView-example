import React, { Component } from 'react';
import './App.css';
import ImagePanelComponent from './containers/ImagePanelComponent';
import { Route, BrowserRouter as Router, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ImagePanelComponent} />
        </div>
      </Router>
    );
  }
}
export default App;