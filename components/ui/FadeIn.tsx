"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  className?: string;
  amount?: number | "some" | "all";
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 24,
  once = true,
  className = "",
  amount = 0.2,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export interface FadeInStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function FadeInStagger({
  children,
  staggerDelay = 0.1,
  className = "",
}: FadeInStaggerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
