import { StateContext } from "../context/useContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
