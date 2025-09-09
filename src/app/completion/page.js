"use client";
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const triggerConfetti = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};

export default function CompletionPage() {
  const router = useRouter();

  useEffect(() => {
    triggerConfetti();
  }, []);

  return (
    <div className="flex flex-col max-h-screen h-[500px] items-center justify-center">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: [1.5, 0.8, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center w-28 h-28 rounded-full bg-green-500 shadow-lg"
        >
          <motion.svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none">
            {/* Checkmark Path */}
            <motion.path
              d="M6 12l4 4 8-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.4,
                ease: "easeOut",
              }}
            />
          </motion.svg>
        </motion.div>
      </div>
      <p className="text-3xl mt-6">Payment Successful!</p>
      <Button variant="outline" className="mt-4 rounded-full" onClick={() => router.push("/")}>
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Button>
    </div>
  );
}
