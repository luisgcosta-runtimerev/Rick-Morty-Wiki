import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
         <Link to="/" className="fs-3 ubuntu navbar-brand">Rick & Morty <span className="text-primary">Wiki</span> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav fs-5">
                    <NavLink className="nav-link active" to="/">Characters</NavLink>
                    <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
                    <NavLink className="nav-link" to="/location">Location</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}
