import { forwardRef } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { PaginationProps } from './Pagination.types';
import { createTestId } from '../../lib/testId';

type Item = number | 'ellipsis-left' | 'ellipsis-right';

function buildRange(
  page: number,
  pageCount: number,
  siblingCount: number,
  boundaryCount: number,
): Item[] {
  const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2;
  if (pageCount <= totalNumbers) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(page - siblingCount, boundaryCount + 2);
  const rightSibling = Math.min(page + siblingCount, pageCount - boundaryCount - 1);

  const showLeftEllipsis = leftSibling > boundaryCount + 2;
  const showRightEllipsis = rightSibling < pageCount - boundaryCount - 1;

  const head = Array.from({ length: boundaryCount }, (_, i) => i + 1);
  const tail = Array.from({ length: boundaryCount }, (_, i) => pageCount - boundaryCount + 1 + i);

  const middle: Item[] = [];
  if (!showLeftEllipsis) {
    for (let i = boundaryCount + 1; i <= rightSibling; i++) middle.push(i);
  } else {
    middle.push('ellipsis-left');
    for (let i = leftSibling; i <= rightSibling; i++) middle.push(i);
  }
  if (showRightEllipsis) middle.push('ellipsis-right');
  else {
    for (let i = rightSibling + 1; i <= pageCount - boundaryCount; i++) middle.push(i);
  }

  return [...head, ...middle, ...tail];
}

const itemBase =
  'inline-flex items-center justify-center min-w-9 h-9 px-2 text-p-std rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300';

const navButtonStyles =
  'text-fg-default hover:bg-bg-subtle disabled:text-fg-disabled disabled:hover:bg-transparent disabled:cursor-not-allowed';

export const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  {
    page,
    pageCount,
    onPageChange,
    siblingCount = 1,
    boundaryCount = 1,
    className,
    dataTestId,
    'aria-label': ariaLabel,
    ...rest
  },
  ref,
) {
  const items = buildRange(page, pageCount, siblingCount, boundaryCount);
  const prevDisabled = page <= 1;
  const nextDisabled = page >= pageCount;

  const testId = createTestId(dataTestId);

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel ?? 'Pagination'}
      data-test-id={dataTestId}
      className={cn('inline-flex items-center gap-1', className)}
      {...rest}
    >
      <button
        type="button"
        onClick={() => !prevDisabled && onPageChange(page - 1)}
        data-test-id={testId('prev-page')}
        aria-label="Previous page"
        className={cn(itemBase, navButtonStyles)}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {items.map((item, i) => {
        if (item === 'ellipsis-left' || item === 'ellipsis-right') {
          return (
            <span
              key={`${item}-${i}`}
              aria-hidden
              className="inline-flex items-center justify-center w-9 h-9 text-fg-tertiary"
            >
              <MoreHorizontal className="h-4 w-4" />
            </span>
          );
        }
        const isActive = item === page;
        return (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            aria-current={isActive ? 'page' : undefined}
            data-test-id={testId('page-link')}
            data-page={item}
            className={cn(
              itemBase,
              isActive
                ? 'bg-brand-500 text-white font-semibold hover:bg-brand-600'
                : 'text-fg-default hover:bg-bg-subtle',
            )}
          >
            {item}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => !nextDisabled && onPageChange(page + 1)}
        disabled={nextDisabled}
        aria-label="Next page"
        data-test-id={testId('next-page')}
        className={cn(itemBase, navButtonStyles)}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
});
