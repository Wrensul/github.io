(() => {
  // Quick page switches for the under-construction banner.
  // true = hide that page's content between the header and footer.
  // false = force that page to show normally.
  // null = use UNDER_CONSTRUCTION_MODE below instead.
  const pageUnderConstruction = {
    "index.html": null,
    "site-policies.html": null,
    "field-thistles.html": null,
    "parsklands.html": null,
    "atlas.html": false,
    "magic.html": false,
    "creatures.html": false,
    "glossary.html": false,
    "words-of-parsk.html": false,
    "fables.html": false,
    "small-memories.html": false,
    "old-friends.html": false,
    "calendar.html": null,
    "test.html": null
  };

  // Used when a page is set to null or is not listed above.
  const UNDER_CONSTRUCTION_MODE = false;

  const rawPage = window.location.pathname.split("/").pop() || "index.html";
  const currentPage = decodeURIComponent(rawPage);
  const extensionlessPage = currentPage.replace(/\.html$/i, "");
  const pageToggle =
    pageUnderConstruction[currentPage] ??
    pageUnderConstruction[extensionlessPage] ??
    pageUnderConstruction[`${extensionlessPage}.html`];
  const isUnderConstruction =
    typeof pageToggle === "boolean" ? pageToggle : UNDER_CONSTRUCTION_MODE;

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
    document.getElementById("site-header");
  const footerSlot =
    document.getElementById("footer") ||
    document.getElementById("site-footer");

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

    return el.matches("#header, #footer, #site-header, #site-footer");
  };

  const shouldSkipElement = (el) =>
    el.tagName === "SCRIPT" ||
    el.tagName === "STYLE" ||
    el.id === "uc-sign-host";

  const hidePageElement = (el) => {
    if (shouldSkipElement(el)) {
      return;
    }

    if (isNavigationContainer(el)) {
      el.hidden = false;
      el.removeAttribute("data-uc-hidden");
      return;
    }

    el.hidden = true;
    el.setAttribute("data-uc-hidden", "true");
  };

  for (const child of Array.from(body.children)) {
    hidePageElement(child);
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

  const keepPageHidden = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof Element && node.parentElement === body) {
          hidePageElement(node);
        }
      }
    }
  });
  keepPageHidden.observe(body, { childList: true });

  if (!document.getElementById("uc-sign-style")) {
    const style = document.createElement("style");
    style.id = "uc-sign-style";
    style.textContent = `
      [data-uc-hidden="true"] {
        display: none !important;
        visibility: hidden !important;
      }

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
