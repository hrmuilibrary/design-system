import { createFlagIcon } from '../createIcon';

// The source library's IconGb.tsx was a byte-for-byte copy of IconUs.tsx
// (same mask id, same American flag colors/geometry) — a copy-paste bug,
// not an actual Union Jack. Drawn fresh here instead of porting that bug.
export const FlagGbIcon = createFlagIcon('FlagGbIcon', (maskId) => (
  <>
    <rect y="3.43005" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id={maskId}
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect y="3.43005" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask={`url(#${maskId})`}>
      <rect x="-2" y="1.43" width="28" height="21.14" fill="#00247D" />
      {/* St Andrew's cross (white diagonals) */}
      <line x1="-2" y1="1.43" x2="26" y2="22.57" stroke="white" strokeWidth="3.4" />
      <line x1="26" y1="1.43" x2="-2" y2="22.57" stroke="white" strokeWidth="3.4" />
      {/* St Patrick's cross (red diagonals, counterchanged) */}
      <line x1="-2" y1="1.43" x2="12" y2="12" stroke="#CF142B" strokeWidth="1.4" />
      <line x1="12" y1="12" x2="26" y2="22.57" stroke="#CF142B" strokeWidth="1.4" />
      <line x1="26" y1="1.43" x2="12" y2="12" stroke="#CF142B" strokeWidth="1.4" />
      <line x1="12" y1="12" x2="-2" y2="22.57" stroke="#CF142B" strokeWidth="1.4" />
      {/* St George's cross */}
      <rect x="9.6" y="1.43" width="4.8" height="21.14" fill="white" />
      <rect x="-2" y="9.6" width="28" height="4.8" fill="white" />
      <rect x="10.8" y="1.43" width="2.4" height="21.14" fill="#CF142B" />
      <rect x="-2" y="10.8" width="28" height="2.4" fill="#CF142B" />
    </g>
  </>
));
