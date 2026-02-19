document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
  
    const btnEN = document.getElementById("lang-en");
    const btnFR = document.getElementById("lang-fr");
  
    const inEN = path.startsWith("/en/");
    const inFR = path.startsWith("/fr/");
  
    // If not on a language page, hide both
    if (!inEN && !inFR) {
      if (btnEN) btnEN.style.display = "none";
      if (btnFR) btnFR.style.display = "none";
      return;
    }
  
    // Compute mirror path
    let mirrorPath;
    if (inEN) mirrorPath = path.replace(/^\/en\//, "/fr/");
    if (inFR) mirrorPath = path.replace(/^\/fr\//, "/en/");
  
    // Keep query/hash
    const mirrorUrl = mirrorPath + window.location.search + window.location.hash;
  
    if (inEN) {
      // show FR only
      if (btnEN) btnEN.style.display = "none";
      if (btnFR) {
        btnFR.style.display = "";
        btnFR.setAttribute("href", mirrorUrl);
      }
    }
  
    if (inFR) {
      // show EN only
      if (btnFR) btnFR.style.display = "none";
      if (btnEN) {
        btnEN.style.display = "";
        btnEN.setAttribute("href", mirrorUrl);
      }
    }
  });  