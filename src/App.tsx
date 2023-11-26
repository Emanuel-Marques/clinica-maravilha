import { Routes, Route } from 'react-router'
import './App.css'
import { Layout } from './components/Layout';
import { NotFound } from './components/notFound/notFound';
import { Sobre } from './pages/sobre/Sobre';
import { Departamentos } from './pages/departamentos/Departamentos';
import { Doutor } from './pages/doutor/Doutor';

function App() {
  return(
    <Routes>
      <Route
        path="/" 
        element={ <Layout /> }
      >
        <Route path='/sobre' element={ <Sobre /> } />
        <Route path='/departamentos' element={ <Departamentos /> } />
        <Route path='/doutor' element={ <Doutor /> } />
      </Route>
      <Route
        path='/*'
        element={ <NotFound /> }
      />
    </Routes>
  );
}

export default App
