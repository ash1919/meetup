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
        
        </div>
      </div>
    </header>
  );
};

export default Banner;
