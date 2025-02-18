import API from "../API";
import { CallRequest, EmailReponse } from "./EmailService.types";

export const generateEmail = async (
  request: CallRequest
): Promise<EmailReponse> => {
  try {
    const response = await API.post<EmailReponse>("/email", request);
    return response.data;
  } catch (e) {
    console.log("Error", e);
    throw new Error("Failed to generate email");
  }
};
