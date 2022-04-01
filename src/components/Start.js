import React, { useState, useEffect } from 'react'
import './../styles/main.css';
import './../styles/start.css';

function Start() {

    const [ user, setUser ] = useState({ firstname: "", lastname: "", email: "", password: ""});
    const [ validate, setValidate ] = useState(false);
    const [ disabled, setDisabled] = useState(true);
 
    useEffect(() => {
        if (validate) {
            const first = document.querySelector('#first-name');
            const firstLabel = document.querySelector('.firstname');
            if(user.firstname !== '') {
                first.classList.remove('invalid');
                firstLabel.classList.remove('invalid');
            } else {
                first.classList.add('invalid');
                firstLabel.classList.add('invalid');
            }
            const last = document.querySelector('#last-name');
            const lastLabel = document.querySelector('.lastname');
            if (user.lastname !== '') {
                last.classList.remove('invalid');
                lastLabel.classList.remove('invalid');
            } else {
                last.classList.add('invalid');
                lastLabel.classList.add('invalid');
            }
            const email = document.querySelector('#email');
            const emailLabel = document.querySelector('.email');
            if (user.email !== '' && email.checkValidity()) {
                email.classList.remove('invalid');
                emailLabel.classList.remove('invalid');
            } else {
                email.classList.add('invalid');
                emailLabel.classList.add('invalid');
            }
            const pass = document.querySelector('#password');
            const passLabel = document.querySelector('.password');
            if (user.password !== '') {
                pass.classList.remove('invalid');
                passLabel.classList.remove('invalid');
            } else {
                pass.classList.add('invalid');
                passLabel.classList.add('invalid');
            }
        }
    },[user.firstname, user.lastname, user.email, user.password])

    useEffect(() => {
            console.log('Effect User')
            if ( 
            user.firstname !== '' && 
            user.lastname !== '' && 
            user.email !== '' && document.querySelector('#email').checkValidity() &&
            user.password !== '' ) {
                setDisabled(false);
                setValidate(true);
            }
    }, [user])

    const handleChange = (event) => {
        event.preventDefault();
        console.log('Change', event.target.name, event.target.value)
        setUser({ ...user, [event.target.name]: event.target.value })
    }


    const validateForm = () => {
        console.log('User', user, validate)
        if (user.firstname === '') {
            const first = document.querySelector('#first-name');
            const firstLabel = document.querySelector('.firstname');
            first.classList.add('invalid');
            firstLabel.classList.add('invalid');
        }
        if (user.lastname === '') {
            const last = document.querySelector('#last-name');
            const lastLabel = document.querySelector('.lastname');
            last.classList.add('invalid');
            lastLabel.classList.add('invalid');
        }
        if (user.email === '') {
            const email = document.querySelector('#email');
            const emailLabel = document.querySelector('.email');
            email.classList.add('invalid');
            emailLabel.classList.add('invalid');
        } 
        if (user.password === '') {
            const pass = document.querySelector('#password');
            const passLabel = document.querySelector('.password');
            pass.classList.add('invalid');
            passLabel.classList.add('invalid');
        } 
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submit', event);
        validateForm();
    }

  return (
      <>
    <div className="main-start">
        <h1 className="signup-title">Awesome! Let's dive right in!</h1>
        <form action="start" className="signup-form" onSubmit={handleSubmit} >
            <label className="" htmlFor="title">Title</label>
            <select id="title">
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
            </select>
            <label className="firstname" htmlFor="first-name">First name</label>
                <input 
                    type="text" 
                    id="first-name" 
                    name="firstname" 
                    value={user.firstname} 
                    onChange={handleChange}
                    autoComplete="new-password"
                />
            <label className="lastname" htmlFor="last-name">Last name</label>
                <input 
                    type="text" 
                    id="last-name" 
                    name="lastname" 
                    value={user.lastname} 
                    onChange={handleChange}
                    autoComplete="new-password"
                />
            <label className="email" htmlFor="email" >E-Mail</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={user.email} 
                    onChange={handleChange}
                    autoComplete="new-password"
                />
            <label className="password" htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={user.password} 
                    onChange={handleChange}
                    autoComplete="new-password"
                />
            <input type="checkbox" id="agree-terms" />
                  <label className="agree" htmlFor="agree-terms">Agree to
                <a href="#">Terms &amp; Conditions</a>
            </label>
            <button type="submit" className="button" disabled={disabled} >Sign Up</button>
        </form>
    </div>
    <footer className="footer">
        <nav className='footer-nav'>
            <ul className='footer-features'>
                <li className='footer__feature'>
                    <a className='footer__feature_link' href="#">Support</a>
                </li>
                <li className='footer__feature'>
                    <a className='footer__feature_link' href="#">Terms of Use</a>
                </li>
            </ul>
        </nav>
    </footer>
    </>
  )
}

export default Start