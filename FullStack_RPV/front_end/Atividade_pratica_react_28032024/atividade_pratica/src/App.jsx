import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Missao from './components/Pages/Missao/Missao';
import Produtos from './components/Pages/Produtos/Produtos';
import Historia from './components/Pages/Historia/Historia';
import Contato from './components/Pages/Contato/Contato';

function App() {
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path='/' element={<Main 
          paginaHome='Home' 
          />} />

          <Route path='/missao' element={<Missao 
          paginaMissao='Missão' 
          />} />

          <Route path='/produtos' element={<Produtos 
          paginaProdutos='Produtos' 
          />} />

          <Route path='/historia' element={<Historia 
          paginaHistoria='Nossa História' 
          />} />
          
          <Route path='/contato' element={<Contato nomePagina='Contato' 
          nomeContato='Thiago SG'
          cidadeContato='Cataguases'
          estadoContato='Minas Gerais'
          />} />

        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
