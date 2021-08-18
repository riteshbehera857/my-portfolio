import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const HeaderMenu = () => {
    return (

        <nav className="header__navigation container--px flex-row flex-row--jc-sb">
            <div
                className="header__navigation--list container--px flex-row flex-row--jc-sb"
            >

                <ul className="header__navigation--list">

                    <Link className="header__navigation--item" to="/">
                        <li>home</li>
                    </Link>
                    <Link className="header__navigation--item" to="/work">
                        <li>work</li>
                    </Link>
                    <Link className="header__navigation--item" to="/about">
                        <li>about</li>
                    </Link>

                </ul>

            </div>
            <Link to="/contact">
                <button className="btn btn-nav">contact</button>
            </Link>
            {/* <button className="btn btn-nav">
                    <Link className="btn btn-nav" to="/contact">contact</Link>
                </button> */}

        </nav>




    )
}

export default HeaderMenu
