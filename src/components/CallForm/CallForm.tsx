import CallFormTitle from "./CallFormTitle/CallFormTitle";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import CallFormDescription from "./CallFormDescription";
import CallFormSubmit from "./CallFormSubmit";
import { generateEmail } from "../../services/EmailService/EmailService";

const CallForm = () => {
  const [callTitle, setCallTitle] = useState("");
  const [callDescription, setCallDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    generateEmail({ title: callTitle, description: callDescription });
    setLoading(false);
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
            <CallFormTitle callTitle={callTitle} setCallTitle={setCallTitle} />
          </Grid>
          <Grid size={12}>
            <CallFormDescription
              callDescription={callDescription}
              setCallDescription={setCallDescription}
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
