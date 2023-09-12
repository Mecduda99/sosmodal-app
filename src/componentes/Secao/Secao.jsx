import './Secao.css'

export default function Secao() {

    return (
        <>
            <div className="frame">
                <div className="div">
                    <p className="text-wrapper">A solução para otimizar seu atendimento</p>
                    <p className="p">
                        Com o chatbot IHelp você terá otimização, rapidez e captação de informações de forma inteligente.
                    </p>
                    <div className="group">
                        <div className="overlap-group">
                            <a className='link' href="./adquiraja">Adquira já</a>
                        </div>
                    </div>
                </div>
                <img className="celular" alt="Celular" src="./src/assets/imagens/celular.png" />
            </div>
        </>
    )
}