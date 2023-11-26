import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Blogue } from "./blogue/Blogue";
import { Contacto } from "./contacto/Contacto";
import { Departamentos } from "./departamentos/Departamentos";
import { Doutor } from "./doutor/Doutor";
import { Sobre } from "./sobre/Sobre";

export function All() {
  return (
    <>
      <Header />
      <Sobre />
      <Departamentos />
      <Blogue />
      <Doutor />
      <Contacto />
      <Footer />
    </>
  );
}