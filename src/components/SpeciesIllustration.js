import React from 'react';

/**
 * Editorial-grade SVG illustrations for the 7 core species.
 * Used as fallback when a real photo isn't available in /public/species/.
 * Drawn in a single accent color that matches the off-white theme.
 */

const STROKE = '#1a1f36';
const FILL_LIGHT = '#fbf8f1';
const FILL_ACCENT = '#c5a565';
const FILL_DARK = '#5c6272';

// 800x500 viewBox throughout for consistency
const W = 800, H = 500;

const Vannamei = () => (
  <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vannamei shrimp illustration">
    {/* Body — curved C-shape */}
    <path d="M 120 250 Q 150 180 230 170 L 540 170 Q 620 180 660 220 L 680 250 Q 670 280 640 285 L 250 285 Q 160 290 120 250 Z"
      fill={FILL_ACCENT} stroke={STROKE} strokeWidth="3" strokeLinejoin="round"/>
    {/* Body segments */}
    {[290, 340, 390, 440, 490, 540].map(x => (
      <path key={x} d={`M ${x} 175 Q ${x+5} 230 ${x+10} 285`}
        fill="none" stroke={STROKE} strokeWidth="1.5" opacity="0.5"/>
    ))}
    {/* Head + rostrum (front pointy bit) */}
    <path d="M 120 250 L 60 230 L 80 250 L 60 270 L 120 250 Z"
      fill={FILL_ACCENT} stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Eye */}
    <circle cx="135" cy="240" r="6" fill={STROKE}/>
    <circle cx="137" cy="238" r="2" fill={FILL_LIGHT}/>
    {/* Antennae */}
    <path d="M 110 245 Q 50 200 30 150" fill="none" stroke={STROKE} strokeWidth="1.5"/>
    <path d="M 115 255 Q 60 280 40 320" fill="none" stroke={STROKE} strokeWidth="1.5"/>
    {/* Tail fan */}
    <path d="M 660 220 L 740 200 L 760 240 L 740 280 L 730 250 L 760 270 L 720 290 L 680 280"
      fill={FILL_ACCENT} stroke={STROKE} strokeWidth="2" strokeLinejoin="round"/>
    {/* Legs (small) */}
    {[230, 280, 330, 380, 430, 480, 530].map(x => (
      <line key={x} x1={x} y1="285" x2={x+5} y2="320" stroke={STROKE} strokeWidth="1.5"/>
    ))}
    {/* Label */}
    <text x={W/2} y={H-30} textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill={FILL_DARK} fontStyle="italic">
      Litopenaeus vannamei · Pacific white shrimp
    </text>
  </svg>
);

const Pomfret = () => (
  <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Silver pomfret illustration">
    {/* Body — diamond/disc shape */}
    <path d="M 200 250 Q 250 100 400 90 Q 600 100 660 250 Q 600 400 400 410 Q 250 400 200 250 Z"
      fill={FILL_LIGHT} stroke={STROKE} strokeWidth="3" strokeLinejoin="round"/>
    {/* Tail fork */}
    <path d="M 660 250 L 740 180 L 720 250 L 740 320 Z"
      fill={FILL_LIGHT} stroke={STROKE} strokeWidth="3" strokeLinejoin="round"/>
    {/* Dorsal fin */}
    <path d="M 380 95 Q 430 50 530 80 L 510 110 Q 460 90 380 100 Z"
      fill={FILL_LIGHT} stroke={STROKE} strokeWidth="2" strokeLinejoin="round"/>
    {/* Anal fin */}
    <path d="M 380 405 Q 430 450 530 420 L 510 390 Q 460 410 380 400 Z"
      fill={FILL_LIGHT} stroke={STROKE} strokeWidth="2" strokeLinejoin="round"/>
    {/* Eye */}
    <circle cx="245" cy="225" r="14" fill={FILL_LIGHT} stroke={STROKE} strokeWidth="2"/>
    <circle cx="245" cy="225" r="7" fill={STROKE}/>
    <circle cx="247" cy="222" r="2" fill={FILL_LIGHT}/>
    {/* Mouth */}
    <path d="M 215 260 Q 200 270 215 280" fill="none" stroke={STROKE} strokeWidth="2"/>
    {/* Gill plate */}
    <path d="M 290 160 Q 320 250 290 340" fill="none" stroke={STROKE} strokeWidth="1.5" opacity="0.5"/>
    {/* Lateral scales/shimmer */}
    {[400, 460, 520, 580].map(x => (
      <path key={x} d={`M ${x} 200 L ${x-10} 250 L ${x} 300`}
        fill="none" stroke={STROKE} strokeWidth="1" opacity="0.25"/>
    ))}
    <text x={W/2} y={H-30} textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill={FILL_DARK} fontStyle="italic">
      Pampus argenteus · Silver pomfret
    </text>
  </svg>
);

const Lobster = () => (
  <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spiny lobster illustration">
    {/* Body — segmented tail */}
    <path d="M 250 220 L 250 280 Q 290 290 330 290 L 600 290 Q 640 290 660 280 L 680 250 L 660 220 Q 640 210 600 210 L 330 210 Q 290 210 250 220 Z"
      fill={FILL_ACCENT} stroke={STROKE} strokeWidth="3" strokeLinejoin="round"/>
    {/* Tail segments */}
    {[330, 390, 450, 510, 570].map(x => (
      <line key={x} x1={x} y1="210" x2={x} y2="290" stroke={STROKE} strokeWidth="2" opacity="0.6"/>
    ))}
    {/* Tail fan */}
    <path d="M 680 250 L 750 200 L 770 250 L 750 300 Z"
      fill={FILL_ACCENT} stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Carapace (head) */}
    <path d="M 250 220 Q 200 215 170 230 Q 150 250 170 270 Q 200 285 250 280 Z"
      fill={FILL_ACCENT} stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Eyes */}
    <circle cx="180" cy="240" r="5" fill={STROKE}/>
    <circle cx="180" cy="260" r="5" fill={STROKE}/>
    {/* Long antennae (the "spiny" identifier — no claws like American lobster) */}
    <path d="M 175 235 Q 100 180 60 100" fill="none" stroke={STROKE} strokeWidth="2.5"/>
    <path d="M 175 265 Q 100 320 60 400" fill="none" stroke={STROKE} strokeWidth="2.5"/>
    {/* Walking legs */}
    {[280, 330, 380, 430, 480, 530].map(x => (
      <g key={x}>
        <line x1={x} y1="290" x2={x-10} y2="350" stroke={STROKE} strokeWidth="2"/>
        <line x1={x-10} y1="350" x2={x-15} y2="380" stroke={STROKE} strokeWidth="2"/>
      </g>
    ))}
    {/* Spines on carapace */}
    {[200, 220].map(x => (
      <line key={x} x1={x} y1="220" x2={x-5} y2="205" stroke={STROKE} strokeWidth="1.5"/>
    ))}
    <text x={W/2} y={H-30} textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill={FILL_DARK} fontStyle="italic">
      Panulirus homarus · Spiny lobster
    </text>
  </svg>
);

const MudCrab = () => (
  <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mud crab illustration">
    {/* Carapace — wider than tall, oval */}
    <ellipse cx={W/2} cy="240" rx="180" ry="110"
      fill={FILL_ACCENT} stroke={STROKE} strokeWidth="3"/>
    {/* Carapace ridges */}
    {[200, 240, 280].map(y => (
      <ellipse key={y} cx={W/2} cy={y} rx="160" ry="10"
        fill="none" stroke={STROKE} strokeWidth="1" opacity="0.3"/>
    ))}
    {/* Spines on edge */}
    {[230, 260, 290, 510, 540, 570].map(x => (
      <path key={x} d={`M ${x} 145 L ${x+5} 130 L ${x+10} 145`}
        fill={FILL_ACCENT} stroke={STROKE} strokeWidth="1.5" strokeLinejoin="round"/>
    ))}
    {/* Eyes (on stalks) */}
    <circle cx="370" cy="155" r="6" fill={STROKE}/>
    <circle cx="430" cy="155" r="6" fill={STROKE}/>
    <line x1="370" y1="155" x2="375" y2="170" stroke={STROKE} strokeWidth="2"/>
    <line x1="430" y1="155" x2="425" y2="170" stroke={STROKE} strokeWidth="2"/>
    {/* Big claws (chelipeds) */}
    <g>
      <path d="M 220 240 Q 150 230 100 200 Q 70 195 60 220 L 70 240 L 60 260 Q 70 285 100 280 Q 150 250 220 240 Z"
        fill={FILL_ACCENT} stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1="100" y1="220" x2="80" y2="225" stroke={STROKE} strokeWidth="2"/>
    </g>
    <g>
      <path d="M 580 240 Q 650 230 700 200 Q 730 195 740 220 L 730 240 L 740 260 Q 730 285 700 280 Q 650 250 580 240 Z"
        fill={FILL_ACCENT} stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1="700" y1="220" x2="720" y2="225" stroke={STROKE} strokeWidth="2"/>
    </g>
    {/* Walking legs (4 pairs) */}
    {[
      [250, 320, 220, 380],
      [310, 340, 280, 410],
      [490, 340, 520, 410],
      [550, 320, 580, 380],
      [280, 330, 240, 400],
      [520, 330, 560, 400],
    ].map((pts, i) => (
      <g key={i}>
        <line x1={pts[0]} y1={pts[1]} x2={pts[2]} y2={pts[3]} stroke={STROKE} strokeWidth="2.5"/>
      </g>
    ))}
    <text x={W/2} y={H-30} textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill={FILL_DARK} fontStyle="italic">
      Scylla serrata · Mud crab
    </text>
  </svg>
);

const Octopus = () => (
  <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Octopus illustration">
    {/* Mantle (head bulb) */}
    <ellipse cx={W/2} cy="180" rx="110" ry="90"
      fill="#a8322d" stroke={STROKE} strokeWidth="3"/>
    {/* Eye */}
    <ellipse cx="360" cy="175" rx="20" ry="14" fill={FILL_LIGHT} stroke={STROKE} strokeWidth="2"/>
    <ellipse cx="360" cy="175" rx="6" ry="11" fill={STROKE}/>
    {/* Mouth/beak hint */}
    <path d="M 380 230 Q 400 245 420 230" fill="none" stroke={STROKE} strokeWidth="2"/>
    {/* 8 tentacles — flowing curves */}
    <g fill="#a8322d" stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round">
      <path d="M 320 240 Q 250 290 200 380 Q 195 420 220 430 Q 235 415 250 380 Q 290 320 340 280 Z"/>
      <path d="M 360 250 Q 320 350 280 440 Q 280 470 305 470 Q 320 450 335 410 Q 360 340 380 290 Z"/>
      <path d="M 400 255 Q 400 380 400 460 Q 405 480 425 478 Q 425 460 425 410 Q 425 320 425 280 Z"/>
      <path d="M 440 250 Q 480 350 520 440 Q 525 470 500 470 Q 485 450 470 410 Q 445 340 425 290 Z"/>
      <path d="M 480 240 Q 550 290 600 380 Q 605 420 580 430 Q 565 415 550 380 Q 510 320 460 280 Z"/>
      <path d="M 305 200 Q 220 215 150 260 Q 130 285 155 295 Q 175 285 210 270 Q 280 245 330 230 Z"/>
      <path d="M 495 200 Q 580 215 650 260 Q 670 285 645 295 Q 625 285 590 270 Q 520 245 470 230 Z"/>
      <path d="M 400 90 Q 380 60 360 30 Q 350 15 380 12 Q 395 35 400 70 Z"/>
    </g>
    {/* Suckers — small dots on tentacles */}
    {[
      [220, 380], [250, 340], [280, 300],
      [310, 380], [330, 420], [350, 450],
      [400, 380], [410, 420], [415, 450],
      [470, 380], [490, 420], [510, 450],
      [550, 380], [580, 340], [610, 300],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="2.5" fill={FILL_LIGHT} stroke={STROKE} strokeWidth="0.8"/>
    ))}
    <text x={W/2} y={H-30} textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill={FILL_DARK} fontStyle="italic">
      Octopus vulgaris · Common octopus
    </text>
  </svg>
);

const Tuna = () => (
  <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yellowfin tuna illustration">
    {/* Torpedo body */}
    <path d="M 100 250 Q 200 130 450 130 Q 600 135 670 220 L 680 250 L 670 280 Q 600 365 450 370 Q 200 370 100 250 Z"
      fill="#0d3b66" stroke={STROKE} strokeWidth="3" strokeLinejoin="round"/>
    {/* Belly highlight (lighter underside) */}
    <path d="M 200 320 Q 350 380 600 340 Q 600 365 450 370 Q 250 370 200 320 Z"
      fill={FILL_LIGHT} stroke="none" opacity="0.4"/>
    {/* Tail fork — distinctive crescent */}
    <path d="M 670 220 L 760 130 L 740 230 L 760 250 L 740 270 L 760 370 L 670 280 Z"
      fill="#0d3b66" stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Yellow second dorsal + anal fins (the "yellowfin" feature) */}
    <path d="M 480 130 L 540 80 L 600 130 Z"
      fill="#FFC72C" stroke={STROKE} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M 480 370 L 540 420 L 600 370 Z"
      fill="#FFC72C" stroke={STROKE} strokeWidth="2" strokeLinejoin="round"/>
    {/* Yellow finlets */}
    {[610, 630, 650].map(x => (
      <g key={x}>
        <path d={`M ${x} 200 L ${x+8} 180 L ${x+15} 200 Z`}
          fill="#FFC72C" stroke={STROKE} strokeWidth="1"/>
        <path d={`M ${x} 300 L ${x+8} 320 L ${x+15} 300 Z`}
          fill="#FFC72C" stroke={STROKE} strokeWidth="1"/>
      </g>
    ))}
    {/* First dorsal fin (front) */}
    <path d="M 320 145 L 380 90 L 460 130 Z"
      fill="#0d3b66" stroke={STROKE} strokeWidth="2"/>
    {/* Pectoral fin */}
    <path d="M 250 270 Q 300 320 360 290 L 320 250 Z"
      fill="#0d3b66" stroke={STROKE} strokeWidth="2"/>
    {/* Eye */}
    <circle cx="180" cy="240" r="14" fill={FILL_LIGHT} stroke={STROKE} strokeWidth="2"/>
    <circle cx="180" cy="240" r="7" fill={STROKE}/>
    <circle cx="182" cy="237" r="2" fill={FILL_LIGHT}/>
    {/* Mouth line */}
    <path d="M 110 265 L 160 270" stroke={STROKE} strokeWidth="2.5"/>
    {/* Gill cover */}
    <path d="M 230 170 Q 245 250 230 330" fill="none" stroke={STROKE} strokeWidth="1.5" opacity="0.5"/>
    <text x={W/2} y={H-30} textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill={FILL_DARK} fontStyle="italic">
      Thunnus albacares · Yellowfin tuna
    </text>
  </svg>
);

const Cuttlefish = () => (
  <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cuttlefish illustration">
    {/* Mantle — flattened oval */}
    <ellipse cx={W/2} cy="220" rx="220" ry="100"
      fill="#7a5b8c" stroke={STROKE} strokeWidth="3"/>
    {/* Mantle stripes (cuttlefish characteristic) */}
    {[170, 200, 230, 260, 290].map(y => (
      <path key={y} d={`M 280 ${y} Q 400 ${y-5} 520 ${y}`}
        fill="none" stroke={STROKE} strokeWidth="1" opacity="0.4"/>
    ))}
    {/* Lateral fin (skirt around mantle) */}
    <path d="M 200 220 Q 200 145 250 130 Q 400 110 550 130 Q 600 145 600 220 Q 600 295 550 310 Q 400 330 250 310 Q 200 295 200 220 Z"
      fill="#7a5b8c" stroke={STROKE} strokeWidth="2" opacity="0.6"/>
    {/* Eye — large W-pupil characteristic */}
    <ellipse cx="270" cy="210" rx="30" ry="22" fill={FILL_LIGHT} stroke={STROKE} strokeWidth="2"/>
    <path d="M 250 210 Q 260 215 270 210 Q 280 215 290 210 Q 285 222 275 222 Q 265 222 250 210 Z"
      fill={STROKE}/>
    {/* 8 short arms */}
    <g fill="#7a5b8c" stroke={STROKE} strokeWidth="2" strokeLinejoin="round">
      <path d="M 200 240 L 130 270 Q 110 280 130 290 L 200 270 Z"/>
      <path d="M 195 270 L 120 310 Q 100 320 125 330 L 200 295 Z"/>
      <path d="M 200 200 L 130 180 Q 110 175 125 165 L 200 175 Z"/>
      <path d="M 195 180 L 120 150 Q 100 145 125 135 L 200 155 Z"/>
    </g>
    {/* 2 long tentacles (longer than arms) */}
    <path d="M 200 220 Q 100 240 50 200 Q 30 195 35 215 Q 60 230 100 240 Q 150 250 200 240 Z"
      fill="#7a5b8c" stroke={STROKE} strokeWidth="2"/>
    {/* Suckers on tentacle club */}
    {[60, 75, 90].map(x => (
      <circle key={x} cx={x} cy="215" r="3" fill={FILL_LIGHT} stroke={STROKE} strokeWidth="0.8"/>
    ))}
    <text x={W/2} y={H-30} textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fill={FILL_DARK} fontStyle="italic">
      Sepia pharaonis · Pharaoh cuttlefish
    </text>
  </svg>
);

const ILLUSTRATIONS = {
  'vannamei': Vannamei,
  'pomfret-silver': Pomfret,
  'lobster-spiny': Lobster,
  'mudcrab': MudCrab,
  'octopus': Octopus,
  'tuna-yellowfin': Tuna,
  'cuttlefish': Cuttlefish,
};

export default function SpeciesIllustration({ id }) {
  const Comp = ILLUSTRATIONS[id];
  if (!Comp) return null;
  return <Comp />;
}
