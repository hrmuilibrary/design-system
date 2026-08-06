import { Skeleton } from '../Skeleton';

export interface TableV2SkeletonProps {
  columnCount: number;
  rowCount?: number;
}

/** Skeleton `<tr>` rows rendered in place of the body while `loading` is true. Never a spinner. */
export function TableV2Skeleton({ columnCount, rowCount = 8 }: TableV2SkeletonProps) {
  return (
    <>
      {Array.from({ length: rowCount }, (_, rowIndex) => (
        <tr key={rowIndex} aria-hidden={rowIndex > 0 || undefined}>
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
