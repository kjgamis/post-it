import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import Create from './components/posts/CreatePost'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import PostDetails from './components/posts/PostDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/dashboard' render={() => (<Redirect exact to="/"/>)}/>
            <Route path='/create' component={Create} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />

            <Route path='/details/:id' component={PostDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
