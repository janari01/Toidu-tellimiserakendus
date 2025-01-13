import logo from '../assets/logo.jpg'
import Button from './UI/Button'

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={() => console.log('click, yes, very much')} children={'Cart (0)'} />
            </nav>
        </header>
    )
}

export default Header