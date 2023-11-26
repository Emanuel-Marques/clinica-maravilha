import { Copyright,
    FooterContent,
    InformationContent,
    LineTitle,
    SocialAndInput,
    Content, 
} from "./style";
import { IconContext } from "react-icons";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

export function Footer() {
  return(
    <>
    <FooterContent>
      <main>
        <InformationContent>
            <LineTitle>
                <h2>Cuidados Médicos</h2>
                <h2>Os serviços</h2>
                <h2>Departamentos</h2>
            </LineTitle>
            <Content>
                <div>
                  <p>Sobre nós</p>
                  <p>Sobre serviços</p>
                  <p>Sobre Departamentos</p>
                  <p>Serviços</p>
                  <p>Contate-nos</p>
                </div>
                <div>
                  <p>Oncologia</p>
                  <p>Cirurgia dentária</p>
                  <p>Diagnosticar e Pesquisar</p>
                  <p>Drogas/ Medicamentos</p>
                  <p>Ortopedia</p>
                </div>
                <div>
                  <p>Oncologia</p>
                  <p>Cirurgia dentária</p>
                  <p>Diagnosticar e Pesquisar</p>
                  <p>Drogas/ Medicamentos</p>
                  <p>Ortopedia</p>
                </div>
            </Content>
        </InformationContent>
        <SocialAndInput>
          <div className='social-icons'>
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: '2rem' }}>
              <BsFacebook />
              { '    ' }
              <FaSquareXTwitter />
              { '    ' }
              <BsLinkedin />
              { '    ' }
              <BsInstagram />
            </IconContext.Provider>
          </div>
          <div className="newsletter">
            <label htmlFor="email">
                BOLETIM DE NOTÍCIAS:
            </label>
            <input type="text" id="email" placeholder="Digite seu e-mail" />
            <button>Se Inscrever</button>
          </div>
        </SocialAndInput>
      </main>
    </FooterContent>
    <Copyright>
        &copy; Todos os direitos reservados. Emanuel Marques 2023.
    </Copyright>
    </>
  );    
}