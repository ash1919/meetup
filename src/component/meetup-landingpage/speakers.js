import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./searchBar";
import { url } from  "../const/constants";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListOfSpeakers = () => {
  const [filterSpeakers, setFilterSpeakers] = useState([]);

  const getSpeakerDetails = async () => {
    const path = url.endPoint + "/speakers/?skip=0&limit=100";

    try {
      const response = await Axios.get(path);
      if (response.status === 200) {
        setFilterSpeakers(response.data.speakers);
      }
      return;
    } catch (err) {
      toast.error(err.message);
    }
  };
  const filter = async (value) => {
    const searcPath =
      `${url.endPoint}/speakers/?skip=0&limit=100` +
      (value.length !== 0 ? "&search=" + value : "");
    const res = await Axios.get(searcPath);

    try {
      if (res.status === 200) {
        setFilterSpeakers(res.data.speakers);
      }
    } catch (error) {
      if (error.response.status === 400) setFilterSpeakers([]);
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
        {filterSpeakers.length > 0 ? (
          <>
            <div className="flex-col pt-20 gap-3 items-center justify-center mt-10 w-full">
              <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-16 lg:gap-16 xs:gap-8 mb-6">
                {filterSpeakers.length > 0 &&
                  filterSpeakers.map((filterSpeaker) => (
                    <div
                      key={filterSpeaker.id}
                      className="flex flex-col items-center justify-center p-4 spcae-y-12 rounded-lg w-full lg:w-1/3 xl:w-1/4 speaker-card bg-cardbg shadow-1md"
                    >
                      <img
                        src={
                          filterSpeaker.image !== null
                            ? `${url.imageUrl}/${filterSpeaker.image}`
                            : "/images/speakerpic.png"
                        }
                        alt="speaker-pic"
                        className="lg:w-32 pt-8 text-white"
                      />
                      <h5 className="md:text-xl text-md font-bold text-white pt-4">
                        {filterSpeaker.name}
                      </h5>
                      <p className="md:text-md text-sm text-secondary pb-8">
                        {filterSpeaker.designation}
                      </p>
                      <p className="md:text-md text-base text-silver pb-8 text-center">
                        {filterSpeaker.description}
                      </p>
                      <p className="text-xs md:text-base text-silver pb-2 text-center">
                        Social media links
                      </p>
                      <div className="flex space-x-3 pl-0 items-center mb-12 text-white">
                        {Object.keys(filterSpeaker.social).map(
                          (key, index) => (
                            <div key={index}>
                              {key === "facebook" ? (
                                <>
                                  <a href={filterSpeaker.social[key]}>
                                    <img
                                      src="/images/fb-svg.svg"
                                      alt="facebook"
                                      className="w-5"
                                    />
                                  </a>
                                </>
                              ) : null}
                              {key === "github" ? (
                                <>
                                  <a href={filterSpeaker.social[key]}>
                                    <img
                                      src="/images/yt-svg.svg"
                                      alt="github"
                                      className="w-5"
                                    />
                                  </a>
                                </>
                              ) : null}
                              {key === "macbook" ? (
                                <>
                                  <a href={filterSpeaker.social[key]}>
                                    <img
                                      src="/images/twitter-svg.svg"
                                      alt="twitter"
                                      className="w-5"
                                    />
                                  </a>
                                </>
                              ) : null}
                               {key === "linkedin" ? (
                                <>
                                  <a href={filterSpeaker.social[key]}>
                                    <img
                                      src="/images/linkdin-svg.svg"
                                      alt="twitter"
                                      className="w-5"
                                    />
                                  </a>
                                </>
                              ) : null}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </>
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
};
export default ListOfSpeakers;
