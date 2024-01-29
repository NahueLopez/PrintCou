
const CardServicios = ({icono, titulo , texto}) => {
  return (
    <div className=" relative flex flex-col mt-6  bg-gradient-to-b from-cyan-400 to-cyan-700 shadow-md bg-clip-border rounded-xl max-w-xs mx-auto">
        <div className="p-6">
            <img src={icono} alt={titulo} className="w-12 h-12 mb-4" />

            <h5 className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal  underline underline-offset-8">
                {titulo}
            </h5>
            <p className="block font-sans font-semibold text-base antialiased  leading-relaxed  ">
                {texto}
            </p>
        </div>        
    </div> 
  )
}

export default CardServicios
