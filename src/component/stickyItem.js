import React, { useEffect , useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const StickyItem = (props) => {
  // const [attribute,setAttribute]=useState("");
  // const location = useLocation();
  // const [pathname,setPathname]=useState("")
  // const handleClick=()=>{
  //   if(location.pathname==="/sponsor"){
  //     setAttribute("")
  //   }
  // }
const location = useLocation();
    
  
  useEffect(() => {
  console.log(location.pathname); 
  }, [])
  
  
  return (
    <section>
      <div className="w-full fixed bottom-0 mb-0 left-0">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0">
         {location.pathname ==="/speaker"?(<Link
              to="/speaker"
              className=" hidden md:flex md:p-6 p-6 pt-12 text-center bg-green w-full hover:bg-darkgreen md:border-r-2 md:border-white border-transparent flex items-center justify-center"
            >
              <img
                src="../images/mike.png"
                alt="icon"
                className="md:w-10 w-8 pr-2"
              />
              <button className="text-white lg:text-2xl xl:text-xl text-sm"  >
                Request speaker
              </button>
            </Link>):(<Link
              to="/speaker"
              className="md:p-6 p-4 text-center bg-green w-full hover:bg-darkgreen md:border-r-2 md:border-white border-transparent flex items-center justify-center"
            >
              <img
                src="../images/mike.png"
                alt="icon"
                className="md:w-10 w-8 pr-2"
              />
              <button className="text-white lg:text-2xl xl:text-xl text-sm"  >
                Request speaker
              </button>
            </Link>)}
            
         {location.pathname ==="/sponsor"?( <Link
            to="/sponsor"
            className=" hidden md:flex text-center bg-green md:p-6 p-4 w-full hover:bg-darkgreen flex items-center justify-center"
          >
            <img
              src="../images/money-sack.png"
              alt="icon"
              className="md:w-10 w-8 pr-2"
            />
            <button className="text-white lg:text-2xl xl:text-xl text-sm" >
              Request sponsor
            </button>{" "}
          </Link>):( <Link
            to="/sponsor"
            className="text-center bg-green md:p-6 p-4 w-full hover:bg-darkgreen flex items-center justify-center"
          >
            <img
              src="../images/money-sack.png"
              alt="icon"
              className="md:w-10 w-8 pr-2"
            />
            <button className="text-white lg:text-2xl xl:text-xl text-sm" >
              Request sponsor
            </button>{" "}
          </Link>)}

         
        </div>
      </div>
    </section>
  );
};
