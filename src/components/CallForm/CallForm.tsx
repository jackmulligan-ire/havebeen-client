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
    <Grid container size={12} justifyContent={"center"}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          size={12}
          spacing={2}
          sx={{ mt: 4 }}
          justifyContent={"right"}
          alignItems={"center"}
        >
          <Grid size={12}>
            <CallFormTitle title={call.title} setCall={setCall} />
          </Grid>
          <Grid size={12}>
            <CallFormDescription
              description={call.description}
              setCall={setCall}
            />
          </Grid>
          <Grid size={4}>
            <CallFormSubmit loading={loading} />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default CallForm;
