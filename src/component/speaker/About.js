import React from "react";
const About = () => {
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
                for="company"
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
            <div className="xl:flex my-5">
              <div className="px-3 w-[100%] xl:w-[50%] my-2 xl:my-0">
                <select
                  className="selectOption minimal py-4 w-[100%] xl:w-[100%] bg-grayform text-white px-4 mb-3 rounded border-none font-medium font-DMSansmedium"
                  id=""
                  placeholder=""
                >
                  <option className="font-DMSansmedium">
                    {" "}
                    Mode of the event{" "}
                  </option>
                  <option className="font-DMSansmedium">
                    {" "}
                    Mode of the event{" "}
                  </option>
                  <option className="font-DMSansmedium">
                    {" "}
                    Mode of the event{" "}
                  </option>
                </select>
              </div>
              <div className="px-3 w-[100%] xl:w-[50%] xl:text-right my-2 xl:my-0">
                <input
                  type="date"
                  className="w-[100%] xl:w-[98%] bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                  id=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="right-form w-[100%] md:w-[50%]">
            <div className="px-3 my-5 text-center">
              <label
                for="title"
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

        <div className="attend-wrap mx-auto text-center sm:flex sm:flex-wrap justify-center">
          <h1 className="my-6 text-center text-gray-300 mr-0 sm:mr-2 md:mr-5 text-[16px] font-bold font-OpenSansbold">
            {" "}
            No.of attendees:{" "}
          </h1>
          <div className="attend block sm:flex w-[100px] sm:w-auto mx-auto sm:mx-1">
            <div className="flex items-center mr-0 sm:mr-3 md:mr-5 my-2 sm:my-0">
              <input
                id="radio1"
                type="radio"
                name="radio"
                className="hidden mr-4"
                checked
              />
              <label
                for="radio1"
                className="flex items-center cursor-pointer text-white font-medium font-DMSansmedium"
              >
                <span className="w-4 h-4 inline-block rounded-full border border-grey mr-2 md:mr-4"></span>
                0 - 50{" "}
              </label>
            </div>

            <div className="flex items-center mr-0 sm:mr-3 md:mr-5 my-2 sm:my-0">
              <input
                id="radio2"
                type="radio"
                name="radio"
                className="hidden mr-4"
              />
              <label
                for="radio2"
                className="flex items-center cursor-pointer text-white font-medium font-DMSansmedium"
              >
                <span className="w-4 h-4 inline-block rounded-full border border-grey mr-2 md:mr-4"></span>
                50 - 100{" "}
              </label>
            </div>

            <div className="flex items-center mr-0 sm:mr-3 md:mr-5 my-2 sm:my-0">
              <input
                id="radio3"
                type="radio"
                name="radio"
                className="hidden mr-4"
              />
              <label
                for="radio3"
                className="flex items-center cursor-pointer text-white font-medium font-DMSansmedium"
              >
                <span className="w-4 h-4 inline-block rounded-full border border-grey mr-2 md:mr-4"></span>
                100 - 200{" "}
              </label>
            </div>

            <div className="flex items-center mr-0 sm:mr-3 md:mr-5 my-2 sm:my-0">
              <input
                id="radio4"
                type="radio"
                name="radio"
                className="hidden mr-4"
              />
              <label
                for="radio4"
                className="flex items-center cursor-pointer text-white font-medium font-DMSansmedium"
              >
                <span className="w-4 h-4 inline-block rounded-full border border-grey mr-2 md:mr-4"></span>
                200+{" "}
              </label>
            </div>
          </div>
        </div>

        <div className="attend-button sm:w-full text-center mb-20 pb-20 sm:pb-10 mt-10 sm:mb-10">
          <button className="flex items-center mx-auto bg-green-600 text-white py-4 px-14 hover:bg-green-800 border-none rounded-lg font-medium font-DMSansmedium">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>

      <div className="bottom-button z-10 block sm:flex fixed left-0 w-full bottom-0 rounded-none">
        <div className="w-[100%] sm:w-[50%] text-center items-center border-r-2 rounded-none">
          <button className="w-[100%] flex justify-center items-center mx-auto bg-green-600 text-sm text-white py-6 px-10 hover:bg-green-800 border-none font-medium font-DMSansmedium">
            {" "}
            <img
              src="../images/mike 2.png"
              width="25px"
              className="bg-transparent"
            />{" "}
            Request speaker{" "}
          </button>
        </div>
        <div className="sm:block hidden w-[100%] sm:w-[50%] text-center items-center rounded-none">
          <button className="w-[100%] flex justify-center items-center mx-auto hover:bg-green-800 text-sm text-white py-6 px-10 bg-green-600 border-none font-medium font-DMSansmedium">
            {" "}
            <img
              src="../images/money-sack 1.png"
              width="25px"
              className="bg-transparent"
            />{" "}
            Request sponsorship{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
