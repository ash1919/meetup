import { config } from "../../const/config";
import axios from "axios";

const apiUrl = config.API_ENDPOINT;

export const getSpeakerDetails = async () => {
  try {
    const response = await axios.get(`${apiUrl}/speakers/?skip=0&limit=100`);
    return response;
  } catch (error) {
    return error;
  }
};
export const getFilterSpeaker =async (value)=> {
    console.log(value);
    const searcPath =
        `${apiUrl}/speakers/?skip=0&limit=100` +
        (value.length !== 0 ? "&search=" + value : "");
    try {
        const response = await axios.get(searcPath);
        return response;
    } catch (error) {
        return error;
    }
}