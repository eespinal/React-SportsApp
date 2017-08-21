import React  from 'react';
import NavBar from './NavBar';
import TeamsApp from './TeamsApp';
import HomePageApp from './HomePageApp';
import PlayerProfileApp from './PlayerProfileApp';
import TeamProfileApp from './TeamProfileApp';
import {BrowserRouter, Route} from 'react-router-dom';

const App = ()=>(
    <BrowserRouter>
      <div>
          <div className="navContent">
            <NavBar />
            <TeamsApp />
          </div>
          <Route path="/" component={HomePageApp} exact />
          <Route path="/team/:id" component={TeamProfileApp} exact />
          <Route path="/player/:id" component={PlayerProfileApp} exact />
      </div>
    </BrowserRouter>
)
export default App;
