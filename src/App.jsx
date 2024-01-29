import Navbar from "./components/Navbar"
import Inicio from "./components/Inicio"
import Servicios from "./components/Servicios"
import NuestraHuella from "./components/NuestraHuella"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

function App() {

  return (
    <div className=" min-h-screen bg-gradient-to-bl from-violet-700 to-violet-950" >
     <Navbar />
     <Inicio />
     <Servicios />
     <NuestraHuella />
     <Contacto />
     <Footer />
    </div>
  )
}

export default App
