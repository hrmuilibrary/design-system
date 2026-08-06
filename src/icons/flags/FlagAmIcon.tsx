import { createFlagIcon } from '../createIcon';

export const FlagAmIcon = createFlagIcon('FlagAmIcon', (maskId) => (
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
      <path d="M0 14.8587H24V9.14441H0V14.8587Z" fill="#1047B9" />
      <path d="M0 9.14434H24V3.43005H0V9.14434Z" fill="#F01C31" />
      <path d="M0 20.5729H24V14.8586H0V20.5729Z" fill="#FECB2F" />
    </g>
  </>
));
