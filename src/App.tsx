import { Routes, Route } from 'react-router'
import './App.css'
import { Layout } from './components/Layout';
import { NotFound } from './components/notFound/notFound';
import { Sobre } from './pages/sobre/Sobre';
import { Departamentos } from './pages/departamentos/Departamentos';
import { Doutor } from './pages/doutor/Doutor';
import { Blogue } from './pages/blogue/Blogue';
import { Contacto } from './pages/contacto/Contacto';
import { All } from './pages';

function App() {
  return(
    <Routes>
      <Route
        path="/clinica-maravilha" 
        element={ <Layout /> }
      >
        <Route path='/clinica-maravilha/sobre' element={ <Sobre /> } />
        <Route path='/clinica-maravilha/departamentos' element={ <Departamentos /> } />
        <Route path='/clinica-maravilha/doutor' element={ <Doutor /> } />
        <Route path='/clinica-maravilha/blogue' element={ <Blogue /> } />
        <Route path='/clinica-maravilha/contacto' element={ <Contacto /> } />
      </Route>
      <Route path='/' element={ <All /> } />
      <Route
        path='/*'
        element={ <NotFound /> }
      />
    </Routes>
  );
}

export default App
