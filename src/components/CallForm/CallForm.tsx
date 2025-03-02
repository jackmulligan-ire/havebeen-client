import CallFormTitle from "./CallFormTitle/CallFormTitle";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import CallFormDescription from "./CallFormDescription";
import CallFormSubmit from "./CallFormSubmit";
import { generateEmail } from "../../services/EmailService/EmailService";
import {
  CallRequest,
  EmailResponse,
} from "../../services/EmailService/EmailService.types";
import { callFormContainerSx } from "./CallForm.styles";
import Typography from "@mui/material/Typography";

interface CallFormProps {
  setEmail: React.Dispatch<React.SetStateAction<EmailResponse | null>>;
}

const CallForm = ({ setEmail }: CallFormProps) => {
  const [call, setCall] = useState<CallRequest>({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const email: EmailResponse = await generateEmail(call);
    setLoading(false);
    setEmail(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        size={12}
        spacing={2}
        justifyContent={"left"}
        sx={callFormContainerSx}
      >
        <Grid size={6}>
          <Typography variant="h5" color="#333">
            Turn Your Call into an Email
          </Typography>
        </Grid>
        <Grid container size={12} justifyContent={"right"}>
          <Grid size={12}>
            <CallFormTitle title={call.title} setCall={setCall} />
          </Grid>
          <Grid size={12}>
            <CallFormDescription
              description={call.description}
              setCall={setCall}
            />
          </Grid>
          <Grid size={3}>
            <CallFormSubmit loading={loading} />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default CallForm;
