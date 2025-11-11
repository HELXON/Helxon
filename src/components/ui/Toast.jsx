"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./Toast.scss";

export function Toast({
  message,
  type = "success",
  isVisible,
  onClose,
  duration = 3000,
}) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    setShouldRender(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onClose?.();
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {shouldRender ? (
        <motion.div
          className={`toast toast--${type}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25 }}
          role="status"
        >
          <span className="toast__message">{message}</span>
          <button
            type="button"
            className="toast__close"
            onClick={() => onClose?.()}
            aria-label="Close notification"
          >
            ×
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

