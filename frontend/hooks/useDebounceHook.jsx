import { useEffect, useState } from "react";

export default function useDebounce(input) {
  const [debouncedValue, setDebouncedValue] = useState(input);
  useEffect(() => {
    const clock = setTimeout(() => {
      setDebouncedValue(input);
    }, "1000");
    return () => {
      clearTimeout(clock);
    };
  }, [input]);
  return debouncedValue;
}
