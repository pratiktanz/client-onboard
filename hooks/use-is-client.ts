import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** True after hydration on the client; false during server rendering. */
export function useIsClient() {
  return useSyncExternalStore(noop, () => true, () => false);
}
