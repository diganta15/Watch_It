import React, { Component } from "react";
import { Link } from "react-router-dom";

class Stars extends Component {
  render() {
    const { id, image, name, type, as } = this.props;
    return (
      <div>
        <div className="stars">
          <img src={image} alt="" className="stars" />
          <Link to={`Star/${id}`}>
            <h3>{name}</h3>
          </Link>
          {type === "movies" ? <h4>As :{as}</h4> : null}
        </div>
      </div>
    );
  }
}

export default Stars;
