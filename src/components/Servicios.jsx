import { DATA_SERVICIOS } from "../utils/data.js"
import CardServicios from "./CardServicios"

function Servicios() {


    return (
        <section id="servicios" className='py-16 mx-auto max-w-screen-xl md:h-screen  text-center'>
            <h2 className='text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem] text-center'>
                Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-5">

                    {DATA_SERVICIOS.map((servicio) => (
                        <CardServicios
                            key={servicio.titulo} 
                            icono={servicio.icono}
                            titulo={servicio.titulo}
                            texto={servicio.texto}
                        />
                    ))}

            </div>
        </section>
  )
}

export default Servicios
