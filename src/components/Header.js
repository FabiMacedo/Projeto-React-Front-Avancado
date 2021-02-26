import { NavLink } from 'reactstrap';
import Icon from './imagens/fs-icon.png';

function Header() {
    return(
        <header className="bg-danger">
            <nav className="navbar nav align-items-center justify-content-between">
                <NavLink href="#" className="navbar-brand nav-link text-light">
                <img width="40" src={Icon} alt="Full Stack Eletro"/></NavLink>
                <NavLink href="#" className="navbar-item nav-link text-light">Nossos Produtos</NavLink>
                <NavLink href="#" className="navbar-item nav-link text-light">Nossas Lojas</NavLink>
                <NavLink href="#" className="navbar-item nav-link text-light">Fale Conosco</NavLink>
            </nav>
        </header>
    ); 
}

export default Header;