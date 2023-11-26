import { FootContent, FormContent, GlobalStyle, MainContent, Card } from "./style";
import quote from '../../assets/quote-icon.png';
import user from '../../assets/ejm.png';

export function Contacto() {
  return(
    <>
      <GlobalStyle />
      <MainContent>
        <FormContent>
          <h1>Conacte-nos</h1>
          <input className="submit" type="text" placeholder='Nome'/>
          <input className="submit" type="email" placeholder='E-mail' />
          <input className="submit" type="text" placeholder='Assunto'/>
          <textarea className="submit" placeholder='Mensagem'></textarea>
          <button>Enviar</button>
        </FormContent>
        <div className="dec">
          <h1>Declarações</h1>
          <Card>
            <div className="row">
              <img src={ user } alt="" />
              <h2>Optimus Prime</h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officiis, dicta placeat, enim ratione, nisi similique esse dolore corrupti
              maxime at dolorem inventore error! Aut repudiandae commodi sunt minima dolore?
              Placeat!
            </p>
            <img src={ quote } alt="" />
          </Card>
        </div>
      </MainContent>
      <hr />
      <FootContent>
        <section>
          <p>Precisa de um médico para check-up</p>
          <h3>Marque uma consulta e pronto</h3>
        </section>
        <button>Marcar consulta</button>
      </FootContent>
    </>
  );
}