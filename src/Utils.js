import { useState, useEffect } from "react";

// resize function
export function Resize(window) {
  // get current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // apply changes according to the current width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  return windowWidth;
}
