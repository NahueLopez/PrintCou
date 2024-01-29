import logo from "../assets/logo.png"


function MobileNavbar({ isOpen,setIsMenuOpen }) {

  const hadleScroll = (sectionId) => {
    if(isOpen) setIsMenuOpen(false)
    document.getElementById(sectionId).scrollIntoView({ behavior:"smooth"})
  }

  return (
    <div className="w-screen fixed top-40 text-center z-50 ">
      <div className="h-screen flex flex-col p-8 ">
        <img src={logo} alt="logo" className="w-16 object-contain mb-8 hidden"/>
      
        <ul>
            <li className="mb-5">
                <a className="menu-item" onClick={()=>hadleScroll("inicio")}>Inicio</a>
            </li>
            <li className="mb-5">
                <a className="menu-item" onClick={()=>hadleScroll("servicios")}>Servicios</a>
            </li>
            <li className="mb-5">
                <a className="menu-item" onClick={()=>hadleScroll("nuestra-huella")}>Nuestra Huella</a>
            </li>
            <li className="mb-5">
                <a className="menu-item"onClick={()=>hadleScroll("contacto")}>Contacto</a>
            </li>
            
        </ul>

      </div>

      <div 
        onClick={() => { setIsMenuOpen(false) }} 
        className="w-screen h-screen bg-gray-600 bg-opacity-90 fixed top-0 -z-10">
      </div>
      
    </div>
  )
}

export default MobileNavbar
