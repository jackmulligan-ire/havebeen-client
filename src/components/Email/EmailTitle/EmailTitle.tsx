import TextField from "@mui/material/TextField";

interface EmailTitleProps {
  emailTitle: string;
  setEmailTitle: React.Dispatch<React.SetStateAction<string>>;
}

const EmailTitle = ({ emailTitle, setEmailTitle }: EmailTitleProps) => {
  return (
    <TextField
      label="Email Title"
      value={emailTitle}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEmailTitle(e.target.value)
      }
      variant="outlined"
      fullWidth
    />
  );
};

export default EmailTitle;
