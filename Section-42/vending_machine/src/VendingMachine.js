import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import './vendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="vendingMachine">
            <NavLink exact to="/chips">
                <h1>Chips</h1>
            </NavLink>
            <NavLink exact to="/hotcheetos">
                <h1>Hot Cheetos</h1>
            </NavLink>
            <NavLink exact to="/twizlers">
                <h1>Twizlers</h1>
            </NavLink>
        </div>
    )
}

export default VendingMachine;