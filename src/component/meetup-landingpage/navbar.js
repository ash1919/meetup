import React from "react";

function Navbar() {
  return (
    <>
      <nav className="p-6 pl-0 bg-[#221F1A] w-full nav-bar sticky top-0 z-50 font-dmsans text-white">
        <div className="sm:container container  flex items-center space-x-12">
          <div>
            <figure>
              <img src="../images/ineuronLogo.png" alt="Ineuron" />
            </figure>
          </div>
          <div className="hidden md:flex space-x-14 ">
            <a
              href="https://courses.ineuron.ai/"
              target="_blank"
              className="hover:text-green"
            >
              Course library
            </a>
            <a
              href="https://one-neuron.ineuron.ai/"
              target="_blank"
              className="hover:text-green"
            >
              One Neuron
            </a>
            <a
              href="https://internship.ineuron.ai/"
              target="_blank"
              className="hover:text-green"
            >
              Internship
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
