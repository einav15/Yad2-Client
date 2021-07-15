import React, { useContext, useState } from 'react'
import SlidingMenu from './SlidingMenu'
import { Yad2Context } from '../../../../context/Yad2Context'
import Backdrop from '../../../Backdrop'

const SlidingMenuButton = () => {
    const { screenWidth, setIsBackdrop } = useContext(Yad2Context)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsBackdrop(true)
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsBackdrop(false)
        setIsMenuOpen(false)
    }

    return (
        <>
            <div onClick={openMenu} className="main-menu__button">
                <img alt="menu" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDE1MCAxNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1MCAxNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJYTUxJRF8yNDBfIj4NCgk8cGF0aCBpZD0iWE1MSURfMjQxXyIgZD0iTTE1LDMwaDEyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1cy02LjcxNi0xNS0xNS0xNUgxNUM2LjcxNiwwLDAsNi43MTYsMCwxNVM2LjcxNiwzMCwxNSwzMHoiLz4NCgk8cGF0aCBpZD0iWE1MSURfMjQyXyIgZD0iTTEzNSw2MEgxNUM2LjcxNiw2MCwwLDY2LjcxNiwwLDc1czYuNzE2LDE1LDE1LDE1aDEyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1UzE0My4yODQsNjAsMTM1LDYweiIvPg0KCTxwYXRoIGlkPSJYTUxJRF8yNDNfIiBkPSJNMTM1LDEyMEgxNWMtOC4yODQsMC0xNSw2LjcxNi0xNSwxNXM2LjcxNiwxNSwxNSwxNWgxMjBjOC4yODQsMCwxNS02LjcxNiwxNS0xNVMxNDMuMjg0LDEyMCwxMzUsMTIweiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                {screenWidth > 960 && <span>תפריט</span>}
            </div>
            {
                isMenuOpen && <SlidingMenu close={closeMenu} />
            }

            <Backdrop close={closeMenu} />
        </>
    )
}


export default SlidingMenuButton