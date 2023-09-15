import React from "react";

function Navbar() {
  return (
    <>
      <nav className="p-6 pl-0 bg-[#221F1A] w-full nav-bar sticky top-0 z-50 font-dmsans text-white">
        <div className="sm:container container  flex items-center space-x-12">
          <div>
            <figure>
              <a href="/">
                <img src="../images/logo.png" alt="meetup" />
              </a>
            </figure>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
