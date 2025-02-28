import API from "../API";
import { CallRequest, EmailResponse } from "./EmailService.types";

export const generateEmail = async (
  request: CallRequest
): Promise<EmailResponse> => {
  try {
    const response = await API.post<EmailResponse>("/email", request);
    return response.data;
  } catch (e) {
    console.log("Error", e);
    throw new Error("Failed to generate email");
  }
};
