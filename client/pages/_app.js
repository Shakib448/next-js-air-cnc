import "../styles/globals.scss";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "../src/Theme/Theme";
import GlobalStyle from "../src/Theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
