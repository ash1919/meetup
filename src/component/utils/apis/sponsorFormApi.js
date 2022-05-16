import { config } from "../../const/config";
import axios from "axios";

const apiUrl = config.API_ENDPOINT;

export const requestSponsor = async ({ formData, recaptchaValue }) => {
  try {
    const response = await axios.post(`${apiUrl}/sponsor`, {
      ...formData,
      "g-recaptcha-response": recaptchaValue,
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
