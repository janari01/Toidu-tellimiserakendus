import logo from '../assets/logo.jpg'
import Cart from '../store/CartContext'
import Button from './UI/Button'
import { useContext } from 'react'

const Header = () => {
    const { items } = useContext(Cart);

    const totalQuant = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={() => console.log('click, yes, very much')} children={`Cart (${totalQuant})`} />
            </nav>
        </header>
    )
}

export default Header