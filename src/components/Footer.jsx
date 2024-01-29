import logo from "../assets/Logo.png"
import { Link } from "react-scroll"
import { useLocation } from 'react-router-dom';


function Footer() {
    const location = useLocation()

  return (
        <footer className=" bottom-0 shadow-md bg-footer w-full">
            <div className="w-full  p-4 md:py-8 max-w-screen-xl  mx-auto ">
                <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse ">
                            <img src={logo} alt="Logo" className="h-11 w-auto object-contain "/>
                        </Link>
                        <ul className="flex flex-col md:flex-row text-center   md:gap-14 ">
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
                </div>
                <hr className="my-6 border-gray-700 lg:my-8" />
                <span className="block text-sm text-black sm:text-center font-semibold">copyright © 2023 Todos los Derechos Reservados.</span>
            </div>
        </footer>

  )
}

export default Footer
