import React , { useEffect } from 'react'
import './../styles/main.css';
import './../styles/App.css';
import { ReactComponent as Svg1 } from './../assets/svg1.svg';
import { ReactComponent as Svg2 } from './../assets/svg2.svg';
import { ReactComponent as Svg3 } from './../assets/svg3.svg';



function Home(props) {

const { title, subtitle } = props

useEffect(() => {
    const selectPlanButtons = document.querySelectorAll('.plan button');
    const backdrop = document.querySelector('.backdrop');
    const modal = document.querySelector('.modal');
    for (let i = 0; i < selectPlanButtons.length; i++) {
         selectPlanButtons[i].addEventListener('click', function() {
            modal.classList.add('open');
            backdrop.classList.add('open');
         })
    }  
    return () => {
        for(let i = 0; i<selectPlanButtons.length; i++) {
            selectPlanButtons[i].removeEventListener('click', function () {
                modal.classList.remove('open');
                backdrop.classList.remove('open');
            })
        } 
    }
}, [])



return (
    <>
    <main className="main-home">
        <div className="main-background">
        <div className='home-title'>
            <h1>{title}</h1>
        </div>
        <div className='home-subtitle'>
            <h3>{subtitle}</h3>
            <p>This is how Good Service was created.</p>
        </div>
        </div>
    
        <section>
            <h1 className="section-title">Choose Your Plan</h1>
                <div className="plan-list">
                    <article className="plan">
                        <h1 className="plan__title">FREE</h1>
                        <h2 className="plan__price">$0/month</h2>
                        <h3>For hobby projects or small teams.</h3>
                        <ul className="plan__features">
                            <li className="plan__feature">1 Workspace</li>
                            <li className="plan__feature">Unlimited Traffic</li>
                            <li className="plan__feature">10GB Storage</li>
                            <li className="plan__feature">Basic Support</li>
                        </ul>
                        <div>
                            <button className="plan__button">CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article className="plan plan__highlighted">
                        <h1 className="plan__subtitle">RECOMMENDED</h1>
                        <h1 className="plan__title">PLUS</h1>
                        <h2 className="plan__price">$29/month</h2>
                        <h3>For ambitious projects.</h3>
                        <ul className="plan__features">
                            <li className="plan__feature">5 Workspaces</li>
                            <li className="plan__feature">Unlimited Traffic</li>
                            <li className="plan__feature">100GB Storage</li>
                            <li className="plan__feature">Plus Support</li>
                        </ul>
                        <div>
                            <button className="plan__button">CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article className="plan">
                        <h1 className="plan__title">PREMIUM</h1>
                        <h2 className="plan__price">$99/month</h2>
                        <h3>Your enterprise solution.</h3>
                        <ul className="plan__features">
                            <li className="plan__feature">10 Workspaces</li>
                            <li className="plan__feature">Unlimited Traffic</li>
                            <li className="plan__feature">Unlimited Storage</li>
                            <li className="plan__feature">Priority Support</li>
                        </ul>
                        <div>
                            <button className="plan__button">CHOOSE PLAN</button>
                        </div>
                    </article>
                </div>
        </section>
        <section id="key-features">
            <h1 className="section-title">Many Good Reasons to Stick Around</h1>
            <ul className="key__features">
                <li className="key__feature">
                    <div className="key__feature__img">
                         <Svg1/>
                    </div>
                    <p className="key__feature_description">3,857,000 Trusting Customers</p>
                </li>
                <li className="key__feature">
                    <div className="key__feature__img">
                         <Svg2/>
                    </div>
                    <p className="key__feature_description">99.999% Uptime Guarantee</p>
                </li>
                <li className="key__feature">
                    <div className="key__feature__img">
                         <Svg3/>
                    </div>
                    <p className="key__feature_description">Lightning Fast CDN</p>
                </li>
            </ul>
        </section>
    </main>
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
        <script src='../scripts/script.js'></script>
    </>
   
)
}

export default Home