// Shared animation presets — use these everywhere for consistency

export const ease = [0.25, 0.46, 0.45, 0.94]; // easeOutQuart — smooth and premium

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease },
};

export const fadeRight = {
  initial: { opacity: 0, x: 28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45, ease },
};

// Stagger helper — pass delay multiplier
export const stagger = (i = 0, base = 0.08) => ({
  transition: { duration: 0.5, ease, delay: i * base },
});

// Page entrance — used in route pages
export const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const pageTransition = { duration: 0.35, ease };
