import TextField from "@mui/material/TextField";

interface CallFormTitleProps {
  callTitle: string;
  setCallTitle: React.Dispatch<React.SetStateAction<string>>;
}

const CallFormTitle = ({ callTitle, setCallTitle }: CallFormTitleProps) => {
  return (
    <TextField
      label="Title"
      value={callTitle}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setCallTitle(e.target.value)
      }
      variant="outlined"
      fullWidth
      placeholder="Enter a call title"
      required
    />
  );
};

export default CallFormTitle;
