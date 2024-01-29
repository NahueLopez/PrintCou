
function Contacto() {
  return (
    <div id="contacto" className='py-16 mx-auto max-w-screen-xl md:h-screen  text-center'>
    <div className="mb-10 mx-4">
        <h2 className='text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem] text-center'>
            Contáctenos
        </h2>
        <p className='text-white py-4'>
            Estamos aquí para atenderte. Valoramos tus comentarios y sugerencias, 
            ya que nos ayudan a mejorar y brindarte el mejor servicio posible.
        </p>
        <strong className="text-white">
            ¡No dudes en ponerte en contacto con nosotros!
        </strong>
    </div>
    
    <div className="mx-4">

  
        <form className="max-w-screen-md  mx-auto">

        <div className="grid md:grid-cols-2 md:gap-6">
            
            <div className="relative z-0 w-full mb-5 group">
                <label 
                    htmlFor="nombre"
                    className="text-white "
                >
                    Nombre 
                </label>
                <input 
                    type="text" 
                    name="nombre" 
                    id="nombre"  
                    className="w-full border-gradient p-2 caret-white focus:border-transparent focus:ring-0 outline-none"
                    placeholder="Nombre" 
                    required 
                />
               
            </div>

            <div className="relative z-0 w-full mb-5 group">
            <label 
                htmlFor="email" 
                className="text-white "
            >
                Email
            </label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                className="w-full border-gradient p-2 caret-white focus:border-transparent focus:ring-0 outline-none"
                placeholder="Email" 
                required 
            />
           
            </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
        <label 
            htmlFor="asunto" 
            className="text-white "
            >
                Asunto
            </label>
        <input 
            type="text" 
            name="asunto" 
            id="asunto" 
            className="w-full border-gradient p-2 caret-white focus:border-transparent focus:ring-0 outline-none"
            placeholder="Asunto" 
            required 
        />
      
        </div>
        <div className="relative z-0 w-full mb-5 group">
        <label 
                htmlFor="mensaje" 
                className="text-white "
                >
                    Mensaje
            </label>
            <textarea 
                name="mensaje" 
                id="mensaje" 
                className="w-full border-gradient p-2 caret-white focus:border-transparent focus:ring-0 outline-none"
                placeholder="Mensaje" 
                required 
            />
        
        </div>
        
        
        <button 
            type="submit" 
            className="text-white px-10 py-4 btn-gradient rounded-xl "
        >
            Enviar

        </button>

        </form>
        </div>
    </div>
  )
}

export default Contacto
