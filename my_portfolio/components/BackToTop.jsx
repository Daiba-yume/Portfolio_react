"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="retour en haut de page"
        className="fixed bottom-6 right-6 p-3 rounded-full border-4 border-white bg-accent text-white shadow-lg hover:brightness-75 transition-all"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
}

export default BackToTop;
