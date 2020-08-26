import React from 'react'
import '../styles/Header.css'
import logo from '../assets/img/logoN.png'
import { useSelector } from 'react-redux'

function Header() {
    const { score } = useSelector((reducer) => ({
        score: reducer.score
    }))

    return (
        <div className='header'>
            <img src={logo} alt="logo" className='logo' />
            <p>Score: {score}</p>
        </div>
    )
}

export default Header
