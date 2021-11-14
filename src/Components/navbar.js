import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar () {
    return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 content-between md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 mr-3 text-xl"> Camila Mansilla </a>          
       </a>
         <img src="./cmlogo.png" width="35px" height="35px" className="mr-3"/>
      
        <a  title="linkedin"href="https://www.linkedin.com/in/camila-mans/"> <img src="https://icon-library.com/images/linkedin-icon-png-black/linkedin-icon-png-black-17.jpg" 
          width="40px" height="40px" /> </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          </nav>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-1 py-1 px-3  focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
