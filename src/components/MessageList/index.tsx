
import logoImg from '../../assets/logo.svg'
import './styles.scss'

export function MessageList() {
    return (
        <div className="messageContainer">
            <img src={logoImg} alt="Logo dowhile 2021" />

            <ul className="massageList">
            <li className="message">
                    <p className="messageContent">Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥 </p>
                    <div className="messageUser">
                        <div className="userImg">   
                            <img src="https://github.com/Luis-Felipe-N.png" alt="Imagem de perfil do user" />
                        </div>
                        <span>Luis Felipe</span>
                    </div>
                </li> <li className="message">
                    <p className="messageContent">Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥 </p>
                    <div className="messageUser">
                        <div className="userImg">   
                            <img src="https://github.com/Luis-Felipe-N.png" alt="Imagem de perfil do user" />
                        </div>
                        <span>Luis Felipe</span>
                    </div>
                </li> <li className="message">
                    <p className="messageContent">Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥 </p>
                    <div className="messageUser">
                        <div className="userImg">   
                            <img src="https://github.com/Luis-Felipe-N.png" alt="Imagem de perfil do user" />
                        </div>
                        <span>Luis Felipe</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}