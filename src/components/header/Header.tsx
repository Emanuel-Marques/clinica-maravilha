import { UlContainer } from "./style";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import img from '../../assets/logo.png';

export function Header(){
  return(
    <>
      <nav>
        <UlContainer>
          <li><NavLink to="/">Início</NavLink></li>
          <li><NavLink to="/sobre">Sobre</NavLink></li>
          <li><NavLink to="/doutor">Doutor</NavLink></li>
          <li><img src={img} /></li>
          <li><NavLink to="/departamentos">Departamentos</NavLink></li>
          <li><NavLink to="/blogue">Blogue</NavLink></li>
          <li><NavLink to="">Contacto</NavLink></li>
          <li><NavLink to="" className="green"><IoSearch /></NavLink></li>
          <li><NavLink to="" className="green">Conecte-se</NavLink></li>
        </UlContainer>
      </nav>

    </>
  )
}