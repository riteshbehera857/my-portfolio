import React from 'react'
import Nav from './Nav'
import HeaderNavigation from './HeaderNavigation'

const Header = () => {
    return (
        <header className="header flex-row">
            <Nav />
            <HeaderNavigation />
        </header>
    )
}

export default Header
