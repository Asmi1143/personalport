import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.6,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { y: [20, 0] };
      case "down":
        return { y: [-20, 0] };
      case "left":
        return { x: [20, 0] };
      case "right":
        return { x: [-20, 0] };
      default:
        return { y: [20, 0] };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getDirectionValues() }}
      animate={isInView ? { opacity: 1, ...getDirectionValues() } : { opacity: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SkillBar({ percentage, color }: { percentage: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="skill-bar">
      <div 
        className={`skill-progress ${color}`}
        style={{ width: isInView ? `${percentage}%` : '0%' }}
      />
    </div>
  );
}

export function ParallaxScroll({ children, className = "", speed = 0.5 }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
