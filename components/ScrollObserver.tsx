"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the visible class to trigger the CSS animation
          entry.target.classList.add("is-visible");
          // Optionally, stop observing once it has become visible (run once)
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits the very bottom
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Find all elements with the 'reveal' class
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything visually
}
