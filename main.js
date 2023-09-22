// import './sass/main.scss'

/// This script fixes flash of unstyled content when page loads
let domReady = (cb) => {
    document.readyState === "interactive" || document.readyState === "complete"
      ? cb()
      : document.addEventListener("DOMContentLoaded", cb);
  };
  
  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = "visible";
  });
  