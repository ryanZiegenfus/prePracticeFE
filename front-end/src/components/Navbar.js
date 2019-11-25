import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {


  return (
    <div className="Navbar">
      <form>
        <Link to='/'>Feed</Link>
        <Link to='signup'>Sign-Up</Link>
      </form>
    </div>
  );
}

export default Navbar;
