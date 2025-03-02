import Grid from "@mui/material/Grid2";
import SiteLogo from "./SiteLogo";
import { siteHeaderSx } from "./SiteHeader.styles";

const SiteHeader = () => (
  <Grid container sx={siteHeaderSx}>
    <Grid size={2} ml={2}>
      <SiteLogo />
    </Grid>
  </Grid>
);

export default SiteHeader;
