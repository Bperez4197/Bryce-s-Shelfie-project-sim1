import React, { Component } from 'react';
import '../../App.css';

function Header() {
    return (
      <div>
        <header>
            <img  className="logo" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png" />
            <h1 className="brand-title">Shelfie</h1>
        </header>
      </div>
    )
}

export default Header
