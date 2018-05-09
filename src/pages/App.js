import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import { Home, PageOne, PageTwo } from './';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pageone" component={PageOne} />
        <Route exact path="/pagetwo" component={PageTwo} />
      </Switch>
    );
  }
}

export default App;
