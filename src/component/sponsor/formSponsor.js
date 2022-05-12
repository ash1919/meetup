import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "flowbite";

const FormSponsor = () => {
  const userDetailsInit = {
    organizationName: "",
    address: "",
    date: "",
    countryCode: "",
    phoneNumber: "",
    userName: "",
    email: "",
  };
  const [number, setNumber] = useState();
  const [isValid, setvalidaiton] = useState({
    organizationName: true,
    address: true,
    date: true,
    phoneNumber: true,
    userName: true,
    email: true,
  });
  const [userDetails, setUserDetails] = useState(userDetailsInit);
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const setPhoneNumber = (value, data) => {
    setUserDetails({ ...userDetails, countryCode: data.dialCode });
    setUserDetails({
      ...userDetails,
      phoneNumber: value.slice(data.dialCode.length),
    });
    setvalidaiton({ ...isValid, phoneNumber: true });
    setNumber(value);
  };
  console.log(userDetails["phoneNumber"]);

  const validateForm = () => {
    if (!userDetails.organizationName.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, organizationName: false });
    }
    if (!userDetails.address.replace(/\s/g, "").length) {
      return setvalidaiton({ ...isValid, address: false });
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };
  console.log(userDetails);
  console.log(isValid);
  return (
    <div className="all-form mx-auto w-[90%] md:w-[80%] lg:w-[70%] shadow-xl mb-10">
      <form onSubmit={(e) => handleFormSubmit(e)} autoComplete="off">
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
                  Address of the venue.
                </p>
              )}
            </div>
            <div className="xl:flex">
              <div className="px-3 w-[100%]">
                <input
                  type="date"
                  className="w-[100%] bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                  name="date"
                  placeholder="date"
                  onChange={(e) => {
                    setvalidaiton({ ...isValid, date: true });
                    handleInputChange(e);
                  }}
                />
                {!isValid.date && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                    <span className="font-medium">Warning!</span> Please select
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
                  <span className="font-medium">Warning!</span> Please Enter the
                  user name.
                </p>
              )}
            </div>
            <div className="px-3 my-2">
              <PhoneInput
                className="w-full bg-grayform text-black  py-3  rounded mb-3 border-none font-medium font-DMSansmedium"
                country={"in"}
                countryCodeEditable={false}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
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
                  "&:hover": {
                    background: "red",
                  },
                }}
                dropdownStyle={{
                  background: "#21201f",
                }}
              />
              {!isValid.phoneNumber && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left">
                  <span className="font-medium">Warning!</span> Please Enter the
                  phone number.
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
                  <span className="font-medium">Warning!</span> Please Enter the
                  email.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="attend-button sm:w-full text-center mb-18 md:mb-20 pb-8 md:pb-20 sm:pb-10 mt-10 sm:mb-10">
          <button className="flex items-center mx-auto bg-green text-white py-4 px-14 hover:bg-darkgreen  border-none rounded-lg font-medium font-DMSansmedium">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSponsor;
