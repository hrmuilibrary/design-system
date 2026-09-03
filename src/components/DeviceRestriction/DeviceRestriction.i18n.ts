import type { TranslationLocale } from '../../types';
import type { DeviceRestrictionType } from './DeviceRestriction.types';

interface DeviceRestrictionCopy {
  title: string;
  description: string;
}

export const DEVICE_RESTRICTION_TRANSLATIONS: Record<
  TranslationLocale,
  Record<DeviceRestrictionType, DeviceRestrictionCopy>
> = {
  'en-US': {
    mobile: {
      title: 'Mobile only',
      description:
        'This page is available only on mobile devices. Please open this page on your phone to continue.',
    },
    tablet: {
      title: 'Tablet only',
      description:
        'This page is available only on tablet devices. Please open this page on your tablet to continue.',
    },
    desktop: {
      title: 'Desktop only',
      description:
        'This page is available only on desktop devices. Please open this page on your computer to continue.',
    },
    'mobile-tablet': {
      title: 'Mobile experience',
      description:
        'This page is available only on mobile and tablet devices. Please open this page on your phone or tablet to continue.',
    },
  },
  'ru-RU': {
    mobile: {
      title: 'Только для мобильных устройств',
      description:
        'Эта страница доступна только на мобильных устройствах. Пожалуйста, откройте её на телефоне, чтобы продолжить.',
    },
    tablet: {
      title: 'Только для планшетов',
      description:
        'Эта страница доступна только на планшетах. Пожалуйста, откройте её на планшете, чтобы продолжить.',
    },
    desktop: {
      title: 'Только для компьютера',
      description:
        'Эта страница доступна только на компьютере. Пожалуйста, откройте её на компьютере, чтобы продолжить.',
    },
    'mobile-tablet': {
      title: 'Мобильный интерфейс',
      description:
        'Эта страница доступна только на мобильных устройствах и планшетах. Пожалуйста, откройте её на телефоне или планшете, чтобы продолжить.',
    },
  },
  'hy-AM': {
    mobile: {
      title: 'Միայն մոբայլի համար',
      description:
        'Այս էջը հասանելի է միայն մոբայլ սարքերում։ Շարունակելու համար խնդրում ենք բացել այն ձեր հեռախոսում։',
    },
    tablet: {
      title: 'Միայն պլանշետի համար',
      description:
        'Այս էջը հասանելի է միայն պլանշետներում։ Շարունակելու համար խնդրում ենք բացել այն ձեր պլանշետում։',
    },
    desktop: {
      title: 'Միայն համակարգչի համար',
      description:
        'Այս էջը հասանելի է միայն համակարգչում։ Շարունակելու համար խնդրում ենք բացել այն ձեր համակարգչում։',
    },
    'mobile-tablet': {
      title: 'Մոբայլ փորձառություն',
      description:
        'Այս էջը հասանելի է միայն մոբայլ և պլանշետ սարքերում։ Շարունակելու համար խնդրում ենք բացել այն ձեր հեռախոսում կամ պլանշետում։',
    },
  },
};
