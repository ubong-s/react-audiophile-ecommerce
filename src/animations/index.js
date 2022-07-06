export const fadeIn = {
   exit: {
      opacity: 0,
      transition: {
         duration: 0.6,
         ease: 'easeInOut',
      },
   },
   initial: {
      opacity: 0,
      y: -100,
   },
   animate: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.6,
         ease: 'easeInOut',
      },
   },
};
