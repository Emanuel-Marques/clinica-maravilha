import imgCard from '../../assets/img-2.png';
import { Main, Information, ImgContainer } from './style';

export function Sobre() {
  return (
    <>
      <Main>
        <Information>
          <h3>Sobre</h3>
          <h1>Fornecemos os melhores cuidados de saúde</h1>
          <p>
            É um fato estabelecido há muito tempo que um leitor se distrairá com o 
            conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem 
            Ipsum é que ele tem uma distribuição mais ou menos normal de letras, ao contrário. 
            É um fato há muito estabelecido que um leitor se distrairá com o conteúdo legível de 
            uma página ao olhar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma 
            distribuição de letras mais ou menos normal, ao contrário
          </p>
          <button>Consulte mais informação</button>
        </Information>
        <ImgContainer>
          <img src={ imgCard } alt="" />
        </ImgContainer>
      </Main>
    </>
  );
}