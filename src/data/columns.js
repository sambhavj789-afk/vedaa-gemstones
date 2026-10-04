// Columns of Vedaa — the journal.
//
// The three below are evergreen explainers, written to be useful rather than
// timely. Industry news goes in the same shape: add an entry at the TOP of the
// array with a `date`, and it will lead the journal and the home page teaser.
// Entries without a date simply show their category instead.
//
// date: a display string, e.g. 'March 2026'. Omit it for an evergreen piece.

export const columns = [
  {
    slug: 'what-origin-actually-tells-you',
    category: 'Sourcing',
    title: 'What origin actually tells you',
    standfirst:
      'Colombia, Kashmir, Mogok. Origin moves price more than almost anything else written on a report, and it is the line most often misread.',
    body: [
      'Origin is a statement about where a stone formed. It is not a grade. A Colombian emerald can be dull and a Zambian one can be extraordinary, and both happen often enough that no buyer should treat the country as a verdict. What origin carries is a tendency, and the tendency has a cause: the geology of a deposit decides which trace elements enter the crystal, and those elements decide colour.',
      'Colombian emeralds formed in sedimentary black shale rather than in pegmatite, which is why they lean warm and slightly blue-green, and why they so often hold the three-phase inclusions — a bubble, a liquid and a salt crystal in one cavity — that a gemmologist looks for first. Zambian material formed with more iron present, and tends to sit cooler and darker on the eye, frequently cleaner.',
      'Kashmir sapphire is scarce for a duller reason than romance. The deposit was found high in the north-west Himalaya in the early 1880s and the richest of it was worked out within roughly a decade. Its reputation rests on a velvety quality, caused by fine inclusions scattering light inside the stone rather than by any pigment unique to the valley.',
      'It is worth knowing how origin is decided. A laboratory compares a stone against reference material collected from known mines, reading inclusions and trace-element chemistry, and reaches an opinion. Laboratories sometimes differ on the same stone. A report that states origin is stating a conclusion, not a measurement.',
      'Read origin as context, then judge the stone in front of you.',
    ],
  },
  {
    slug: 'heated-unheated-and-the-line-on-the-report',
    category: 'Treatment',
    title: 'Heated, unheated, and the line on the report',
    standfirst:
      'Most ruby and sapphire on the market has been heated. That is not a scandal. What matters is that the report says so, and says what kind.',
    body: [
      'Heating corundum is old practice, not a modern trick. Held at the right temperature, the rutile silk suspended inside a sapphire dissolves back into the crystal, clouding clears and colour deepens. The change is permanent and stable, and a heated stone is a natural stone.',
      'The premium paid for unheated material is real, and at the top of the market it is large. The reason is arithmetic rather than sentiment: a stone that already has fine colour and clarity without help is rarer than one that needed the furnace, because it did in the ground what heat is otherwise asked to do.',
      'The distinction that should concern a buyer is not heated against unheated but which treatment, and whether it was disclosed. Heat sits at one end of the range. Lattice diffusion, where an element such as beryllium is driven into the stone at high temperature to change its colour, is a different proposition. So is filling the fractures of a ruby with lead glass, which affects both what the stone is worth and how it must be cleaned and set for the rest of its life.',
      'A report from GIA, IGI or SSEF states treatment. At this level, a seller who cannot produce one has answered the question.',
    ],
  },
  {
    slug: 'reading-the-report-before-the-price',
    category: 'Certification',
    title: 'Reading the report before the price',
    standfirst:
      'A certificate is not a guarantee of beauty. It is a description. Here is the order worth reading it in.',
    body: [
      'Identity first. Species and variety: that the stone is corundum, and that it is sapphire. This is the part of the report that is a measurement rather than a judgement, and it is the part that a buyer is least often misled on and most reassured by.',
      'Treatment second, because it changes the price more than any other disclosed fact. Then origin, if the report states one, remembering that origin is an opinion offered by the laboratory rather than a fact read off an instrument.',
      'Then the physical description: weight, measurements, cut and proportion. These are plain, and they are the easiest to check against the stone in your hand.',
      'Colour comes last on the page and last in certainty. There is no universal grading scale for coloured stones in the way there is for colourless diamond. Words such as vivid or royal are the vocabulary of a particular laboratory, not an industry standard, and they do not transfer cleanly between reports.',
      'Which is the point. The report tells you what the stone is and what has been done to it. Whether it is beautiful is still yours to decide, and it is best decided in daylight, next to another stone.',
    ],
  },
]
