import React from "react";
import ReactDOM from 'react-dom/client';

export default function ListOfSpeakers({children}) {
  return (
    <div className="sm:container container">
        <h2
            className="text-4xl md:text-5xl font-bold font-opensans text-center text-white mt-24"
          >
            List of Speakers
          </h2>

          {children}

      <div className="flex-col pt-20 gap-3 items-center justify-center">
        <div className="flex flex-col mt-10 md:flex-row md:space-x-12 gap-9 lg:gap-9 xs:gap-8 mb-6">
          <div className="flex flex-col items-center justify-center p-6 spcae-y-12 rounded-lg md:w-1/3 speaker-card bg-cardbg shadow-1md">
            <img
              src="../images/speakerpic.png"
              alt="speaker-pic"
              className="lg:w-32 pt-8"
            />
            <h5 className="md:text-xl text-md font-bold text-white pt-4">
              Lorem Ipsum
            </h5>
            <p className="md:text-md text-sm text-secondary pb-8">
              200K Friends
            </p>
            <p className="md:text-md text-base text-silver pb-8 text-center">
              We are proud of our achievers to have proved their success through
              hard-work and dedication which has enabled them
            </p>
            <p className="text-xs md:text-base text-silver pb-2 text-center">
              Social media links
            </p>
            <div className="flex space-x-3 pl-0 items-center mb-12">
              <a
                href="https://www.linkedin.com/company/ineuron-ai/"
                target="_blank"
              >
                <img
                  src="../images/linkdin-svg.svg"
                  alt="linkdin"
                  className="w-5"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCb1GdqUqArXMQ3RS86lqqOw"
                target="_blank"
              >
                <img
                  src="../images/yt-svg.svg"
                  alt="you-tube"
                  className="w-8"
                />
              </a>
              <a href="https://www.facebook.com/ineuronai" target="_blank">
                <img
                  src="../images/fb-svg.svg"
                  alt="facebook"
                  className="w-5"
                />
              </a>
              <a href="https://twitter.com/iNeuronAi" target="_blank">
                <img
                  src="../images/twitter-svg.svg"
                  alt="twitter"
                  className="w-5"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 spcae-y-12 rounded-lg md:w-1/3 bg-cardbg speaker-card shadow-1md">
            <img
              src="../images/speakerpic.png"
              alt="speaker-pic"
              className="lg:w-32 pt-8"
            />
            <h5 className="md:text-xl text-md font-bold text-white pt-4">
              Lorem Ipsum
            </h5>
            <p className="md:text-md text-sm text-secondary pb-8">
              200K Friends
            </p>
            <p className="md:text-md text-base text-silver pb-8 text-center">
              We are proud of our achievers to have proved their success through
              hard-work and dedication which has enabled them
            </p>
            <p className="text-xs md:text-base text-silver pb-2 text-center">
              Social media links
            </p>
            <div className="flex space-x-3 pl-0 items-center mb-12">
              <a
                href="https://www.linkedin.com/company/ineuron-ai/"
                target="_blank"
              >
                <img
                  src="../images/linkdin-svg.svg"
                  alt="linkdin"
                  className="w-5"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCb1GdqUqArXMQ3RS86lqqOw"
                target="_blank"
              >
                <img
                  src="../images/yt-svg.svg"
                  alt="you-tube"
                  className="w-8"
                />
              </a>
              <a href="https://www.facebook.com/ineuronai" target="_blank">
                <img
                  src="../images/fb-svg.svg"
                  alt="facebook"
                  className="w-5"
                />
              </a>
              <a href="https://twitter.com/iNeuronAi" target="_blank">
                <img
                  src="../images/twitter-svg.svg"
                  alt="twitter"
                  className="w-5"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 spcae-y-12 rounded-lg md:w-1/3 speaker-card  bg-cardbg shadow-1md">
            <img
              src="../images/speakerpic.png"
              alt="speaker-pic"
              className="lg:w-32 pt-8"
            />
            <h5 className="md:text-xl text-md font-bold text-white pt-4">
              Lorem Ipsum
            </h5>
            <p className="md:text-md text-sm text-secondary pb-8">
              200K Friends
            </p>
            <p className="md:text-md text-base text-silver pb-8 text-center">
              We are proud of our achievers to have proved their success through
              hard-work and dedication which has enabled them
            </p>
            <p className="text-xs md:text-base text-silver pb-2 text-center">
              Social media links
            </p>
            <div className="flex space-x-3 pl-0 items-center mb-12">
              <a
                href="https://www.linkedin.com/company/ineuron-ai/"
                target="_blank"
              >
                <img
                  src="../images/linkdin-svg.svg"
                  alt="linkdin"
                  className="w-5"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCb1GdqUqArXMQ3RS86lqqOw"
                target="_blank"
              >
                <img
                  src="../images/yt-svg.svg"
                  alt="you-tube"
                  className="w-8"
                />
              </a>
              <a href="https://www.facebook.com/ineuronai" target="_blank">
                <img
                  src="../images/fb-svg.svg"
                  alt="facebook"
                  className="w-5"
                />
              </a>
              <a href="https://twitter.com/iNeuronAi" target="_blank">
                <img
                  src="../images/twitter-svg.svg"
                  alt="twitter"
                  className="w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
