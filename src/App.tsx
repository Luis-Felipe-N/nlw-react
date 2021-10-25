import styles from './app.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { AuthProvider } from './contexts/auth'

function App() {
  
  return (
    <AuthProvider>
      <MessageList />
      <LoginBox />
    </AuthProvider>
  )
}

export default App
