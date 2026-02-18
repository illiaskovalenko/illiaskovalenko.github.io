(function () {
    function computeAltPath(pathname) {
      if (pathname === "/en/") pathname = "/en/index.html";
      if (pathname === "/fr/") pathname = "/fr/index.html";
  
      const isEn = pathname.startsWith("/en/");
      const isFr = pathname.startsWith("/fr/");
      if (!isEn && !isFr) return null;
  
      const targetLang = isEn ? "fr" : "en";
      return pathname.replace(/^\/(en|fr)\//, `/${targetLang}/`);
    }
  
    function apply() {
      const alt = computeAltPath(window.location.pathname);
      if (!alt) return;
  
      const targetLabel = window.location.pathname.startsWith("/en/") ? "FR" : "EN";
  
      // Look for the navbar link whose text is exactly FR/EN
      const links = Array.from(document.querySelectorAll('nav a, header a'))
        .filter(a => (a.textContent || "").trim() === targetLabel);
  
      if (links.length === 0) return;
  
      links.forEach(a => {
        a.setAttribute("href", alt);
        a.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = alt;
        });
      });
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", apply);
    } else {
      apply();
    }
  })();
  