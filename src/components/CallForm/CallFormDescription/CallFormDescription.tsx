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
