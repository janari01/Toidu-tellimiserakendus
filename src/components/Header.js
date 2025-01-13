import logo from '../assets/logo.jpg'
import Cart from '../store/CartContext'
import Button from './UI/Button'
import Modal from './UI/Modal'
import { useContext, useState } from 'react'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { items } = useContext(Cart);

      
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
      


    const totalQuant = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={handleOpenModal} children={`Cart (${totalQuant})`} />
            </nav>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </header>
    )
}

export default Header