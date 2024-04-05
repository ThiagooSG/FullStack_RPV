import './global.styles.css'
import styles from './components/App.module.css'
import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'
import { Posts } from './components/Posts'



function App() {


  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />


          <main>
            <Posts />

          </main>
        </div>
      </div>
    </>
  )
}

export default App
