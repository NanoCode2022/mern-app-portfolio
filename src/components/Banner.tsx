import logo from '../assets/Diseño sin título (1).png';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Banner = () => {
  return (
    <div className='section z-10' id='home'>
      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row gap-x-12 lg:items-center'>
          <div className='flex-1 text-left text-[1.5rem] sm:text-[3rem]'>
            <p className='text-[1.5rem] font-primary'>Nahuel</p>
            <div className='font-secondary font-semibold uppercase leading-[1]'>
              I am a Web
               <span><TypeAnimation
                sequence={[
                  ' Developer',
                  1000,
                  ' Front-end',
                  2000
                ]}
                speed={50}
                wrapper='span'
                repeat={Infinity}

              /></span>
            </div>
            <div className='flex text-[2rem] gap-5 mt-2'>
                <a href="https://www.instagram.com/nahuel_dev/" target='_blank' className='z-10'><FontAwesomeIcon icon={faInstagram} className=' z-1'/></a>
                <a href="https://github.com/NanoCode2022" target='_blank' className='z-10'><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/nahuel-gerez-6927b0239/" target='_blank' className='z-10'><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>

          <div className=''>
            <img src={logo} alt='logoUser'/>
          </div>

        </div>

    </div>
    </div>
  )
}







{/* <section className='text-[3.5rem] flex-1'>
        <h1><span>Nahuel</span> <br />I am <TypeAnimation
          sequence={[
            'Developer',
            1000,
            'Web Developer',
            2000
          ]}
          speed={50}
          repeat={Infinity}
        /></h1>
      </section>
      <section>
        <img src={logo} alt="person" className=' w-96 rounded-full'/>
      </section> */}
