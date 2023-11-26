import imgDoc from '../../assets/img-4.png';
import { ImgContainer, Information, Main } from './style';

export function Doutor () {
  return (
    <Main>
        <Information>
          <h3>Melhor Laboratório</h3>
          <h1>Testes Disponíveis</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Non nobis incidunt vitae saepe ad quam sunt itaque illo cupiditate in perferendis 
            sapiente voluptas explicabo quibusdam nemo, magni maiores voluptate aliquam.
          </p>
          <button>Consulte mais informação</button>
        </Information>
        <ImgContainer>
            <img src={ imgDoc } />
        </ImgContainer>
    </Main>
  );
}