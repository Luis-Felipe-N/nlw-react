import styles from './app.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

function App() {
  
  return (
    <main className={styles.main}>
      <MessageList />
      <LoginBox />
    </main>
  )
}

export default App
