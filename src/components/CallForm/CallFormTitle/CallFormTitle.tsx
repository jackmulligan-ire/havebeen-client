import TextField from "@mui/material/TextField";
import { CallRequest } from "../../../services/EmailService/EmailService.types";

interface CallFormTitleProps {
  title: string;
  setCall: React.Dispatch<React.SetStateAction<CallRequest>>;
}

const CallFormTitle = ({ title, setCall }: CallFormTitleProps) => {
  return (
    <TextField
      label="Call Title"
      value={title}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setCall((call: CallRequest) => {
          return {
            ...call,
            title: e.target.value,
          };
        })
      }
      variant="outlined"
      fullWidth
      placeholder="Enter a call title"
      required
    />
  );
};

export default CallFormTitle;
