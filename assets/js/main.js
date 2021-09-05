window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceWorker.js");
  }        .catch(err => {
15
            // registration failed :(
16
            console.log('ServiceWorker registration failed: ', err);
17
        });
};
