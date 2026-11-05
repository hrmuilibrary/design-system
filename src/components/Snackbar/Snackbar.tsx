import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, AlertTriangle, XCircle, Info, X, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';
import type {
  SnackbarContextValue,
  SnackbarItem,
  SnackbarPosition,
  SnackbarProviderProps,
  SnackbarVariant,
} from './Snackbar.types';

const variantStyles: Record<SnackbarVariant, { container: string; icon: LucideIcon }> = {
  success: { container: 'bg-gray-900 dark:bg-gray-700 text-white', icon: CheckCircle2 },
  warning: { container: 'bg-gray-900 dark:bg-gray-700 text-white', icon: AlertTriangle },
  danger: { container: 'bg-gray-900 dark:bg-gray-700 text-white', icon: XCircle },
  info: { container: 'bg-gray-900 dark:bg-gray-700 text-white', icon: Info },
  neutral: { container: 'bg-gray-900 dark:bg-gray-700 text-white', icon: Info },
};

const iconColor: Record<SnackbarVariant, string> = {
  success: 'text-green-400',
  warning: 'text-yellow-300',
  danger: 'text-red-400',
  info: 'text-blue-400',
  neutral: 'text-white/70',
};

const positionStyles: Record<SnackbarPosition, string> = {
  'top-left': 'top-6 left-4',
  'top-center': 'top-6 left-1/2 -translate-x-1/2',
  'top-right': 'top-6 right-4',
  'bottom-left': 'bottom-6 left-4',
  'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-6 right-4',
};

const SnackbarContext = createContext<SnackbarContextValue | null>(null);

export function useSnackbar(): SnackbarContextValue {
  const ctx = useContext(SnackbarContext);
  if (!ctx) throw new Error('useSnackbar must be used inside <SnackbarProvider>');
  return ctx;
}

export function SnackbarProvider({
  children,
  dataTestId,
  position: defaultPosition = 'bottom-center',
}: SnackbarProviderProps) {
  const [items, setItems] = useState<SnackbarItem[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    setItems((list) => list.filter((i) => i.id !== id));
    const t = timers.current.get(id);
    if (t) {
      clearTimeout(t);
      timers.current.delete(id);
    }
  }, []);

  const show = useCallback(
    (s: Omit<SnackbarItem, 'id'> & { id?: string }) => {
      const id = s.id ?? Math.random().toString(36).slice(2);
      const item: SnackbarItem = {
        duration: 5000,
        variant: 'neutral',
        ...s,
        id,
      };
      setItems((list) => [...list, item]);
      if (item.duration && item.duration > 0) {
        const t = setTimeout(() => dismiss(id), item.duration);
        timers.current.set(id, t);
      }
      return id;
    },
    [dismiss],
  );

  useEffect(() => {
    const timerMap = timers.current;
    return () => {
      timerMap.forEach(clearTimeout);
      timerMap.clear();
    };
  }, []);

  return (
    <SnackbarContext.Provider value={{ show, dismiss }}>
      {children}
      {createPortal(
        <>
          {(Object.keys(positionStyles) as SnackbarPosition[]).map((pos) => {
            const group = items.filter((i) => (i.position ?? defaultPosition) === pos);
            if (group.length === 0) return null;
            return (
              <div
                key={pos}
                data-test-id={dataTestId}
                className={cn(
                  'fixed z-100 flex flex-col gap-2 w-[min(400px,calc(100vw-2rem))] pointer-events-none',
                  positionStyles[pos],
                )}
              >
                {group.map((i) => {
                  const { container, icon: Icon } = variantStyles[i.variant ?? 'neutral'];
                  return (
                    <div
                      key={i.id}
                      role="status"
                      data-test-id={i.dataTestId}
                      className={cn(
                        'pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-z4',
                        container,
                      )}
                    >
                      <Icon
                        className={cn('h-5 w-5 shrink-0', iconColor[i.variant ?? 'neutral'])}
                        aria-hidden
                      />
                      <p className="flex-1 text-p-std">{i.message}</p>
                      {i.action && (
                        <button
                          type="button"
                          onClick={() => {
                            i.action?.onClick();
                            dismiss(i.id);
                          }}
                          className="text-p-std font-semibold text-brand-400 hover:text-brand-300 px-1"
                        >
                          {i.action.label}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => dismiss(i.id)}
                        aria-label="Close"
                        className="shrink-0 p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>,
        document.body,
      )}
    </SnackbarContext.Provider>
  );
}
