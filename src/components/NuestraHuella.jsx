import img from "../assets/bg5.png"
import calidad from "../assets/calidad.png"
import creatividad from "../assets/creatividad.png"
import eficiencia from "../assets/eficiencia.png"


function NuestraHuella() {
  return (
    <section id="nuestra-huella" className="py-20">
        <main className='max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto px-6 lg:flex-row pb-20'>
            <div className='flex flex-col justify-center md:w-1/3'>
                <img className='img-home' src={img} alt="Imagen 1" />
            </div>

            <div className='flex-1 text-center md:text-left md:w-2/3'>
                <h2 className='text-3xl font-bold text-gradient md:text-4xl lg:text-5xl text-center mb-10'>
                Nuestra Huella
                </h2>
                <p className='text-white'>
                En <strong className='text-gradient'>PrintCou</strong>, no solo creamos tecnología, sino que forjamos una huella única en el mundo digital.
                Nos apasiona cada línea de código, cada diseño meticuloso, y encontramos alegría en el proceso creativo.
                Compartir conocimientos es nuestra fuerza motriz, apoyar nuevas propuestas es nuestra vocación y aportar ideas innovadoras es nuestro compromiso.
                En cada proyecto, dejamos una huella que va más allá de la programación y el diseño; dejamos una marca de pasión, colaboración y creatividad.
                </p>
            </div>
        </main>

        <main className="bg-gradient-to-t from-cyan-400 to-cyan-700 shadow-xl py-5 max-h-screen">
            <h2 className='text-3xl font-bold text-gradient md:text-4xl lg:text-5xl text-center mb-10'>
                Nuestros Valores
            </h2>

            <div className="max-w-screen-xl flex flex-col md:flex-row gap-4 justify-center items-center text-center md:mx-auto mx-5">

                <div className="text-center items-center justify-center flex flex-col">
                <img src={calidad} alt="calidad" className="w-[60px] h-[60px]" />
                <h3 className="text-black font-bold my-4 underline underline-offset-4 text-2xl">Calidad</h3>
                <p className="text-black">La calidad es nuestro sello distintivo. Cada línea de código y diseño que creamos refleja nuestro compromiso con la excelencia y la satisfacción del cliente.</p>
                </div>

                <div className="text-center items-center justify-center flex flex-col">
                <img src={creatividad} alt="creatividad" className="w-[60px] h-[60px]" />
                <h3 className="text-black font-bold my-4 underline underline-offset-4 text-2xl">Creatividad</h3>
                <p className="text-black">Transformamos ideas en realidad con un toque creativo único. Desde el diseño visual hasta las soluciones más innovadoras, nuestra creatividad impulsa resultados sorprendentes.</p>
                </div>

                <div className="text-center items-center justify-center flex flex-col">
                <img src={eficiencia} alt="eficiencia" className="w-[60px] h-[60px]" />
                <h3 className="text-black font-bold my-4 underline underline-offset-4 text-2xl">Efectividad</h3>
                <p className="text-black">La efectividad es nuestro lema. Nos destacamos por brindar soluciones que no solo cumplen con los objetivos, sino que lo hacen de manera eficiente y exitosa.</p>
                </div>
            </div>
        </main>
    
    </section>
    
  )
}

export default NuestraHuella
