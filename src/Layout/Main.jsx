import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar";
import Footer from "../Pages/Home/Shared/Footer";

function Main() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Main;
