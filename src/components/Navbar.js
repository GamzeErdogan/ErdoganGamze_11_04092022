import  '../styles/navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul className='nav-flex'>
        <li className='nav-style'>
          <Link to="/">Accueil</Link>
        </li>
        <li className='nav-style'>
          <Link to="/propos">A Propos</Link>
        </li>
    </ul>
  )
}

export default Navbar