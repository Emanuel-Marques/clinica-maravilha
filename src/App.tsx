import { Routes, Route } from 'react-router'
import './App.css'
import { Header } from './components/header/Header';
import { NotFound } from './components/notFound/notFound';

function App() {
  return(
    <Routes>
      <Route
        path="/" 
        element={ <Header /> }>

      </Route>
      <Route
        path='/*'
        element={ <NotFound /> }
      />
    </Routes>
  );
}

export default App
