import { Skeleton } from '../Skeleton';
import { createTestId } from '../../lib/testId';

export interface TableV2SkeletonProps {
  columnCount: number;
  rowCount?: number;
  /** Prefix for each row's `data-test-id` (`<prefix>-skeleton-row-<index>`). */
  testIdPrefix?: string;
}

/** Skeleton `<tr>` rows rendered in place of the body while `loading` is true. Never a spinner. */
export function TableV2Skeleton({
  columnCount,
  rowCount = 8,
  testIdPrefix,
}: Readonly<TableV2SkeletonProps>) {
  const testId = createTestId(testIdPrefix);

  return (
    <>
      {Array.from({ length: rowCount }, (_, rowIndex) => (
        <tr
          key={rowIndex}
          data-test-id={testId(`skeleton-row-${rowIndex}`)}
          aria-hidden={rowIndex > 0 || undefined}
        >
          {Array.from({ length: columnCount }, (_, colIndex) => (
            <td key={colIndex} className="px-4 py-3">
              <Skeleton variant="text" width={colIndex === 0 ? '70%' : '90%'} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
