import React from 'react';
import {Link} from 'react-router-dom'

const Display = ({id, imageSrc, classname, type}) => {

  

    return (
      <div id={id} className={classname}>
        <Link
          to={type === "Movie" ? `MovieDetails/${id}` : `ShowDetails/${id}`}>
          <img src={imageSrc} alt="" />
        </Link>
      </div>
    );
}

export default Display;
