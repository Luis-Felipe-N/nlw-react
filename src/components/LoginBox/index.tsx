import { useContext, } from 'react'
import { VscGithubInverted }  from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';
import './styles.modules.scss'

export function LoginBox() {

    const { signInUrl, user } = useContext( AuthContext )

    console.log( user )

    return (
        <div className="loginForm">
            <strong>Entre e compartilhe sua mesnsagem</strong>
            <a 
                href={signInUrl}
                className="signInWithGithub"
            >
                <VscGithubInverted />
                Entrar com GitHub
            </a>
        </div>
    )
}