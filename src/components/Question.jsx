import React, { useState, useEffect } from 'react'
import QuestionType from './QuestionType'
import { motion } from 'framer-motion'
import { spanVariants, tryButtonVariants, loadVariants } from '../styles/Framer'

const Question = ({ group, createGroup }) => {
  const [random, setRandom] = useState(null)
  const question = group[random]
  const [correct, setCorrect] = useState(0)
  const [showNext, setShowNext] = useState(false)
  const [questionCounter, setQuestionCounter] = useState(0)
  const [counter, setCounter] = useState(0)
  const [delay, setDelay] = useState(false)
  const [answerClicked, setAnswerClicked] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [selectedId, setSelectedId] = useState('')

  const nextQuestion = e => {
    e.preventDefault()
    setRandom(Math.floor((Math.random() * 3)))
    createGroup()
    setShowNext(false)
    setCounter(prev => prev + 1)
    setAnswerClicked(false)
    setCorrectAnswer(false)
  }

  const tryAgain = e => {
    e.preventDefault()
    setQuestionCounter(0)
    setCorrect(0)
    nextQuestion(e)
    setDelay(false)
  }

  useEffect(() => {
    setRandom(Math.floor((Math.random() * 3)))
  }, [])

  useEffect(() => {
    if (questionCounter > 9) {
      let timer = setTimeout(() => {
        setDelay(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [questionCounter])

  {
    if (delay === true && questionCounter > 9) {
      return <>
        <h1>COUNTRY QUIZ</h1>
        <div className='result-overflow'>
          <motion.div
            className='result-container'
            variants={loadVariants}
            initial="initial"
            animate="animate">
            <img src="./images/undraw_winners_ao2o 2.svg" alt="world illustration" className='img-result' />
            <h2 className='results'>Results</h2>
            <p className='corrects'>You got <motion.span
              variants={spanVariants}
              animate="animate"
            >{correct}</motion.span> correct answers</p>
            <motion.button
              onClick={tryAgain}
              className='again'
              variants={tryButtonVariants}
              whileHover="hover"
            >Try again</motion.button>
          </motion.div>
        </div>
      </>
    }

    return (
      <>
        <h1>COUNTRY QUIZ</h1>
        <img src="./images/undraw_adventure_4hum 1.svg" alt="world illustration" className='img-quiz' />
        <div className='question-overflow'>
          <QuestionType
            question={question}
            group={group}
            nextQuestion={nextQuestion}
            setQuestionCounter={setQuestionCounter}
            showNext={showNext}
            setShowNext={setShowNext}
            setCorrect={setCorrect}
            counter={counter}
            questionCounter={questionCounter}
            answerClicked={answerClicked}
            setAnswerClicked={setAnswerClicked}
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        </div>
      </>
    )
  }
}

export default Question