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

export const onRouteUpdate = () => {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    reg.update();
  });
};
