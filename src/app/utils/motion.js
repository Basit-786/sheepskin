export function slideInFromLeft(delay) {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export function slideInFromRight(delay) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export function slideInFromTop(delay) {
    return {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.4,
        },
      },
    };
  }
  export function slideInFromBottom(delay, y) {
    return {
      hidden: { y: y ? y : 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.2,
        },
      },
    };
  }
  
  export const onceTrue = {
    once: true,
  };