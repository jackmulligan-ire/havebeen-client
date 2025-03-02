import Grid from "@mui/material/Grid2";
import EmailTitle from "./EmailTitle";
import EmailBody from "./EmailBody";
import EmailClearButton from "./EmailClearButton";
import { EmailResponse } from "../../services/EmailService/EmailService.types";
import { useState } from "react";
import { emailContainerSx } from "./Email.styles";
import Typography from "@mui/material/Typography";

interface EmailProps {
  email: EmailResponse;
  setEmail: React.Dispatch<React.SetStateAction<EmailResponse | null>>;
}

const Email = ({ email, setEmail }: EmailProps) => {
  const [emailTitle, setEmailTitle] = useState<string>(email.title);
  const [emailBody, setEmailBody] = useState<string>(email.body);

  const handleClearButtonClick = () => {
    setEmail(null);
  };

  return (
    <Grid
      container
      size={12}
      spacing={2}
      justifyContent={"left"}
      sx={emailContainerSx}
    >
      <Grid size={6}>
        <Typography variant="h5" color="#333">
          Your Email
        </Typography>
      </Grid>
      <Grid container size={12} justifyContent={"right"}>
        <Grid size={12}>
          <EmailTitle emailTitle={emailTitle} setEmailTitle={setEmailTitle} />
        </Grid>
        <Grid size={12}>
          <EmailBody emailBody={emailBody} setEmailBody={setEmailBody} />
        </Grid>
        <Grid size={4}>
          <EmailClearButton handleClick={handleClearButtonClick} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Email;
