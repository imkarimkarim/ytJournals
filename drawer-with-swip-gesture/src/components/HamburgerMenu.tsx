import React, { useEffect, useRef, useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const touchstartX = useRef<number>();
  const touchendX = useRef<number>();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleGesture() {
    const SWIPE_THRESHOLD = 50;
    if (
      typeof touchendX.current !== "undefined" &&
      typeof touchstartX.current !== "undefined"
    ) {
      const deltaX = touchendX.current - touchstartX.current;

      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchstartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchendX.current = e.changedTouches[0].screenX;
      handleGesture();
    };

    window.addEventListener("touchstart", handleTouchStart, false);
    window.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative">
      {/* hamburger menu */}
      <button
        onClick={toggleMenu}
        className="flex items-center flex-col justify-center w-10 h-10 bg-gray-800 text-white rounded-md focus:outline-none"
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 left-0 text-black w-52 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <ul className="mt-4">
              <li className="py-2">
                <a href="#home">Home</a>
              </li>
              <li className="py-2">
                <a href="#about">About</a>
              </li>
              <li className="py-2">
                <a href="#services">Services</a>
              </li>
              <li className="py-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={toggleMenu}
          className="fixed top-0 right-0 w-full h-full bg-transparent z-40"
        ></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
