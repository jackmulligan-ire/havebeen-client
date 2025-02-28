import { useState } from "react";
import CallForm from "./components/CallForm";
import Grid from "@mui/material/Grid2";
import Email from "./components/Email";
import { EmailResponse } from "./services/EmailService/EmailService.types";

function App() {
  const [email, setEmail] = useState<EmailResponse | null>(null);

  return (
    <Grid container justifyContent={"center"} mt={2} mx={"auto"}>
      <Grid>
        {!email ? (
          <CallForm setEmail={setEmail} />
        ) : (
          <Email email={email} setEmail={setEmail} />
        )}
      </Grid>
    </Grid>
  );
}

export default App;
