import React from 'react'
import "../Navbar/navbar.css"

const navbar = () => {
    return (
        <>
            <div>


                <div className="container container-nav">
                    <div className="site-title">
                        <h1>Jyre</h1>
                        <p className="subtitle">Logo Test</p>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#"> Solutions </a></li>
                            <li><a href="#">Our Team</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </>

    )
}

export default navbar
