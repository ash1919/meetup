import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import 'flowbite';



const FormSponsor = () => {

  const userDetailsInit = {
    organizationName: "",
    address: "",
    date: "",
    phoneNumber: "",
    userName: "",
    email: "",
  };
  const[isValid,setvalidaiton]=useState(
    {
      organizationName: true,
      address: false,
      date: false,
      phoneNumber: false,
      userName: false,
      email: false,
    }
  );
  const [userDetails, setUserDetails] = useState(userDetailsInit);
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
    
  };
  const setPhoneNumber=(value)=>{
    setUserDetails({ ...userDetails, "phoneNumber": value }); 
  }

  const handleFormSubmit = (e) => {
    
  };
  useEffect(()=>{
    validateForm();
  },[userDetails])

 const validateForm=()=>{
    if(userDetails.organizationName == ''&& !userDetails.organizationName.replace(/\s/g, "").length ){
      setvalidaiton({...isValid,organizationName:false});
    }
    if(userDetails.address !== '' && !userDetails.address.replace(/\s/g, "").length){
      setvalidaiton({...isValid,address:true});
    }
    if(userDetails.date !== '' && !userDetails.date.replace(/\s/g, "").length){
      setvalidaiton({...isValid,date:true});
    }
    if(userDetails.phoneNumber !== '' && !userDetails.phoneNumber.replace(/\s/g, "").length){
      setvalidaiton({...isValid,phoneNumber:true});
    }
    if(userDetails.userName !== '' && !userDetails.userName.replace(/\s/g, "").length){
      setvalidaiton({...isValid,userName:true});
    }
    if(userDetails.email !== '' && !userDetails.email.replace(/\s/g, "").length){
      setvalidaiton({...isValid,email:true});
    }
    

    
  //   if (userDetails.replace(/\s/g, "").length === 0) {
  //   return setFilterSpeaker(speakerDetails);
  // } 
  // else {
  //   return setFilterSpeaker("");
  // }
 }
 console.log(isValid);

  return (
    <div className="all-form mx-auto w-[90%] md:w-[80%] lg:w-[70%] shadow-xl mb-10">
      <form onSubmit={(e) => handleFormSubmit(e)}>
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
                onChange={(e) => handleInputChange(e)}
                required
              />
              {isValid.organizationName===true?( <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-left"><span className="font-medium">Oh, snapp!</span> Some error message.</p>):null}
            </div>
            <div className="px-3 my-5">
              <input
                type="text"
                className="w-full bg-grayform text-white rounded py-4 px-4 border-none font-medium font-DMSansmedium"
                name="address"
                placeholder="Address"
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div className="xl:flex">
              <div className="px-3 w-[100%]">
                <input
                  type="date"
                  className="w-[100%] bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                  name="date"
                  placeholder="date"
                  onChange={(e) => handleInputChange(e)}
                  required
                />
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
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div className="px-3 my-2">
              <PhoneInput
                className="w-full bg-grayform text-black  py-3  rounded mb-3 border-none font-medium font-DMSansmedium"
                country={"in"}
                countryCodeEditable={false}
                inputProps={{
                  name: "phoneNumber",
                  required:true
                }}
                value={userDetails["phoneNumber"]}
                onChange={(value) => setPhoneNumber(value)}
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
            </div>
            <div className="px-3 my-2">
              <input
                type="email"
                className="w-full  bg-grayform text-white rounded py-4 px-4 mb-3 border-none font-medium font-DMSansmedium"
                name="email"
                placeholder="Email"
                onChange={(e) => handleInputChange(e)}
                required
              />
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
