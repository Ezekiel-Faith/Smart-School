// src/components/AnimateOnScroll.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * A reusable component to apply scroll-based animations to its children.
 * Content will animate in when entering the viewport and out when leaving.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content to be animated.
 * @param {number} [props.threshold=0.2] - The percentage of the element that must be visible to trigger the animation.
 * @param {string} [props.animationClasses='opacity-0 translate-y-10'] - Tailwind CSS classes for the element when it's out of view.
 * @param {string} [props.inViewClasses='opacity-100 translate-y-0'] - Tailwind CSS classes for the element when it's in view.
 * @param {string} [props.transition='transition-all duration-1000 ease-out'] - Tailwind CSS transition classes.
 * @param {string} [props.delay=''] - Optional Tailwind CSS delay class (e.g., 'delay-200').
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply to the wrapper div.
 * @param {object} [props.rest] - Any other props to pass to the wrapper div.
 */
export default function AnimateOnScroll({
  children,
  threshold = 0.2,
  animationClasses = 'opacity-0 translate-y-10', // Classes when out of view
  inViewClasses = 'opacity-100 translate-y-0', // Classes when in view
  transition = 'transition-all duration-1000 ease-out', // Common transition
  delay = '', // Optional delay, e.g., 'delay-200'
  className = '', // Additional classes for the wrapper
  ...props // Pass any other props like id, data-testid etc. to the wrapper div
}) {
  const { ref, inView } = useInView({
    threshold,
    // triggerOnce: false // This is the default, so explicitly setting it is optional but good for clarity
  });

  return (
    <div
      ref={ref}
      className={`${transition} ${delay} ${
        inView ? inViewClasses : animationClasses
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}