import Button from "@mui/material/Button";

interface EmailClearButtonProps {
  handleClick: () => void;
}

const EmailClearButton = ({ handleClick }: EmailClearButtonProps) => (
  <Button variant="outlined" onClick={handleClick} fullWidth>
    Clear Email
  </Button>
);

export default EmailClearButton;
