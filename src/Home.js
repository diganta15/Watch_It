import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import {Provider} from './context';
import Main from './Components/Layout/Main'
import MovieDetails from './Components/Movies/MovieDetails';
import ShowDetails from './Components/TVShows/ShowDetails';
import Star from './Components/Layout/Star'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class Home extends Component {
  
    render() {
     
        return (
          <Provider>
            <Router>
              <div>
                <Header />

                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route
                    exact
                    path="/MovieDetails/:id"
                    component={MovieDetails}
                  />
                  <Route
                    exact
                    path="/ShowDetails/:id"
                    component={ShowDetails}
                  />
                  <Route
                    exact
                    path="/**/Star/:id"
                    component={Star}
                  />
                </Switch>
              </div>
            </Router>
          </Provider>
        );
    }
}

export default Home;
