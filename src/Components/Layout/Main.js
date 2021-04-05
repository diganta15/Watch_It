import React, { Component } from 'react';
import Search from './Search';
import Display from './Display';
import {Consumer} from './../../context';

class Main extends Component {
    render() {
        return (
          <Consumer>
          {(value)=>{
            const {items:MovieName} = value.Movieinfo;
            const { items:ShowName } = value.Tvinfo;
            return (
              <div className="main">
                <div className="shadow">
                  <Search />
                  <div className="most-popular-movies">
                    <h1>Most Popular Movies</h1>
                    <div className="container">
                      {MovieName.map((item) => (
                        <Display
                          key={item.id}
                          id={item.id}
                          imageSrc={item.image}
                          classname={"display display-movie "}
                          type={"Movie"}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="most-popular-tv">
                    <div className="container">
                      {ShowName.map((item) => (
                        <Display
                          key={item.id}
                          id={item.id}
                          imageSrc={item.image}
                          classname={" display display-tv"}
                          type={"TvShow"}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="coming-soon"></div>
                </div>
              </div>
            );
          }}
          </Consumer>



         
        );
    }
}

export default Main;
