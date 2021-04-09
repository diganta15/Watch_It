import React, { Component } from 'react';
import axios from 'axios';

class Star extends Component {

    state = {
        data:{
            knownFor:[{}],
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        
        axios.get(`https://imdb-api.com/en/API/Name/k_83ul3o8k/${id}`)
        .then(res => this.setState({data: res.data}))

    }


    render() {
        console.log(this.state.data);
        const {name, image, castMovies, knownFor, summary, role, birthDate, height} = this.state.data;
        return (
          <div className="star">
            <div className="actor-display-top">
              <img src={image} alt="" className="actor-img" />
              <div className="">
                <h1 className="name">{name}</h1>
                <h2>Role: {role}</h2>
                <h3>Birth Date: {birthDate} </h3>
                <h3>Height: {height}</h3>
              </div>
            </div>
            <div className="actor-class-mid">
              <div className="summary">
                <p>{summary}</p>
              </div>
              <div className="known-for">
                {knownFor.map((data) => (
                  <div className="movie-container">
                    <img src={data.image} alt="" className="thumbnail" />
                    <p>{data.title}</p>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        );
    }
}

export default Star;
