import { Link } from "react-router-dom"
import './Menu.css'

export default function Menu() {

    return(
        <nav className="menu">
            <ul className="nav-list">
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/sobrenos">Sobre Nós</Link></li>
                <li className="nav-link"><Link to="/faleconosco">Fale Conosco</Link></li>
                <li className="nav-link"><Link to="/adquiraja">Adquira Já</Link></li>
            </ul>
        </nav>
    )
}