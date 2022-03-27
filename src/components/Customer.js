import React from 'react'
import './../styles/main.css';
import './../styles/customer.css';

function Customer() {
  return (
    <>
    <main className="main" >
        <div>
            <div class="testimonial" id="customer-1">
                <div class="testimonial__image-container">
                    <img src={require("./../assets/customer-1.jpg")} alt="Mike Statham - Customer" class="testimonial__image" />
                </div>
                <div class="testimonial__info">
                    <h1 class="testimonial__name">Mike Statham</h1>
                    <h2 class="testimonial__subtitle">Founder of
                        <a href="tech-analysis.com">tech-analysis.com</a>
                    </h2>
                    <p class="testimonial__text">uHost helped me realize my project with a highly constrained budget in like no time.</p>
                </div>
            </div>
            <div class="testimonial" id="customer-2">

                <div class="testimonial__info">
                    <h1 class="testimonial__name">John Mellow</h1>
                    <h2 class="testimonial__subtitle">Hosts his private videos on uHost.
                    </h2>
                    <p class="testimonial__text">I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
                        it in uHost!
                    </p>
                </div>
                <div class="testimonial__image-container">
                          <img src={require("./../assets/customer-2.jpg")} alt="John Mellow - Customer" class="testimonial__image" />
                </div>
            </div>
        </div>
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

export default Customer