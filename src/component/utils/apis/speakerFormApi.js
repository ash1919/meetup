import { config } from "../../const/config";
import axios from "axios";

const apiUrl = config.API_ENDPOINT;

export const requestSpeaker =async ({formData,recaptchaValue}) => {
    try {
        const response = await axios.post( `${apiUrl}/speakers/request`,{
            ...formData,
            "g-recaptcha-response": recaptchaValue
        });
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
};
