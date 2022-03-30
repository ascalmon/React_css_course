import React from 'react';
import './../styles/main.css';
import './../styles/page.css';

function Page(props) {


    return (
        <>
            <div className="background"></div>
            <main className="main-page">
            
                <section className="page-section page-section-plus">
                    <a href="#">
                        <h1 className="page-section__title">Our PLUS Plan</h1>
                        <h2 className="page-section__badge">RECOMMENDED</h2>
                        <h2 className="page-section__subtitle">The most popular choice of our customers.</h2>
                        <p className="page-section__description">Benefit from increased storage and faster support to ensure that your mission-critical data and applications
                            are always available!</p>
                    </a>
                </section>
                <section className="page-section page-section-free">
                    <a href="#">
                        <h1 className="page-section__title">Our FREE Plan</h1>
                        <h2 className="page-section__subtitle">An extremely solid start into our hosting world.</h2>
                        <p className="page-section__description">Get started immediately at zero cost!</p>
                    </a>
                </section>
                <div className="clear-float"></div>
                <section className="page-section page-section-premium">
                    <a href="#">
                        <h1 className="page-section__title">Our PREMIUM Plan</h1>
                        <h2 className="page-section__subtitle">All your enterprise needs. Instant support, guaranteed uptime. </h2>
                        <p className="page-section__description">The best solution for small to large enterprises. Because hosting shouldn't be in the way!</p>
                    </a>
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
        </>
    )
}

export default Page