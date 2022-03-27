import React from 'react';
import './../styles/main.css';

export default function Navbar(props) {

    const { color, link1, link2, link3 } = props

    const handleClick = (link,e) => {
        e.preventDefault();
        props.link(link);
    }

  return (
      <header className="main-header" style={{ background: `${color}` }}>
          <div className='page-logo'>
              <img className="page-img" src={require("./../assets/boutique.png")}  alt="logo" width='60' height='60' />
          </div>
          <nav className="nav">
              <ul className="nav-list">
                  <li className="nav-item">
                      <a className="nav-link" href='home' onClick={(e) => handleClick('Home',e)}>{link1}</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href='page' onClick={(e) => handleClick('Page', e)}>{link2}</a>
                  </li>
                  <li className="nav-item nav-item-cta">
                  <a className="nav-link" href='customer' onClick={(e) => handleClick('Customer', e)}>{link3}</a>
                  </li>
              </ul>
          </nav>
      </header>
  )
}



