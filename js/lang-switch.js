document.addEventListener("DOMContentLoaded", function () {

    const currentPath = window.location.pathname;
    const isEN = currentPath.includes("/en/");
    const isFR = currentPath.includes("/fr/");
  
    const links = document.querySelectorAll("[data-original-href]");
  
    links.forEach(link => {
      const original = link.getAttribute("data-original-href");
  
      if (!original) return;
  
      let clean = original
        .replace("/docs", "")
        .replace("index.html", "")
        .replace(/\/$/, "");
  
      link.setAttribute("href", clean + "/");
    });
  
  });  