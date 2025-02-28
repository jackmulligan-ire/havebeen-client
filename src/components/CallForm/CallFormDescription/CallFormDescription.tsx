import TextField from "@mui/material/TextField";
import { CallRequest } from "../../../services/EmailService/EmailService.types";

interface CallFormTitleProps {
  description: string;
  setCall: React.Dispatch<React.SetStateAction<CallRequest>>;
}

const CallFormDescription = ({ description, setCall }: CallFormTitleProps) => {
  return (
    <TextField
      label="Call Description"
      value={description}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setCall((call: CallRequest) => {
          return {
            ...call,
            description: e.target.value,
          };
        })
      }
      variant="outlined"
      fullWidth
      placeholder="Enter a call description"
      required
      multiline
      sx={{
        minHeight: "300px",
      }}
      slotProps={{
        input: {
          sx: {
            height: "300px",
            overflowY: "auto",
            "& textarea": {
              height: "auto",
              minHeight: "250px",
            },
          },
        },
      }}
    />
  );
};

export default CallFormDescription;
