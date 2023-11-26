import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Outlet } from "react-router";
// import { MainCarousel } from "./Carousel";
export function Layout() {
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}