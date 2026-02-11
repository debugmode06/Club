import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const hoverLift = {
    hover: {
        y: -4,
        transition: {
            duration: 0.2,
            ease: 'easeInOut',
        },
    },
};

export const gentleParallax = {
    initial: { y: 0 },
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};
