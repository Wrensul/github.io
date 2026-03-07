window.TIMELINE_DOCUMENT = {
  title: "Parsklands Historical Timeline",
  subtitle: "An archival catalog of major eras, conflicts, and transformations.",
  eras: [
    {
      label: "BEFORE TIME",
      range: "Mythic Age",
      events: [
        {
          id: "first-waters-stir",
          title: "The First Waters Stir",
          yearsLabel: "Before Year 1",
          durationLabel: "Duration: Unknown",
          summary: [
            "The sleeping waters beneath Parsklands are said to have moved before there were names, roads, or kingdoms.",
            "Most surviving accounts treat this moment as the first sign that the world was awake and listening."
          ],
          images: [],
          notes: "Filed under creation myths from oral temple archives."
        },
        {
          id: "spirits-enter-world",
          title: "The Spirits Enter the World",
          yearsLabel: "Before Year 1",
          durationLabel: "Duration: Unknown",
          summary: [
            "Spirits crossed into the mortal realm and anchored themselves to waters, forests, and stone.",
            "Several traditions place this as the origin of vows between households and local shrines."
          ],
          images: [],
          notes: "Regional interpretations vary by valley and coast."
        }
      ]
    },
    {
      label: "AGE OF EARLY KINGDOMS",
      range: "Year 1 – 900",
      events: [
        {
          id: "first-shrine",
          title: "Founding of the First Shrine",
          yearsLabel: "Year 1",
          durationLabel: "Duration: Foundational event",
          summary: [
            "The first known state-sponsored shrine was established to mediate disputes between clans and ritual orders.",
            "Later dynasties copied its structure, turning it into a model for civic religion."
          ],
          images: [],
          notes: "Often used by historians as the start of standardized dating."
        },
        {
          id: "ivory-kingdom-rises",
          title: "The Ivory Kingdom Rises",
          yearsLabel: "Year 214",
          durationLabel: "Duration: 188 years (to collapse)",
          summary: [
            "The Ivory Kingdom unified trade roads and river tolls under a central court.",
            "Its legal tablets influenced later city-charters even after the dynasty fell."
          ],
          images: [],
          notes: "See archive references on coastal tax routes."
        },
        {
          id: "ivory-kingdom-collapse",
          title: "Collapse of the Ivory Kingdom",
          yearsLabel: "Year 402",
          durationLabel: "Duration: Multi-year decline",
          summary: [
            "Drought, succession disputes, and border raids fragmented the kingdom's authority.",
            "Power shifted to regional lords and shrine-leagues."
          ],
          images: [],
          notes: "Chronicles disagree on the exact final year by region."
        }
      ]
    },
    {
      label: "AGE OF FRACTURE",
      range: "Year 901 – 1300",
      events: [
        {
          id: "ember-war",
          title: "The Ember War",
          yearsLabel: "Year 1089 – 1097",
          durationLabel: "Duration: 8 years",
          summary: [
            "A prolonged conflict over shrine succession and control of volcanic forges escalated across several provinces.",
            "The eventual peace compact limited war levies and created neutral archive routes."
          ],
          images: [
            {
              src: "assets/background.jpg",
              alt: "An atmospheric image used as a stand-in illustration for the Ember War"
            }
          ],
          notes: "Add better period artwork any time by editing timeline-data.js."
        }
      ]
    }
  ]
};
