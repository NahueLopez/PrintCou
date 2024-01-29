import home from '../assets/home.png';

function Inicio() {
  return (
       <section id="inicio" className=' max-w-screen-xl h-screen flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row '>
       <div className='flex-1 text-center md:text-left md:w-2/3'>
           {/*
           <h2 className='text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]'>
              Donde la Visión se Convierte en Código, y las Ideas Cobran Vida.
            </h2>
            */}

            <h3  className='text-1xl font-bold mb-1 md:text-2xl md:leading-[1rem] lg:text-3xl lg:leading-[1rem] text-white'>
              Tu Historia, Nuestro Arte
            </h3>
            <h2 className='text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem] text-white'>
              Páginas Web que Dejan Huella.
            </h2>
            {/*}
            <h2 className='text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]'>
              Ideas que Inspiran, Diseño que Resalta.
            </h2>
            */} 
           <p className='text-lg leading-6 text-white 0 mb-6 md:w-4/5'>        
               Resaltando la belleza, convirtiendo los momentos en experiencias. 
               Explore nuestra excepcional artesanía e imagine su belleza perfecta.
           </p>

       </div>

       <div className='flex flex-col justify-center md:w-1/3'>
           <img className='img-home ' src={home} alt="Imagen 1"/>
       </div>
   </section>
  )
}

export default Inicio
