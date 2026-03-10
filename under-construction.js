(() => {
  const siteConfig = window.SITE_CONFIG || {};
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const globalToggle = siteConfig.UNDER_CONSTRUCTION_MODE ?? false;
  const pageToggles = siteConfig.UNDER_CONSTRUCTION_PAGES || {};
  const pageToggle = pageToggles[currentPage];

  const isUnderConstruction =
    typeof pageToggle === "boolean" ? pageToggle : globalToggle;

  if (!isUnderConstruction) {
    return;
  }

  const body = document.body;
  if (!body) {
    return;
  }

  const title = document.title.split("|")[0].trim() || "This page";

  const headerSlot =
    document.getElementById("header") ||
    document.getElementById("site-header") ||
    document.querySelector("header");
  const footerSlot =
    document.getElementById("footer") ||
    document.getElementById("site-footer") ||
    document.querySelector("footer");

  const hasHeaderFooterId = (el) =>
    Boolean(el.id && /(?:^|[-_])(site-)?(?:header|footer)(?:$|[-_])/i.test(el.id));

  const isNavigationContainer = (el) => {
    if (!el || !(el instanceof Element)) {
      return false;
    }

    if (el === headerSlot || el === footerSlot) {
      return true;
    }

    if (hasHeaderFooterId(el)) {
      return true;
    }

    if (el.matches("#header, #footer, #site-header, #site-footer")) {
      return true;
    }

    return Boolean(el.querySelector("#header, #footer, #site-header, #site-footer"));
  };

  for (const child of Array.from(body.children)) {
    if (child.tagName === "SCRIPT" || child.tagName === "STYLE") {
      continue;
    }

    if (isNavigationContainer(child)) {
      child.hidden = false;
      continue;
    }

    child.hidden = true;
  }

  if (headerSlot) {
    headerSlot.hidden = false;
  }

  if (footerSlot) {
    footerSlot.hidden = false;
  }

  let signHost = document.getElementById("uc-sign-host");
  if (!signHost) {
    signHost = document.createElement("div");
    signHost.id = "uc-sign-host";

    if (footerSlot && footerSlot.parentElement === body) {
      body.insertBefore(signHost, footerSlot);
    } else {
      body.appendChild(signHost);
    }
  }

  const sign = document.createElement("section");
  sign.className = "uc-sign";
  sign.innerHTML = `
    <h1>UNDER CONSTRUCTION</h1>
    <p>${title} is currently being prepared.</p>
  `;

  signHost.hidden = false;
  signHost.replaceChildren(sign);

  if (!document.getElementById("uc-sign-style")) {
    const style = document.createElement("style");
    style.id = "uc-sign-style";
    style.textContent = `
      .uc-sign {
        max-width: min(92vw, 860px);
        margin: 48px auto;
        background: rgba(255, 255, 255, 0.95);
        border: 4px groove #222;
        box-shadow: 4px 4px 8px #555;
        padding: clamp(24px, 4vw, 40px) clamp(20px, 4vw, 30px);
        text-align: center;
        font-family: 'Baskervville', serif;
      }

      .uc-sign h1 {
        margin: 0 0 14px;
        font-size: clamp(30px, 5vw, 54px);
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: underline;
        text-underline-offset: 8px;
      }

      .uc-sign p {
        margin: 0;
        font-size: clamp(18px, 2.4vw, 28px);
        line-height: 1.35;
      }
    `;
    document.head.appendChild(style);
  }
})();
