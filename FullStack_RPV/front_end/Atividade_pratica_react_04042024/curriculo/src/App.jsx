import './global.styles.css'
import styles from './components/App.module.css'
import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'
import { Home } from './components/Home'
import { Experiencia } from './components/Experiencia'
import { Qualificacoes } from './components/Qualificacoes'
import { HardSkills } from './components/HardSkills'
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/experiencia' element={<Experiencia />} />

              <Route path='/qualificacoes' element={<Qualificacoes />} />

              <Route path='/hardskills' element={<HardSkills />} />
            </Routes>
          </main>
        </div>
        
        <footer>
            <Footer />
          </footer>
      </div>
    </>
  )
}

export default App
