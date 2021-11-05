// function onBatteryStatus(status) {
//   console.log(status);
//   console.log("Battery Level Low " + status.level + "%");
// }

// const openInAppBrowserOptions = "location=yes,zoom=false";

// const openInAppBrowser = (link) => {
//   cordova.InAppBrowser.open(link, "_blank", openInAppBrowserOptions);
// };

// const toogleModalOffline = (show) => {
  
//   const modal = document.getElementById("modal-unconnect");
//   console.log(modal);
//   modal.className = show ? "show" : "";
// };

const deviceReady = () => {
  window.screen.orientation.lock("landscape"); 
  //navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError)
  //window.addEventListener("batterystatus", onBatteryStatus, false);
  // document.addEventListener("offline", () => toogleModalOffline(true), false);
  // document.addEventListener("online", () => toogleModalOffline(false), false);
};
