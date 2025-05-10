"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const curveAnimation = {
  initial: {
    clipPath: "circle(0% at 50% 100%)",
  },
  animate: {
    clipPath: "circle(150% at 50% 0%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  exit: {
    clipPath: "circle(0% at 50% 100%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Curve = () => {
  const pathname = usePathname();
  const [label, setLabel] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // si url "/"" affiche "home"
    const path = pathname === "/" ? "home" : pathname.split("/").pop();
    setLabel(path);
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={pathname}
          variants={curveAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-0 left-0 w-screen h-screen bg-accent z-50 flex items-center justify-center"
        >
          <span className="text-curve text-3xl font-medium capitalize">
            {label}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Curve;
