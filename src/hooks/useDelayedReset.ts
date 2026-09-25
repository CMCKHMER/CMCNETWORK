import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * A boolean flag that automatically resets to `false` after a delay.
 * Timers are cleaned up on unmount and when re-triggered, so transient
 * "copied / success" feedback never leaks or fires after teardown.
 *
 * @param delayMs how long the flag stays true before auto-resetting
 * @returns [active, trigger, reset] tuple
 */
export function useDelayedReset(delayMs: number) {
  const [active, setActive] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const trigger = useCallback(() => {
    clear();
    setActive(true);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setActive(false);
    }, delayMs);
  }, [clear, delayMs]);

  const reset = useCallback(() => {
    clear();
    setActive(false);
  }, [clear]);

  useEffect(() => clear, [clear]);

  return [active, trigger, reset] as const;
}
