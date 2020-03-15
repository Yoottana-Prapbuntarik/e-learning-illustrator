import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './css/styles.css';
import Home from './Pages/Home';
import About from './Pages/About';
import TutorialVideo from './Pages/TutorialVideo';
import TutorialVideoDetail from './Pages/TutorialVideoDetail';
import Quiz from './Pages/Quiz';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Tutorial" component={TutorialVideo} />
            <Route path="/TutorialVideoDetail/:id" component={TutorialVideoDetail} />
            <Route path="/Quiz" component={Quiz} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
} export default App;
