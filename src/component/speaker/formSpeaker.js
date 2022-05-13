import React, { useState ,useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import { speakerDetails } from "../const/speakerData";
import "react-phone-input-2/lib/style.css";
import "flowbite";
import { url } from "../const/apiurl";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSpeaker = () => {
  const userDetailsInit = {
    speakerName: "",
    organizationName: "",
    address: "",
    modeOfEvent: "",
    date: "",
    isd: "",
    phoneNumber: "",
    userName: "",
    numAttendees: "",
    email: "",
  };
  const [isValid, setvalidaiton] = useState({
    speakerName: true,
    organizationName: true,
    address: true,
    modeOfEvent: true,
    date: true,
    phoneNumber: true,
    userName: true,
    email: true,
    numAttendees: true,
  });
  const [speakerDetails,setSpeakerdetails]=useState([]);
  const [number, setNumber] = useState();
  const [userDetails, setUserDetails] = useState(userDetailsInit);
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const setPhoneNumber = (value, data) => {
    setUserDetails({
      ...userDetails,
      isd: data.dialCode,
      phoneNumber: value.slice(data.dialCode.length),
    });
    setvalidaiton({ ...isValid, phoneNumber: true });
    setNumber(value);
  };

  const validateForm = () => {
    if (!userDetails.speakerName.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, speakerName: false });
    }
    if (!userDetails.organizationName.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, organizationName: false });
    }
    if (!userDetails.address.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, address: false });
    }
    if (!userDetails.modeOfEvent.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, modeOfEvent: false });
    }
    if (!userDetails.date.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, date: false });
    }
    if (!userDetails.userName.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, userName: false });
    }
    if (!userDetails.phoneNumber.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, phoneNumber: false });
    }
    if (!userDetails.email.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, email: false });
    }
    if (!userDetails.numAttendees.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, numAttendees: false });
    }
  };

  const getSpeakerDetails = async () => {
    const path = url.endPoint + "/speakers/?skip=0&limit=100";

   
    try {
      const response = await Axios.get(path);
      if (response.status === 200) {
        setSpeakerdetails(response.data.speakers);
      }
     
    } catch (err) {
      toast.error(err.message);
      }
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  useEffect(() => {
    
  getSpeakerDetails();
  }, [])
  
  
  return (
    <>
    <div className="all-form mx-auto w-[90%] md:w-[80%] lg:w-[70%] shadow-xl mb-10">
      <form onSubmit={(e) => handleFormSubmit(e)} autoComplete="off">
        <div className="select-form mt-14 mb-4 px-3 pb-6 md:pb-12">
          <div className="select-box relative flex w-[100%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto text-left flex-col ">
            <select
              className="selectOption minimal py-4 w-[100%] xl:w-[98%] bg-grayform text-white px-4 mb-3 rounded border-none font-medium font-DMSansmedium"
              name="speakerName"
              onChange={(e) => {
                setvalidaiton({ ...isValid, speakerName: true });
                handleInputChange(e);
              }}
            >
              <option className="opt font-DMSansmedium">
                {" "}
                Speaker requesting for{" "}
              </option>
              {speakerDetails.map((items) => {
                return (
                  <option value={items.id} className="opt font-DMSansmedium" key={items.id}>
                    {" "}
                    {items.name}{" "}
                  </option>
                );
              })}
            </select>
            {!isValid.speakerName && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                <span className="font-medium">Warning!</span> Please enter the
                speaker name.
              </p>
            )}
          </div>
        </div>
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
                name="organizationName"
                placeholder="Org / College name"
                onChange={(e) => {
                  setvalidaiton({ ...isValid, organizationName: true });
                  handleInputChange(e);
                }}
              />
              {!isValid.organizationName && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                  <span className="font-medium">Warning!</span> Please enter the
                  organization/college name.
                </p>
              )}
            </div>
            <div className="px-3 my-5">
              <input
                type="text"
                className="w-full bg-grayform text-white rounded py-4 px-4 border-none font-medium font-DMSansmedium"
                name="address"
                placeholder="Address"
                onChange={(e) => {
                  setvalidaiton({ ...isValid, address: true });
                  handleInputChange(e);
                }}
              />
              {!isValid.address && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                  <span className="font-medium">Warning!</span> Please enter the
                  address details.
                </p>
              )}
            </div>
            <div className="xl:flex my-5">
              <div className="px-3 w-[100%] xl:w-[50%] my-2 xl:my-0">
                <select
                  className="selectOption minimal py-4 w-[100%] xl:w-[100%] bg-grayform text-white px-4 mb-3 rounded border-none font-medium font-DMSansmedium"
                  name="modeOfEvent"
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, modeOfEvent: true });
                    handleInputChange(e);
                  }}
                >
                  <option className="font-DMSansmedium">
                    {" "}
                    Mode of the event{" "}
                  </option>
                  <option className="font-DMSansmedium"> Online </option>
                  <option className="font-DMSansmedium"> Offline </option>
                </select>
                {!isValid.modeOfEvent && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                    <span className="font-medium">Warning!</span> Please enter
                    the mode of event.
                  </p>
                )}
              </div>
              <div className="px-3 w-[100%] xl:w-[50%] xl:text-right my-2 xl:my-0">
                <input
                  type="date"
                  className="w-[100%] xl:w-[98%] bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                  name="date"
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, date: true });
                    handleInputChange(e);
                  }}
                />
                {!isValid.date && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                    <span className="font-medium">Warning!</span> Please enter
                    the date of event.
                  </p>
                )}
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
                name="userName"
                placeholder="Name"
                onChange={(e) => {
                  setvalidaiton({ ...isValid, userName: true });
                  handleInputChange(e);
                }}
              />
              {!isValid.userName && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                  <span className="font-medium">Warning!</span> Please enter the
                  user name.
                </p>
              )}
            </div>
            <div className="px-3 my-2 ">
              <PhoneInput
                className="w-full bg-grayform text-black  py-3  rounded mb-3 border-none font-medium font-DMSansmedium"
                country={"in"}
                countryCodeEditable={false}
                name="phoneNumber"
                inputProps={{
                  name: "phoneNumber",
                }}
                value={number}
                onChange={setPhoneNumber}
                containerStyle={{
                  fontFamily: "Open Sans",
                  fontSize: "0.875rem",
                  color: "white",
                }}
                inputStyle={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                }}
                buttonStyle={{
                  background: "transparent",
                  border: "none",
                }}
                dropdownStyle={{
                  background: "#21201f",
                }}
              />
              {!isValid.phoneNumber && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                  <span className="font-medium">Warning!</span> Please enter the
                  Phone numer.
                </p>
              )}
            </div>
            <div className="px-3 my-2">
              <input
                type="email"
                className="w-full  bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setvalidaiton({ ...isValid, email: true });
                  handleInputChange(e);
                }}
              />
              {!isValid.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                  <span className="font-medium">Warning!</span> Please enter the
                  email.
                </p>
              )}
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
                name="numAttendees"
                className="hidden mr-4"
                value={"0-50"}
                onChange={(e) => {
                  setvalidaiton({ ...isValid, numAttendees: true });
                  handleInputChange(e);
                }}
              />
              <label
                htmlFor="radio1"
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
                name="numAttendees"
                className="hidden mr-4"
                value={"50-100"}
                onChange={(e) => {
                  setvalidaiton({ ...isValid, numAttendees: true });
                  handleInputChange(e);
                }}
              />
              <label
                htmlFor="radio2"
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
                name="numAttendees"
                className="hidden mr-4"
                value={"100-200"}
                onChange={(e) => {
                  setvalidaiton({ ...isValid, numAttendees: true });
                  handleInputChange(e);
                }}
              />
              <label
                htmlFor="radio3"
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
                name="numAttendees"
                className="hidden mr-4"
                value={"200+"}
                onChange={(e) => {
                  setvalidaiton({ ...isValid, numAttendees: true });
                  handleInputChange(e);
                }}
              />
              <label
                htmlFor="radio4"
                className="flex items-center cursor-pointer text-white font-medium font-DMSansmedium"
              >
                <span className="w-4 h-4 inline-block rounded-full border border-grey mr-2 md:mr-4"></span>
                200+{" "}
              </label>
            </div>
          </div>
        </div>
        {!isValid.numAttendees && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-center">
            <span className="font-medium">Warning!</span> Please enter the
            number of attendees for the event.
          </p>
        )}
        <div className="attend-button sm:w-full text-center mb-18 md:mb-20 pb-8 md:pb-20 sm:pb-10 mt-10 sm:mb-10">
          <button className="flex items-center mx-auto bg-green text-white py-4 px-14 hover:bg-darkgreen  border-none rounded-lg font-medium font-DMSansmedium">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
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

export default FormSpeaker;
