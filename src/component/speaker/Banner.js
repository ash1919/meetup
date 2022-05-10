import React from "react";

const Banner = () => {
  return (
    <header className="header clearfix">
      <div className="mx-auto w-[90%] md:w-[80%] lg:w-[70%] mb-10">
        <div className="bg-center bg-bgsmall sm:bg-bgimage bg-center bg-no-repeat text-center pt-24 lg:pt-32">
          <div className="mx-auto clearfix bg-transparent">
            <h1 className="bg-transparent font-OpenSans_extrabold text-3xl md:text-4xl text-gray-100 font-extrabold my-10">
              {" "}
              Request speaker{" "}
            </h1>
            <div className="banner bg-transparent">
              <img
                src="/images/Group.png"
                alt="img"
                className="mx-auto bg-transparent"
              />
            </div>
          </div>
          <div className="select-form mt-14 mb-4 px-3">
            <div className="container">
              <div className="select-box relative flex w-[100%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto text-left flex-col">
                <select
                  className="selectOption minimal py-4 w-[100%] xl:w-[98%] bg-grayform text-white px-4 mb-3 rounded border-none font-medium font-DMSansmedium"
                  id=""
                  placeholder=""
                >
                  <option className="opt font-DMSansmedium">
                    {" "}
                    Speaker requesting for{" "}
                  </option>
                  <option className="opt font-DMSansmedium">
                    {" "}
                    Speaker requesting for{" "}
                  </option>
                  <option className="opt font-DMSansmedium">
                    {" "}
                    Speaker requesting for{" "}
                  </option>
                </select>
                <div className="search-box">
                  <input
                    type="text"
                    className="text-white bg-focus w-full py-[12px] px-[16px] z-99 focus:outline-none opacity-0 delay-75"
                    placeholder="Start Typing..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
