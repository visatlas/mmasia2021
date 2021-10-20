// custom typefaces
import "typeface-montserrat";
import "typeface-roboto";

// normalize CSS across browsers
import "./src/styles/normalize.css";

// Tailwind & custom css
import './src/styles/global.css';

export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
};
