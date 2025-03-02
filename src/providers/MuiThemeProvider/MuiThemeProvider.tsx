import { ThemeProvider } from "@mui/material/styles";
import MuiTheme from "./MuiTheme";

interface MuiThemeProviderProps {
  children: React.ReactNode;
}

const MuiThemeProvider = ({ children }: MuiThemeProviderProps) => {
  return <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
