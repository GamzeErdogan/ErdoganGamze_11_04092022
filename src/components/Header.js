import LOGO from "../assets/LOGO.png";
import Navbar from "./Navbar";
import '../styles/header.css';

 function Header() {
  return (
    <div className="header-flex">
         <img src= {LOGO} alt='Logo of the Kasa'/><Navbar />
    </div>
  )
}
export default Header