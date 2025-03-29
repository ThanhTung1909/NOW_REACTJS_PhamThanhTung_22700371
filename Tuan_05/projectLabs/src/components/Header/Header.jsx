import React from "react";
import "./header.css"

function Header() {
  return (
    <div className="header">
      <div className="search">
        <img src="/public/images/chefify.png" alt="" />
        <div className="search-box">
          <input
            type="text"
            placeholder="cakescascsa"
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <div className="menu">
        <ul>
            <li>What to cook</li>
            <li>Recipes</li>
            <li>Ingredients</li>
            <li>Occasions</li>
            <li>About Us</li>
        </ul>
      </div>
      <div className="user">
        <div className="btn-box">
            <button type="button">
                <img src="/public/images/check.png" alt="" />
                <span>Your Recipe Box</span>
            </button>
        </div>
        <div className="avatar">
            <img src="/public/images/avatar.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
