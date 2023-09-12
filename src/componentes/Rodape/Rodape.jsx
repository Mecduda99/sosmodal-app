import './Rodape.css'

export default function Rodape() {

    return (
        <footer>
            <div className="row">
                <div className="integrantes-maria-wrapper">
                    <h2>Integrantes:</h2>
                    <div className="integrantes-text">
                        <p> Maria Eduarda Costa de Araújo Vieira - 98760</p>
                        <p>Bruno Perdigão Buarque Pinho - 550597</p>
                        <p>Leonardo Buonanno Del Matto - 98315</p>
                        <p>Ryuithi Takamori Oliveira – 87215</p>
                    </div>
                </div>

                <div className='redes-sociais'>
                    <ul className="nav-list">
                        <li className="nav-link"><a href="">LinkedIn</a> </li>
                        <li className="nav-link"><a href="">E-mail</a> </li>
                        <li className="nav-link"><a href="">Instagram</a> </li>
                        <li className="nav-link"><a href="">Telefone</a> </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}