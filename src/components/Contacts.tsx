import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export const Contacts = () => {
  return (
    <div className="flex justify-center text-[3rem] gap-5 z-10" id="contacts">
      <a href="https://www.instagram.com/nahuel_dev/" target='_blank' className='z-10'><FontAwesomeIcon icon={faInstagram}/></a>
      <a href="https://github.com/NanoCode2022" target='_blank' className='z-10'><FontAwesomeIcon icon={faGithub}/></a>
      <a href="https://www.linkedin.com/in/nahuel-gerez-6927b0239/" target='_blank' className='z-10'><FontAwesomeIcon icon={faLinkedin}/></a>
    </div>
  )
}
