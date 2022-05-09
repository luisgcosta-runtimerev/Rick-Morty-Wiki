import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
         <Link to="/" className="fs-3 ubuntu navbar-brand">Rick & Morty <span className="text-primary">Wiki</span> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <style jsx='true'>
                    {`
                     button[aria-expanded='false'] > .close{
                         display:none;
                     }
                     button[aria-expanded='true'] > .open{
                        display:none;
                    }
                    `}
                </style>
                <MenuRoundedIcon className='open'  color='primary' />
                <CloseRoundedIcon className='close'  color='primary' />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav fs-5">
                    <NavLink activeclassname="active" className="nav-link" to="/">Characters</NavLink>
                    <NavLink activeclassname="active" className="nav-link" to="/episodes">Episodes</NavLink>
                    <NavLink activeclassname="active" className="nav-link" to="/location">Location</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}
