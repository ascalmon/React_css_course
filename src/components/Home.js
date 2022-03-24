import React from 'react'

function Home(props) {

const { title, subtitle, color } = props

return (
    <>
    <header className="main-header">
        <div className='home-logo'>
            <img className="home-img" src="boutique.png" alt="logo" width='60' height='60' />
        </div>
        <nav className="nav">
            <ul  className="nav-list">
                <li className="nav-item">
                    <a className="nav-link" href='components/home.js' >Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='components/home.js' >About</a>
                </li>
                <li className="nav-item nav-item-cta">
                    <a className="nav-link" href='components/home.js' >CTA Business</a>
                </li>
            </ul>
        </nav>
    </header>
    <main className="main">
        <div className='home-title'>
            <h1>{title}</h1>
        </div>
        <div className='home-subtitle'>
            <h3>{subtitle}</h3>
            <p>This is how Boutique was created.</p>
        </div>
        <button className="home-btn" disabled style={{background: `${color}`}}>OK</button>

        <input type="checkbox" className="home-check" checked style={{ color: `${color}` }}/>
    </main>
    
    </>
)
}

export default Home