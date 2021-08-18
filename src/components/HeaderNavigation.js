import React from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderSocial from './HeaderSocial'

const HeaderNavigation = () => {
    return (
        <div className="header__navigation--right flex-row flex-row--jc-sb">
            <HeaderMenu />
            <HeaderSocial />
        </div>
    )
}

export default HeaderNavigation
