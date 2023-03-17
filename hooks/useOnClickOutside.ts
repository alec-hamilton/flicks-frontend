import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent | KeyboardEvent;

const isKeyboardEvent = (event: Event): event is KeyboardEvent => {
  return "key" in event;
};

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  dropdownRef: RefObject<T>,
  buttonRef: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const dropdown = dropdownRef.current;
      const button = buttonRef.current;

      if (!dropdown || !button) return;

      if (isKeyboardEvent(event)) {
        if (event.key === "Escape") {
          handler(event);
        }
      }

      if (
        dropdown.contains(event.target as HTMLElement) ||
        button.contains(event.target as HTMLElement)
      ) {
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
  }, [buttonRef, dropdownRef, handler]);
};
