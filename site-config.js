// Global site switches.
// You can mostly use each page's own toggle near the top of that page file.
// This file is optional fallback control.
window.SITE_CONFIG = {
  // Master fallback switch.
  UNDER_CONSTRUCTION_MODE: false,

  // Optional fallback page switches.
  // If a page has window.PAGE_UNDER_CONSTRUCTION in its HTML,
  // that inline value takes priority.
  UNDER_CONSTRUCTION_PAGES: {
    "index.html": false,
    "site-policies.html": false,
    "field-thistles.html": false,
    "parsklands.html": false,
    "atlas.html": true,
    "magic.html": true,
    "creatures.html": true,
    "timeline.html": true,
    "glossary.html": true,
    "words-of-parsk.html": true,
    "fables.html": true,
    "small-memories.html": true,
    "old-friends.html": true,
    "calendar.html": false,
    "test.html": false
  }
};
