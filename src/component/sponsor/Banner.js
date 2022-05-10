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
        <h1 className="bg-transparent font-OpenSans_extrabold text-3xl md:text-4xl text-gray-100 font-extrabold my-10"> Request sponsorship </h1>
        <div className="banner bg-transparent">
            <img src="../images/business-credit-loan 1.png" alt="img" className="mx-auto bg-transparent"/>
        </div>
      </div>
      
  </div>
</div>   
</header>
  );
};

export default Banner;