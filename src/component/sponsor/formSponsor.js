import React from "react";
import {Link} from "react-router-dom";
const FormSponsor = () => {
  //   const [header] = React.useState({
  //   });
  //   const [state] = React.useState([
  //   ]);
  return (
    <div className="all-form mx-auto w-[90%] md:w-[80%] lg:w-[70%] shadow-xl mb-10">
      <form action="./sponsorship.html" className="mainform">
        <div className="sm:flex both-side-form colorWhite">
          <div className="left-form w-[100%] md:w-[50%]">
            <div className="px-3 my-5 text-center">
              <label
                htmlFor="company"
                className="tracking-wide text-gray-200 mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-OpenSansbold"
              >
                {" "}
                Event details{" "}
              </label>
              <input
                type="text"
                className="w-full bg-grayform text-white rounded py-4 px-4 border-none mt-10 font-medium font-DMSansmedium"
                id=""
                placeholder="Org / College name"
              />
            </div>
            <div className="px-3 my-5">
              <input
                type="text"
                className="w-full bg-grayform text-white rounded py-4 px-4 border-none font-medium font-DMSansmedium"
                id=""
                placeholder="Address"
              />
            </div>
            <div className="xl:flex">
              <div className="px-3 w-[100%]">
                <input
                  type="date"
                  className="w-[100%] bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                  id=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="right-form w-[100%] md:w-[50%]">
            <div className="px-3 my-5 text-center">
              <label
                htmlFor="title"
                className="tracking-wide text-gray-200 mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-OpenSansbold"
              >
                {" "}
                Point of contact{" "}
              </label>
              <input
                type="text"
                className="w-full bg-grayform text-white rounded py-4 px-4 border-none mt-10 font-medium font-DMSansmedium"
                id=""
                placeholder="Name"
              />
            </div>
            <div className="px-3 my-2">
              <input
                type="number"
                className="w-full  bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                id=""
                placeholder="Enter your no."
              />
            </div>
            <div className="px-3 my-2">
              <input
                type="email"
                className="w-full  bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                id=""
                placeholder="Email"
              />
            </div>
          </div>
        </div>

        <div className="attend-button sm:w-full text-center mb-18 md:mb-20 pb-8 md:pb-20 sm:pb-10 mt-10 sm:mb-10">
          <button className="flex items-center mx-auto bg-green text-white py-4 px-14 hover:bg-darkgreen  border-none rounded-lg font-medium font-DMSansmedium">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>

       <div className="bottom-button z-10 block sm:flex fixed left-0 w-full bottom-0 rounded-none">
        <div className="w-[100%] md:w-[50%]  bg-green  hover:bg-darkgreen text-center items-center md:border-r-2 md:border-white border-transparent ">
          <button className="w-[100%] flex justify-center items-center mx-auto bg-green-600 text-sm text-white py-6 px-10 hover:bg-green-800 border-none font-medium font-DMSansmedium">
            {" "}
            <img
              src="/images/mike.png"
              className="md:w-10 w-8 pr-2"
              alt='icon'
            />{" "}
           <Link to="/sponsor"><p className="text-white lg:text-2xl xl:text-xl text-sm">
                Request speaker
              </p>{" "}</Link> 
          </button>
        </div>
        <div className="md:block bg-green  hover:bg-darkgreen hidden w-[100%] md:w-[50%] text-center items-center rounded-none">
          <button className="w-[100%] flex justify-center items-center mx-auto hover:bg-green-800 text-sm text-white py-6 px-10 bg-green-600 border-none font-medium font-DMSansmedium">
            {" "}
            <img
              src="/images/money-sack.png"
              className="md:w-10 w-8 pr-2"
              alt='icon'
            />{" "}
            <p className="text-white lg:text-2xl xl:text-xl text-sm">
                Request sponsorship
              </p>{" "}
          </button>
        </div>
      </div> 
    </div>
  );
};

export default FormSponsor;
