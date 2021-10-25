import { api } from '../../service/api'
import logoImg from '../../assets/logo.svg'
import './styles.scss'
import { useEffect, useState } from 'react'

interface IMessage {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList() {
    const [ messages, setMessages ] = useState<IMessage[]>([])

    useEffect(() => {
        api.get<IMessage[]>('messages/last3').then( response => {
            setMessages(response.data);
        })
    }, [])

    return (
        <div className="messageContainer">
            <img src={logoImg} alt="Logo dowhile 2021" />

            <ul className="messageList">
                { messages.length && messages.map( message => {
                    return (
                        <li key={message.id} className="message">
                            <p className="messageContent">{message.text}</p>
                            <div className="messageUser">
                                <div className="userImg">   
                                    <img src={message.user.avatar_url} alt={`Imagem de perfil do ${message.user.name}`} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}