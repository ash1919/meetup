import React from "react";
// import {
//   // FAfa-caret-down,
// } from "react-icons/fa";
const Banner = () => {
  // const [state] = React.useState({
  //   image: "/images/group.png",
  // });

  return (
<header className="header clearfix">
<div className="mx-auto w-[90%] md:w-[80%] lg:w-[70%] mb-10">
  <div className="bg-bgsmall sm:bg-bgimage bg-no-repeat bg-contain text-center pt-24 lg:pt-32">
      <div className="mx-auto clearfix bg-transparent">
        <h1 className="bg-transparent font-OpenSans_extrabold text-3xl md:text-4xl text-gray-100 font-extrabold my-10"> Request speaker </h1>
        <div className="banner bg-transparent">
            <img src="../images/Group.png" alt="img" className="mx-auto bg-transparent"/>
        </div>
      </div>
      <div className="select-form mt-14 mb-4 px-3">
          <div className="container">
            <div className="select-box relative flex w-[100%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto text-left flex-col">
              {/* <div className="options-container bg-grayform text-gray-200 opacity-0 max-h-0 rounded-md overflow-hidden delay-75 order-1"> */}

              <select className="selectOption minimal py-4 w-[100%] xl:w-[98%] bg-grayform text-white px-4 mb-3 rounded border-none font-medium font-DMSansmedium" id="" placeholder="">
                            <option className="font-DMSansmedium"> Speaker requesting for </option>
                            <option className="font-DMSansmedium"> Speaker requesting for </option>
                            <option className="font-DMSansmedium"> Speaker requesting for </option>
              </select>

                {/* <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="automobiles" name="category" />
                  <label for="automobiles" className="cursor-pointer font-DMSansmedium font-medium">Automobiles</label>
                </div>
      
                <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="film" name="category" />
                  <label for="film" className="cursor-pointer font-DMSansmedium font-medium">Film & Animation</label>
                </div>   
                <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="science" name="category" />
                  <label for="science" className="cursor-pointer font-DMSansmedium font-medium">Science & Technology</label>
                </div>
      
                <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="art" name="category" />
                  <label for="art" className="cursor-pointer font-DMSansmedium font-medium">Art</label>
                </div>
      
                <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="music" name="category" />
                  <label for="music" className="cursor-pointer font-DMSansmedium font-medium">Music</label>
                </div>
      
                <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="travel" name="category" />
                  <label for="travel" className="cursor-pointer font-DMSansmedium font-medium">Travel & Events</label>
                </div>
      
                <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="sports" name="category" />
                  <label for="sports" className="cursor-pointer font-DMSansmedium font-medium">Sports</label>
                </div> <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="news" name="category" />
                  <label for="news" className="cursor-pointer font-DMSansmedium font-medium">News & Politics</label>
                </div>
      
                <div className="option hover:bg-focus">
                  <input type="radio" className="radio hidden" id="tutorials" name="category" />
                  <label for="tutorials" className="cursor-pointer font-DMSansmedium font-medium">Tutorials</label>
                </div> </div>
                 <div className="selected flex justify-between bg-grayform text-gray-200 relative border-0 rounded-md cursor-pointer font-medium">
                <p className="font-DMSansmedium font-medium bg-transparent"> Speaker requesting for </p>
              </div> */}
      
              <div className="search-box">
                <input type="text" className="text-white bg-focus w-full py-[12px] px-[16px] z-99 focus:outline-none opacity-0 delay-75" placeholder="Start Typing..." />
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