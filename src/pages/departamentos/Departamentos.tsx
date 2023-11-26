import imgMed from '../../assets/img-3.png';
import { ImgContainer, Information, Main } from './style';

export function Departamentos() {
  return(
    <Main>
        <ImgContainer>
          <img src={ imgMed } alt="" />
        </ImgContainer>
        <Information>
          <h3>Melhor paciente</h3>
          <h1>Cuidados e comodidades</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, 
            provident. Maiores ullam cupiditate corrupti nulla sit, rem doloribus dolore 
            excepturi nobis nemo ducimus suscipit aut repudiandae, laborum veritatis ipsam 
            incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, 
            provident. Maiores ullam cupiditate corrupti nulla sit, rem doloribus dolore 
            excepturi nobis nemo ducimus suscipit aut repudiandae, laborum veritatis ipsam 
            incidunt!
          </p>
          <button>Consulte mais informação</button>
        </Information>
    </Main>
  );
}