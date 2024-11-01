import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar";
import Footer from "../Pages/Home/Shared/Footer";

function Main() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-2">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Main;
