import React, { useContext } from 'react'
import NavList from './NavList'
import SlidingMenuSearch from './SlidingMenuSearch'
import SlidingMenuTop from './SlidingMenuTop'
import { Yad2Context } from '../../../../context/Yad2Context'

const SlidingMenu = ({ close }) => {
    const { screenWidth } = useContext(Yad2Context)
    return (
        <div className="main-menu__sliding">
            <img onClick={close} id="exit-btn" alt="exit" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyOXB0IiB2aWV3Qm94PSIwIDAgMzI5LjI2OTMzIDMyOSIgd2lkdGg9IjMyOXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOTQuODAwNzgxIDE2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiLz48L3N2Zz4=" />
            <SlidingMenuTop close={close} />
            <SlidingMenuSearch />
            <NavList />

            <div className="bottom-section">
                <div className="bottom-section__group">
                    <img alt="תקנון" src="https://i.ibb.co/ygjFVxZ/4.png" />
                    <img alt="פרטיות" src="https://i.ibb.co/8gmSbNW/3.png" />
                    <img alt="נגישות" src="https://i.ibb.co/x110Mrx/2.png" />
                    {screenWidth > 430 && <img alt="שאלות" src="https://i.ibb.co/VvpGkmn/1.png" />}

                </div>
                <div className="bottom-section__group bottom-part">
                    {screenWidth < 431 && <img alt="שאלות" src="https://i.ibb.co/VvpGkmn/1.png" />}
                    <img alt="קשר" src="https://i.ibb.co/Srq1JmL/5.png" />
                </div>

            </div>
        </div>

    )
}


export default SlidingMenu