import React, { useState } from 'react'
import searchimg from '../assets/webs/buscadorReact.png'
import ricky from '../assets/webs/rickandmorty.png'
import cardInterative from '../assets/webs/interativeCard.png'

export const Projects = () => {

  const [projectsList,setProjectsList] = useState([
    {name:'Buscador de Imagenes',image:searchimg,description:'App creada con ReactJS consumiendo la api de Pixabay, permite buscar imagenes.',github:'https://github.com/NanoCode2022/Buscador-Img-API-pixabay-',web:'https://practica-buscadorapipixabay.web.app/'},
    {name:'Api ricky and morty',image:ricky,description:'App creada en AgularJS consumiendo la api de rickandmorty, con buscador de personajes.',github:'https://github.com/NanoCode2022/rickandmortyApi',web:'https://practica-api-rickandmorty.web.app/'},
    {name:'tarjeta Interactiva',image:cardInterative,description:'App creada en JavaScript basicamente es un simulador de llenado de una tarjeta',github:'https://github.com/NanoCode2022/InterativeCard',web:'https://nanocode2022.github.io/InterativeCard/'},
  ])
  return (
    <div className="section z-10" id='projects'>
        <div className='container mx-auto'>
          <p className='text-center mb-10 text-[2rem]'>PROJECTS</p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
            {projectsList.map(project=>(
              <div key={project.web} className='group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                <div key={project.name} className='h-72 w-96 relative card'>
                  <img src={project.image} alt={project.name} className='w-full h-full'/>

                  
                  <div className='card-body absolute top-0 bottom-0 w-full bg-black/60 h-full backdrop-blur-sm opacity-0 transition-all duration-500 text-center p-4 font-secondary'>
                    <h1 className='text-[1.5rem] font-tertiary'>{project.name}</h1>
                    <p className='text-[1.2rem]'>{project.description}</p>
                    <span className='flex gap-5 justify-center mt-5'>
                      <a href={project.github} target='_blank'><button className='button'>Github</button></a>
                      <a href={project.web} target='_blank'><button className='button'>Web</button></a>
                    </span>
                  </div>
                </div>
              </div>
               
                
            ))}
          </div>
      </div>
    </div>
  )
}
