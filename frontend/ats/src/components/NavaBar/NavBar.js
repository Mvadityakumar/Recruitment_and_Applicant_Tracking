import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
const NavBar = () => {
    return(
        <div  className='sti'>
            <DesktopNavigation />
            <MobileNavigation />
        </div>

    )
}

export default NavBar;