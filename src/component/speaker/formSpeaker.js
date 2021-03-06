import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "flowbite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { getSpeakerDetails } from "../utils/apis/speakerApi";
import { requestSpeaker } from "../utils/apis/speakerFormApi";

const FormSpeaker = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = async () => {
    if (!executeRecaptcha) return false;

    const token = await executeRecaptcha("SpeakerForm");
    if (token) return token;
    return false;
  };
  const userDetailsInit = {
    speakerId: "",
    organizationName: "",
    date: "",
    mode: "",
    address: "",
    name: "",
    email: "",
    isdCode: "",
    phoneNumber: "",
    numberOfAttendees: "",
  };
  const [isValid, setvalidaiton] = useState({
    speakerId: true,
    organizationName: true,
    address: true,
    mode: true,
    date: true,
    phoneNumber: true,
    name: true,
    email: true,
    numberOfAttendees: true,
  });
  const inputSelect = useRef(null);
  const inputOrganization = useRef(null);
  const inputAddress = useRef(null);
  const inputMode = useRef(null);
  const inputDate = useRef(null);
  const inputName = useRef(null);
  const inputPhoneNumber = useRef(null);
  const inputEmail = useRef(null);

  const [speakerDetails, setSpeakerdetails] = useState([]);
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
      isdCode: data.dialCode,
      phoneNumber: value.slice(data.dialCode.length),
    });
    setvalidaiton({ ...isValid, phoneNumber: true });
    setNumber(value);
  };

  const validateForm = () => {
    if (!userDetails.speakerId.replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, speakerId: false });
      inputSelect.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    if (!userDetails.organizationName.replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, organizationName: false });
      inputOrganization.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    if (!userDetails.address.replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, address: false });
      inputAddress.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    if (!userDetails.mode.replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, mode: false });
      inputMode.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    if (!userDetails.date.toString().replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, date: false });
      inputDate.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    if (!userDetails.name.replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, name: false });
      inputName.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    if (!userDetails.phoneNumber.replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, phoneNumber: false });
      inputPhoneNumber.current.numberInputRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    if (!userDetails.email.replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, email: false });
      inputEmail.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    if (!userDetails.numberOfAttendees.replace(/\s/g, "").length) {
      setvalidaiton({ ...isValid, numberOfAttendees: false });
      return false;
    }
    return true;
  };

  const getSpeakersName = async () => {
    const response = await getSpeakerDetails();
    if (response.status === 200) {
      setSpeakerdetails(response.data.speakers);
    }
    toast.error(response.message);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const val = validateForm();

    let dateEvent = userDetails;
    dateEvent = new Date().toISOString();
    const formData = {
      organizationName: userDetails.organizationName,
      address: userDetails.address,
      mode: userDetails.mode.toLowerCase(),
      date: dateEvent,
      pointOfContact: {
        name: userDetails.name,
        email: userDetails.email,
        isdCode: userDetails.isdCode,
        phoneNumber: userDetails.phoneNumber,
      },
      speakerId: userDetails.speakerId,
      numberOfAttendees: userDetails.numberOfAttendees,
    };
    if (val) {
      const recaptchaValue = await handleReCaptchaVerify();
      const response = await requestSpeaker({ formData, recaptchaValue });
      if (response.status === 201) {
        toast.success("Speaker form submitted Successfully");
        setUserDetails(userDetailsInit);
        setNumber(userDetails.isdCode);
      }
      toast.error(response.message);
    }
  };

  useEffect(() => {
    getSpeakersName();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="all-form mx-auto w-[90%] md:w-[80%] lg:w-[70%] shadow-xl mb-10">
        <form
          id="form2"
          onSubmit={(e) => handleFormSubmit(e)}
          autoComplete="off"
        >
          <div className="select-form mt-14 mb-4 px-3 pb-6 md:pb-12">
            <div className="select-box relative flex w-[100%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto text-left flex-col ">
              <select
                className="selectOption minimal py-4 w-[100%] xl:w-[98%] bg-grayform text-white px-4 mb-3 rounded border-none font-medium font-DMSansmedium"
                name="speakerId"
                ref={inputSelect}
                onChange={(e) => {
                  setvalidaiton({ ...isValid, speakerId: true });
                  handleInputChange(e);
                }}
              >
                <option className="opt font-DMSansmedium" value="">
                  {" "}
                  Speaker requesting for{" "}
                </option>
                {speakerDetails.map((items) => {
                  return (
                    <option
                      value={items.id}
                      className="opt font-DMSansmedium"
                      id="selectSpeaker"
                      key={items.id}
                    >
                      {items.name}
                    </option>
                  );
                })}
              </select>
              {!isValid.speakerId && (
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
                  ref={inputOrganization}
                  value={userDetails.organizationName}
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, organizationName: true });
                    handleInputChange(e);
                  }}
                />
                {!isValid.organizationName && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                    <span className="font-medium">Warning!</span> Please enter
                    the organization/college name.
                  </p>
                )}
              </div>
              <div className="px-3 my-5">
                <input
                  type="text"
                  className="w-full bg-grayform text-white rounded py-4 px-4 border-none font-medium font-DMSansmedium"
                  name="address"
                  ref={inputAddress}
                  placeholder="Address"
                  value={userDetails.address}
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, address: true });
                    handleInputChange(e);
                  }}
                />
                {!isValid.address && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                    <span className="font-medium">Warning!</span> Please enter
                    the address details.
                  </p>
                )}
              </div>
              <div className="xl:flex my-5">
                <div className="px-3 w-[100%] xl:w-[50%] my-2 xl:my-0">
                  <select
                    className="selectOption minimal py-4 w-[100%] xl:w-[100%] bg-grayform text-white px-4 mb-3 rounded border-none font-medium font-DMSansmedium"
                    name="mode"
                    value={userDetails.mode}
                    ref={inputMode}
                    onChange={(e) => {
                      setvalidaiton({ ...isValid, mode: true });
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
                  {!isValid.mode && (
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
                    value={userDetails.date}
                    ref={inputDate}
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
                  name="name"
                  placeholder="Name"
                  value={userDetails.name}
                  ref={inputName}
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, name: true });
                    handleInputChange(e);
                  }}
                />
                {!isValid.name && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                    <span className="font-medium">Warning!</span> Please enter
                    the user name.
                  </p>
                )}
              </div>
              <div className="px-3 my-2 ">
                <PhoneInput
                  className="w-full bg-grayform text-black  py-3  rounded mb-3 border-none font-medium font-DMSansmedium"
                  country={"in"}
                  countryCodeEditable={false}
                  name="phoneNumber"
                  ref={inputPhoneNumber}
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
                    <span className="font-medium">Warning!</span> Please enter
                    the Phone numer.
                  </p>
                )}
              </div>
              <div className="px-3 my-2">
                <input
                  type="email"
                  className="w-full  bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                  name="email"
                  placeholder="Email"
                  ref={inputEmail}
                  value={userDetails.email}
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, email: true });
                    handleInputChange(e);
                  }}
                />
                {!isValid.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                    <span className="font-medium">Warning!</span> Please enter
                    the email.
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
                  name="numberOfAttendees"
                  className="hidden mr-4"
                  value={"0-50"}
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, numberOfAttendees: true });
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
                  name="numberOfAttendees"
                  className="hidden mr-4"
                  value={"50-100"}
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, numberOfAttendees: true });
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
                  name="numberOfAttendees"
                  className="hidden mr-4"
                  value={"100-200"}
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, numberOfAttendees: true });
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
                  name="numberOfAttendees"
                  className="hidden mr-4"
                  value={"200+"}
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, numberOfAttendees: true });
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
          {!isValid.numberOfAttendees && (
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
        theme="dark"
        position="top-right"
        autoClose={3000}
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
