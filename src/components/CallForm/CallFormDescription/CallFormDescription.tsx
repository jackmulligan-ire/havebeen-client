import TextField from "@mui/material/TextField";

interface CallFormTitleProps {
  callDescription: string;
  setCallDescription: React.Dispatch<React.SetStateAction<string>>;
}

const CallFormDescription = ({
  callDescription,
  setCallDescription,
}: CallFormTitleProps) => {
  return (
    <TextField
      label="Call Description"
      value={callDescription}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setCallDescription(e.target.value)
      }
      variant="outlined"
      fullWidth
      placeholder="Enter a call description"
      required
      multiline
      slotProps={{
        input: {
          sx: {
            height: "150px",
          },
        },
      }}
    />
  );
};

export default CallFormDescription;
