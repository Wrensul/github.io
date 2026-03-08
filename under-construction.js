(() => {
  // Flip this to false when you are ready to launch your page content.
  const UNDER_CONSTRUCTION_MODE = true;

  const pagesUnderConstruction = new Set([
    "atlas.html",
    "magic.html",
    "creatures.html",
    "timeline.html",
    "glossary.html",
    "words-of-parsk.html",
    "fables.html",
    "small-memories.html",
    "old-friends.html"
  ]);

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  if (!UNDER_CONSTRUCTION_MODE || !pagesUnderConstruction.has(currentPage)) {
    return;
  }

  const main = document.querySelector("main");
  if (!main) {
    return;
  }

  const title = document.title.split("|")[0].trim() || "This page";

  for (const child of Array.from(main.children)) {
    child.hidden = true;
  }

  const sign = document.createElement("section");
  sign.className = "uc-sign";
  sign.innerHTML = `
    <h1>UNDER CONSTRUCTION</h1>
    <p>${title} is currently being prepared.</p>
    <p class="uc-note">Set <code>UNDER_CONSTRUCTION_MODE</code> to <code>false</code> in <code>under-construction.js</code> when you are ready to launch.</p>
  `;

  main.appendChild(sign);

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

      .uc-sign .uc-note {
        margin-top: 16px;
        font-size: clamp(14px, 1.7vw, 18px);
        opacity: 0.9;
      }
    `;
    document.head.appendChild(style);
  }
})();
