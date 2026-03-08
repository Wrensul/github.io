// Global site switches.
// Change true/false values here when you want to turn features on or off.
window.SITE_CONFIG = {
  // Master switch for under-construction mode across the whole site.
  // false = always off everywhere.
  // true = check each page switch below.
  UNDER_CONSTRUCTION_MODE: true,

  // Per-page under-construction switches.
  // Set a page to true/false to override it individually.
  // If a page is missing from this list, it follows UNDER_CONSTRUCTION_MODE.
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
