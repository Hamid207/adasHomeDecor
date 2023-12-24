import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layouts;
