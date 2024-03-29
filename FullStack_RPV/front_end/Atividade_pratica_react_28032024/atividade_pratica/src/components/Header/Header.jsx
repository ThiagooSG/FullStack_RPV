import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <ul className='menu'>
                <li><Link to="/" className='link_menu'>Home</Link></li>
                <li><Link to="../Missao" className='link_menu'>Missão</Link></li>
                <li><Link to="../Produtos" className='link_menu'>Produtos</Link></li>
                <li><Link to="../Historia" className='link_menu'>Nossa História</Link></li>
                <li><Link to="../Contato" className='link_menu'>Contatos</Link></li>
            </ul>
        </header>
    )
}

export default Header;