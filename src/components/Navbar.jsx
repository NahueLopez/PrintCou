import { RiMenu4Line, RiCloseFill } from "react-icons/ri"
import { useState } from "react"
import { Link } from "react-scroll"
import { useLocation } from 'react-router-dom';
import MobileNavbar from "./MobileNavbar"
import logo from "../assets/logo.png"


function Navbar() {

    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

   

  return (

    <>

        {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> }
        
        <header className="sticky top-0 z-10">
            <nav className="max-w-screen-xl mx-auto py-4 px-6 ">
                <div className="flex items-center justify-between ">
                    <img src={logo} alt="Logo" className="h-11 w-auto object-contain"/>

                    <ul className="hidden md:flex md:gap-14 ">
                        <li>
                            <Link to="inicio" smooth spy offset={-80} className={`menu-item ${location.pathname.includes('inicio') ? 'active' : ''}`}>inicio</Link>
                        </li>

                        <li>
                            <Link to="servicios" smooth spy offset={-80} className={`menu-item ${location.pathname.includes('servicios') ? 'active' : ''}`}>Servicios</Link>
                        </li>

                        <li>
                            <Link to="nuestra-huella" smooth spy offset={-80} className={`menu-item ${location.pathname.includes('nuestra-huella') ? 'active' : ''}`}>Nuestra Huella</Link>
                        </li>
                        <li>
                            <Link to="contacto" smooth spy offset={-80} className={`menu-item ${location.pathname.includes('contacto') ? 'active' : ''}`}>Contacto</Link>
                        </li>
                    </ul>
                    
                    <button 
                        onClick={() => { setIsMenuOpen(true) }} 
                        className="w-11 h-11 text-cyan-300 text-4xl flex items-center justify-center rounded md:hidden z-50">                  
                        { isMenuOpen ?<RiCloseFill/> : <RiMenu4Line /> }
                    </button>
                </div>
            </nav>
        
        </header>
    </>
  )
}

export default Navbar
