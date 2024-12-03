import { MouseEvent, useRef, useEffect } from "react";

const useEventListener = (
  eventName: string,
  handler: (event: MouseEvent) => void,
  element = document
) => {
  const savedHandler = useRef<any>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: any) => {
      savedHandler?.current(event);
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
