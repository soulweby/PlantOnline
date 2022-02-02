import React from 'react'
import logo from '../assets/logo.png'
import "../styles/Banner.css"

export default function Banner() {
    return (
        <div className="lmj-banner">
            <h1>La maison jungle</h1>
            <img src={logo} alt="la maison jungle" className='lmj-logo' />
        </div>
    )
}
