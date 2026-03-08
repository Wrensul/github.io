(() => {
  const siteConfig = window.SITE_CONFIG || {};
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const globalToggle = siteConfig.UNDER_CONSTRUCTION_MODE ?? false;
  const pageToggles = siteConfig.UNDER_CONSTRUCTION_PAGES || {};
  const configPageToggle = pageToggles[currentPage];
  const inlinePageToggle = window.PAGE_UNDER_CONSTRUCTION;

  // Priority:
  // 1) per-page inline toggle in each HTML file
  // 2) optional per-page toggle in site-config.js
  // 3) global site-config.js toggle
  const isUnderConstruction =
    typeof inlinePageToggle === "boolean"
      ? inlinePageToggle
      : typeof configPageToggle === "boolean"
        ? configPageToggle
        : globalToggle;

  if (!isUnderConstruction) {
    return;
  }

  const container = document.querySelector("main") || document.body;
  if (!container) {
    return;
  }

  const title = document.title.split("|")[0].trim() || "This page";

  for (const child of Array.from(container.children)) {
    if (child.tagName === "SCRIPT" || child.tagName === "STYLE") {
      continue;
    }
    child.hidden = true;
  }

  const sign = document.createElement("section");
  sign.className = "uc-sign";
  sign.innerHTML = `
    <h1>UNDER CONSTRUCTION</h1>
    <p>${title} is currently being prepared.</p>
  `;

  container.appendChild(sign);

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
