// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
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
  const answer = window.confirm(
    `This site has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
