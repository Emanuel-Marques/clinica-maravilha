import { Routes, Route } from 'react-router'
import './App.css'
import { Header } from './components/header/Header';

function App() {
  return(
    <Routes>
      <Route
        path="/" 
        element={ <Header /> }>

      </Route>
    </Routes>
  );
}

export default App
