import { Main, Content, GlobalStyle } from './style';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { GiTerror } from "react-icons/gi";

export function NotFound(){
  return(
    <>
      <GlobalStyle />
      <Main>
        <Content>
          <div className="row">
            <IconContext.Provider value={{ color: "#02BE58", className: "global-class-name", size: '5rem' }}>
              <GiTerror />
            </IconContext.Provider>
            <h1>404</h1>
          </div>
          <h2>Página não encontrada</h2>
        </Content>
        <NavLink
          to="/"
        >
           Voltar para o ínicio            
        </NavLink>
      </Main>
    </>
  );
}