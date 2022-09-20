//Question
export const spanVariants = {
  animate: {
    x: 0,
    y: [2, -13],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: .3,
        ease: 'easeOut'
      }
    }
  }
}

export const tryButtonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 3px #b5b5b5",
    boxShadow: "0 0 8px #1D355D",
    transition: {
      duration: .35,
    }
  }
}

export const loadVariants = {
  initial: {
    opacity: 0,
    y: '-50vw',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    }
  }
}

//QuestionType
export const nextVariants = {
  initial: {
    x: '-50vw',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1
  },
  load: {
    x: 0,
    opacity: 1
  }
}

export const questionVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}
