"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring" },
      stagger: 0.02,
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const AnimatedText = ({
  text,
  flex = true,
  el: Wrapper = "p",
  className,
  once,
  position = "flex-start",
  repeatDelay,
  animation = defaultAnimations,
  noWrap,
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);


  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span
            className="block"
            style={{
              display: flex ? "flex" : "block",
              whiteSpace: flex ? "wrap" : "nowrap",
              flexWrap: "wrap",
              flexWrap: noWrap ? "nowrap" : "wrap",
              justifyContent: position,
            }}
            key={`${line}-${lineIndex}`}
          >
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
