import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./searchBar";
import { url } from "./const/apiurl";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ListOfSpeakers() {
  const [filterSpeaker, setFilterSpeaker] = useState(null);
  const [speakerDetails, setSpeakerdetails] = useState(null);

  const getSpeakerDetails = async () => {
    const path = url.endPoint + "/speakers/?skip=0&limit=100";

    const response = await Axios.get(path);
    try {
      if (response.status === 200) {
        setFilterSpeaker(response.data);
        setSpeakerdetails(response.data);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  console.log(filterSpeaker, speakerDetails);
  const filter = (value) => {
    if (value.replace(/\s/g, "").length) {
      const filterData = speakerDetails.filter((speaker) => {
        return speaker.name.toLowerCase() === value.toLowerCase();
      });
      setFilterSpeaker(filterData);
    } else if (value.replace(/\s/g, "").length === 0) {
      return setFilterSpeaker(speakerDetails);
    } else {
      return setFilterSpeaker("");
    }
  };
 
  useEffect(() => {
    getSpeakerDetails();
  }, []);
 
  return (
    <>
    <div className="sm:container container">
      <h2 className="text-4xl md:text-5xl font-bold font-opensans text-center text-white mt-24">
        List of Speakers
      </h2>
      <SearchBar filter={filter} />
      {filterSpeaker.length > 0 ? (
        <div className="flex-col pt-20 gap-3 items-center justify-center mt-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-16 lg:gap-16 xs:gap-8 mb-6">
            {filterSpeaker.length > 0 &&
              filterSpeaker.map((filterSpeakers) => (
                <div
                  key={filterSpeakers.id}
                  className="flex flex-col items-center justify-center p-4 spcae-y-12 rounded-lg w-full lg:w-1/3 xl:w-1/4 speaker-card bg-cardbg shadow-1md"
                >
                  <img
                    src="/images/speakerpic.png"
                    alt="speaker-pic"
                    className="lg:w-32 pt-8"
                  />
                  <h5 className="md:text-xl text-md font-bold text-white pt-4">
                    {filterSpeakers.speakerName}
                  </h5>
                  <p className="md:text-md text-sm text-secondary pb-8">
                    {filterSpeakers.subcribers}
                  </p>
                  <p className="md:text-md text-base text-silver pb-8 text-center">
                    {filterSpeakers.aboutSpeaker}
                  </p>
                  <p className="text-xs md:text-base text-silver pb-2 text-center">
                    Social media links
                  </p>
                  <div className="flex space-x-3 pl-0 items-center mb-12">
                    <a href={filterSpeakers.linkdin} target="_blank">
                      <img
                        src="/images/linkdin-svg.svg"
                        alt="linkdin"
                        className="w-5"
                      />
                    </a>
                    <a href={filterSpeakers.youtube} target="_blank">
                      <img
                        src="/images/yt-svg.svg"
                        alt="you-tube"
                        className="w-8"
                      />
                    </a>
                    <a href={filterSpeakers.fb}>
                      <img
                        src="/images/fb-svg.svg"
                        alt="facebook"
                        className="w-5"
                      />
                    </a>
                    <a href={filterSpeakers.twitter}>
                      <img
                        src="/images/twitter-svg.svg"
                        alt="twitter"
                        className="w-5"
                      />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-24 text-white pb-20">
          <div>
            <img
              src="../images/no-result.gif"
              alt="icon"
              className="w-60 md:w-full"
            />
          </div>
          <div className="text-center text-md lg:text-xl">
            <p>Uh-oh, We are not able to find the speaker </p>
            <p>you are looking for </p>
          </div>
        </div>
      )}
    </div>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </>
  );
}
