import React, { useEffect } from 'react';
import './../styles/main.css';

export default function Navbar(props) {

    const { color, link1, link2, link3 } = props

    const closeModal = () => {
        const backdrop = document.querySelector('.backdrop');
        const modal = document.querySelector('.modal');
        backdrop.classList.remove('open');
        modal.classList.remove('open');
        // backdrop.style.display = "none";
        // modal.style.display = "none";
    }

    useEffect(() => {
        const toggleButton = document.querySelector('.toggle-button');
        const mobileNav = document.querySelector('.mobile-nav');

        toggleButton.addEventListener('click', function() {
            mobileNav.classList.toggle('open');
            backdrop.classList.toggle('open');
            // mobileNav.style.display = 'block';
            // backdrop.style.display = 'block';
        })

        const modalNoButton = document.querySelector('.modal__action--negative')
        const backdrop = document.querySelector('.backdrop');
        const modal = document.querySelector('.modal');

        backdrop.addEventListener('click', function() {
            // mobileNav.style.display = 'none';
            mobileNav.classList.remove('open');
            closeModal();
        });

        modalNoButton.addEventListener('click', closeModal)


        return () => {
            toggleButton.removeEventListener('click', function () {
                mobileNav.classList.remove('open');
            })
            backdrop.removeEventListener('click', closeModal);
            modalNoButton.removeEventListener('click', closeModal)
        }
    }, [])

    
    const handleClick = (link,e) => {
        if (link === 'Start') {
            closeModal();
        }
        e.preventDefault();
        props.link(link);
    }

  return (
      <>
        <div className="backdrop"></div>
        <div className="modal">
            <h1 className="modal__title">Do you want to continue?</h1>
            <div className="modal__actions">
                <a href='start' onClick={(e) => handleClick('Start', e)}  className="modal__action">Yes!</a>
                <button className="modal__action modal__action--negative" type="button">No!</button>
            </div>
        </div>
        <header className="main-header" style={{ background: `${color}` }}>
            <button className="toggle-button">
                <span className="toggle-button__bar"></span>
                <span className="toggle-button__bar"></span>
                <span className="toggle-button__bar"></span>
            </button>
            <div className='page-logo'>
                
                 <a className="nav-link" href='home' onClick={(e) => handleClick('Home', e)}>
                      <img className="page-img" src={require("./../assets/boutique.png")} alt="logo" width='60' height='60' />
                 </a>
            </div>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                        <a className="nav-link" href='page' onClick={(e) => handleClick('Page',e)}>{link1}</a>
                    </li>
                    <li className="main-nav__item">
                        <a className="nav-link" href='customer' onClick={(e) => handleClick('Customer', e)}>{link2}</a>
                    </li>
                    <li className="main-nav__item main-nav__item--cta">
                    <a className="nav-link" href='start' onClick={(e) => handleClick('Start', e)}>{link3}</a>
                    </li>
                </ul>
            </nav>
        </header>
       <nav className="mobile-nav">
        <ul className="mobile-nav__items">
            <li className="mobile-nav__item">
                <a href='page' onClick={(e) => handleClick('Page',e)}>{link1}</a>
            </li>
            <li className="mobile-nav__item">
                <a href='customer' onClick={(e) => handleClick('Customer', e)}>{link2}</a>
            </li>
            <li className="mobile-nav__item mobile-nav__item--cta">
                <a href='start' onClick={(e) => handleClick('Start', e)}>{link3}</a>
            </li>
        </ul>
    </nav>
    </>
  )
}



