import { UlContainer } from "./style";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import img from '../../assets/logo.png';

export function Header(){
  return(
    <UlContainer>
        <li><NavLink>Início</NavLink></li>
        <li><NavLink>Sobre</NavLink></li>
        <li><NavLink>Doutor</NavLink></li>
        <li><img src={img} alt="" /></li>
        <li><NavLink>Departamentos</NavLink></li>
        <li><NavLink>Blogue</NavLink></li>
        <li><NavLink>Contacto</NavLink></li>
        <li><NavLink><IoSearch /></NavLink></li>
        <li><NavLink>Início</NavLink></li>
    </UlContainer>
  )
}