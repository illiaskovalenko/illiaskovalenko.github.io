document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
  
    const inEN = path.startsWith("/en/");
    const inFR = path.startsWith("/fr/");
  
    if (!inEN && !inFR) return;
  
    const mirrorPath = inEN
      ? path.replace(/^\/en\//, "/fr/")
      : path.replace(/^\/fr\//, "/en/");
  
    const mirrorUrl =
      mirrorPath + window.location.search + window.location.hash;
  
    // récupère le seul bouton langue dans la navbar
    const langLink = document.querySelector("nav .navbar-nav a:last-child");
  
    if (langLink) {
      langLink.setAttribute("href", mirrorUrl);
    }
  });  