import { useState } from "react";
import CallForm from "./components/CallForm";
import Grid from "@mui/material/Grid2";
import Email from "./components/Email";
import { EmailResponse } from "./services/EmailService/EmailService.types";
import SiteHeader from "./components/SiteHeader";
import MuiThemeProvider from "./providers/MuiThemeProvider";

function App() {
  const [email, setEmail] = useState<EmailResponse | null>(null);

  return (
    <>
      <MuiThemeProvider>
        <SiteHeader />
        <Grid container justifyContent={"center"} mt={4} mx={"auto"}>
          <Grid>
            {!email ? (
              <CallForm setEmail={setEmail} />
            ) : (
              <Email email={email} setEmail={setEmail} />
            )}
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </>
  );
}

export default App;
