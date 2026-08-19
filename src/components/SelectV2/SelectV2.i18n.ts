import type { TranslationLocale } from '../../types';

interface SelectV2Translations {
  placeholder: string;
  noResults: string;
  loadingMessage: string;
  selectAllLabel: (count: number) => string;
  createLabel: (value: string) => string;
}

export const SELECT_V2_TRANSLATIONS: Record<TranslationLocale, SelectV2Translations> = {
  'en-US': {
    placeholder: 'Select…',
    noResults: 'No results',
    loadingMessage: 'Loading…',
    selectAllLabel: (count) => `Select all (${count})`,
    createLabel: (value) => `Create "${value}"`,
  },
  'ru-RU': {
    placeholder: 'Выберите…',
    noResults: 'Нет результатов',
    loadingMessage: 'Загрузка…',
    selectAllLabel: (count) => `Выбрать все (${count})`,
    createLabel: (value) => `Создать «${value}»`,
  },
  'hy-AM': {
    placeholder: 'Ընտրեք…',
    noResults: 'Արդյունքներ չկան',
    loadingMessage: 'Բեռնվում է…',
    selectAllLabel: (count) => `Ընտրել բոլորը (${count})`,
    createLabel: (value) => `Ստեղծել «${value}»`,
  },
};
