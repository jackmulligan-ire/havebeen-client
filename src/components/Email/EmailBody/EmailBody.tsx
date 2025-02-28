import TextField from "@mui/material/TextField";

interface EmailBodyProps {
  emailBody: string;
  setEmailBody: React.Dispatch<React.SetStateAction<string>>;
}

const EmailBody = ({ emailBody, setEmailBody }: EmailBodyProps) => {
  return (
    <TextField
      label="Email Body"
      value={emailBody}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEmailBody(e.target.value)
      }
      variant="outlined"
      fullWidth
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

export default EmailBody;
