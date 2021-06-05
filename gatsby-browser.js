// custom typefaces
import "typeface-montserrat";
import "typeface-roboto";

// normalize CSS across browsers
import "./src/styles/normalize.css";
// custom CSS styles
import "./src/styles/style.css";

// Highlighting for code blocks
import "prismjs/themes/prism.css";
// tailwind
import './src/styles/global.css';

export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
};
