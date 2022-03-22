import React from 'react'

function Home(props) {

const { title, subtitle, color } = props
return (
    <>
    <div className='home-title'>
        <h1>{title}</h1>
    </div>
    <div className='home-subtitle'>
        <h3>{subtitle}</h3>
    </div>
    <button className="home-btn" disabled style={{background: `${color}`}}>OK</button>

        <input type="checkbox" className="home-check" checked style={{ color: `${color}` }}/>
    </>
)
}

export default Home