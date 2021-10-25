import { VscGithubInverted }  from 'react-icons/vsc'
import './styles.modules.scss'

export function LoginBox() {
    return (
        <div className="loginForm">
            <strong>Entre e compartilhe sua mesnsagem</strong>
            <a 
                href="http://localhost:3000/github"
                className="signInWithGithub"
            >
                <VscGithubInverted />
                Entrar com GitHub
            </a>
        </div>
    )
}