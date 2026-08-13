import type { CSSProperties } from 'react';
import {
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type Modifier,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/** Locks column-header drag movement to the horizontal axis. */
const restrictToHorizontalAxis: Modifier = ({ transform }) => ({ ...transform, y: 0 });

export interface UseColumnOrderDndOptions {
  columnOrder: string[];
  onColumnOrderChange: (order: string[]) => void;
}

export interface UseColumnOrderDndResult {
  sensors: ReturnType<typeof useSensors>;
  collisionDetection: typeof closestCenter;
  modifiers: Modifier[];
  handleDragEnd: (event: DragEndEvent) => void;
}

/** Wires a `<DndContext>` for reordering column headers by drag-and-drop. */
export function useColumnOrderDnd({
  columnOrder,
  onColumnOrderChange,
}: UseColumnOrderDndOptions): UseColumnOrderDndResult {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = columnOrder.indexOf(String(active.id));
    const newIndex = columnOrder.indexOf(String(over.id));
    if (oldIndex === -1 || newIndex === -1) return;
    onColumnOrderChange(arrayMove(columnOrder, oldIndex, newIndex));
  };

  return {
    sensors,
    collisionDetection: closestCenter,
    modifiers: [restrictToHorizontalAxis],
    handleDragEnd,
  };
}

export interface UseDraggableColumnResult {
  setNodeRef: (node: HTMLElement | null) => void;
  attributes: ReturnType<typeof useSortable>['attributes'];
  listeners: ReturnType<typeof useSortable>['listeners'];
  style: CSSProperties;
  isDragging: boolean;
}

/** Per-header-cell drag handle, for use inside a `<SortableContext>`. */
export function useDraggableColumn(columnId: string): UseDraggableColumnResult {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: columnId,
  });

  return {
    setNodeRef,
    attributes,
    listeners,
    isDragging,
    style: {
      transform: CSS.Translate.toString(transform),
      transition,
      opacity: isDragging ? 0.8 : 1,
      zIndex: isDragging ? 10 : undefined,
      cursor: isDragging ? 'grabbing' : undefined,
    },
  };
}
