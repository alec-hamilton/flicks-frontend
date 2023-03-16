import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent | KeyboardEvent;

const isKeyboardEvent = (event: Event): event is KeyboardEvent => {
  return "key" in event;
};

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const elem = ref.current;

      if (!elem) return;

      if (isKeyboardEvent(event)) {
        if (event.key === "Escape") {
          handler(event);
        }
      }

      if (elem.contains(event.target as HTMLElement)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("keydown", listener);
    };
  }, [ref, handler]);
};
