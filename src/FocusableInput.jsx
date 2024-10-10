import { useEffect, useRef } from "react";

export function FocusableInput() {
  const _refInputFocus = useRef(null);
  const _refInputMount = useRef(false);

  useEffect(() => {
    if (!_refInputMount.current) {
      console.log(`Input is mounted first time`);
      _refInputMount.current = true;
    } else {
      console.log("Input is mounted other time");
    }
    _refInputFocus.current?.focus();
  }, []);

  return <input ref={_refInputFocus} type="text" />;
}
