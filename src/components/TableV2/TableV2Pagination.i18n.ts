import type { TranslationLocale } from '../../types';

interface TableV2PaginationTranslations {
  rowsPerPage: string;
  noResults: string;
  rangeSummary: (start: number, end: number, total: number) => string;
}

export const TABLE_V2_PAGINATION_TRANSLATIONS: Record<
  TranslationLocale,
  TableV2PaginationTranslations
> = {
  'en-US': {
    rowsPerPage: 'Rows per page',
    noResults: 'No results',
    rangeSummary: (start, end, total) => `${start}–${end} of ${total}`,
  },
  'ru-RU': {
    rowsPerPage: 'Строк на странице',
    noResults: 'Нет результатов',
    rangeSummary: (start, end, total) => `${start}–${end} из ${total}`,
  },
  'hy-AM': {
    rowsPerPage: 'Տողեր էջում',
    noResults: 'Արդյունքներ չկան',
    rangeSummary: (start, end, total) => `${start}–${end}, ընդամենը՝ ${total}`,
  },
};
