import React, { Component } from "react";
import axios from "axios";
import Container from "./Container";

class MovieDetails extends Component {
  state = {
    data: {
      actorList:[{}]
    },
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    

    axios
      .get(`https://imdb-api.com/en/API/Title/k_83ul3o8k/${id}`)
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
        const lastIndex = this.props.location.pathname.lastIndexOf('/')
        const url = this.props.location.pathname.substring(1,lastIndex);
        

      const {
        id,
        fullTitle,
        year,
        releaseDate,
        runtimeStr,
        plot,
        image,
        stars,
        actorList,
        tagline,
        imDbRating
      } = this.state.data;
     
    return (
      <div>
        <Container
          key={id}
          fullTitle={fullTitle}
          year={year}
          releaseDate={releaseDate}
          runtimeStr={runtimeStr}
          plot={plot}
          image={image}
          stars={stars}
          actorList={actorList}
          tagline={tagline}
          imDbRating={imDbRating}
          url={url}
        />
      </div>
    );
  }
}

export default MovieDetails;
