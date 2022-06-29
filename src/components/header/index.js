import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="input-group w-50">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <div className="input-group-prepend">
          <button className="btn btn-success">search</button>
        </div>
      </div>
      <select className="form-control w-25" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default Header;
