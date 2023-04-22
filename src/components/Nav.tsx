import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faHome,faBriefcase,faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
export const Nav = () => {

  return (
    <nav className="fixed top-2 lg:bottom-8 w-full overflow-hidden'">
      <div className="container mx-auto flex justify-center ">
        <div className=" w-72 text-[1.4rem] flex justify-center bg-black/20 text-white/50 py-2 rounded-full gap-8">
          <Link to='home' activeClass="active"  smooth={true} spy={true}>
          <FontAwesomeIcon  icon={faHome}/>
          </Link>
          <Link to='about' activeClass="active" smooth={true} spy={true}>
            <FontAwesomeIcon  icon={faUser}/>
          </Link>
          <Link to="projects" activeClass="active" smooth={true} spy={true}>
            <FontAwesomeIcon  icon={faBriefcase}/>
          </Link>
          <Link to="contacts" activeClass="active" smooth={true} spy={true}>
            <FontAwesomeIcon  icon={faPhone}/>
          </Link>
        </div>
      </div>
    </nav>
  )
}
