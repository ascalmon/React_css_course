import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Page from './components/Page.js';
import Customer from './components/Customer.js';

function App() {

  const [ route, setRoute ] = useState('Home');

  const link = (link) => {
    setRoute(link)
  }

  return (
    <>

    <div className="App">
      <Navbar
        link1 = 'Packages'
        link2 = 'Customer'
        link3 = 'Start Hosting'
        color = '#7a92c7'
        link = {link}
      ></Navbar>
      {route === 'Home' ?
        <Home
          title='Get the Freedom You Deserve'
          subtitle = 'The best Telecom in the region'
          link1='Packages'
          link2='Customer'
          link3='Start Hosting'
          color='#7a92c7'
        ></Home>
      : route === 'Page' ?
        <Page 
          link1='Packages'
          link2='Customer'
          link3='Start Hosting'
          color= '#7a92c7'
        ></Page>
      : route === 'Customer' ? 
        <Customer
          link1 = 'Packages'
          link2 = 'Customer'
          link3 = 'Start Hosting'
          color= '#7a92c7'
        ></Customer>
      : null
      }
    </div>
    </>
  );
}

export default App;
