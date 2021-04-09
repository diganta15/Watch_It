import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <span className="link">Watch It</span>
        </Link>
      </header>
    </div>
  );
};

export default Header;
