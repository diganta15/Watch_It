import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search" >
                <input type="text" placeholder="Search" className="search-input"/>
                <div className="select">
                <label htmlFor="Location">Search in: </label>
                <select name="location" id="">
                <option value="movies">Movies</option>
                <option value="tv-shows">TV Shows</option>
                </select>
                </div>
                <li className="search-btn">
                Search
                </li>
            </div>
        );
    }
}

export default Search;
