import React from "react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-[#221F1A]">
      <div
        className={
          location.pathname === "/speaker" || location.pathname === "/sponsor"
            ? "flex flex-col md:flex-row items-center space-x-8 text-white w-full sm:container p-6 mt-24 md:mb-20 mb-14 sm:mb-14 lg:mb-20 xl:mb-20"
            : "flex flex-col md:flex-row items-center space-x-8 text-white w-full sm:container p-6 mt-24 md:mb-20 mb-28 sm:mb-28 xl:mb-20"
        }
      >
        <a href="/">
          <img src="../images/logo.png" alt="meetup" />
        </a>
        <div className="flex flex-col md:flex-row pt-6 text-center md:pt-0 text-white text-xs xl:text-sm items-center justify-center md:justify-between w-full">
          <div className="pb-2 md:pb-0">
            <p className="sm:text-center sm:text-start md:text-left">
              Terms of Use | Privacy Policy
            </p>
            <p className="pt-1 text-darkgrey sm:px-48 md:px-0">
              © Meetup Pvt. Ltd. 2022. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-6 h-4 pt-4 md:pt-0 pb-6 md:pb-0">
            <a href="/" target="_blank">
              <img
                src="../images/youtube-nav.png"
                alt="linkdin"
                className="w-6"
              />
            </a>
            <a href="/" target="_blank">
              <img
                src="../images/twitter-nav.png"
                alt="you-tube"
                className="w-5"
              />
            </a>
            <a
             href="/"
              target="_blank"
            >
              <img
                src="../images/linkdin-nav.png"
                alt="facebook"
                className="w-4"
              />
            </a>
            <a href="/" target="_blank">
              <img src="../images/fb-nav.png" alt="twitter" className="w-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
