import { createFlagIcon } from '../createIcon';

export const FlagRuIcon = createFlagIcon('FlagRuIcon', (maskId) => (
  <>
    <rect
      x="0.25"
      y="3.67999"
      width="23.5"
      height="16.6429"
      rx="1.75"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id={maskId}
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="3"
      width="24"
      height="18"
    >
      <rect
        x="0.25"
        y="3.67999"
        width="23.5"
        height="16.6429"
        rx="1.75"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask={`url(#${maskId})`}>
      <path d="M0 14.8586H24V9.14435H0V14.8586Z" fill="#0C47B7" />
      <path d="M0 20.573H24V14.8587H0V20.573Z" fill="#E53B35" />
    </g>
  </>
));
