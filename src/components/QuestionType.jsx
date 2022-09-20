import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { nextVariants, questionVariants } from '../styles/Framer'
import { MdOutlineCancel } from "react-icons/md"
import { IoCheckmarkCircleOutline } from "react-icons/io5"

const QuestionType = ({ question, group, nextQuestion, setQuestionCounter, showNext, setShowNext, setCorrect, counter, questionCounter, answerClicked, setAnswerClicked, correctAnswer, setCorrectAnswer, selectedId, setSelectedId }) => {
  const [type, setType] = useState(0)

  useEffect(() => {
    if (showNext === false) {
      setType(Math.floor(Math.random() * 4 + 1))
    }
  }, [showNext])

  switch (type) {

    case 1: {
      const checkHandler = (e) => {
        if (!showNext) {
          if (questionCounter < 10) {
            e.preventDefault()
            setAnswerClicked(!answerClicked)
            setSelectedId(e.target.getAttribute('countryid'))

            if (question?.flag === e.target.value) {
              setCorrectAnswer(true)
              setCorrect(prev => prev + 1)
            }
            setQuestionCounter(prev => prev + 1)
            if (questionCounter < 9) {
              setShowNext(true)
            }
          }
        }
      }

      let option = 64

      return (
        <motion.div
          variants={questionVariants}
          initial={counter > 0 ? "initial" : "load"}
          animate={counter > 0 ? "animate" : "load"}
          key={counter}>
          <img src={question?.flags.png} alt={question?.flag} className="flag" />
          <h2 className='question'>Which country does this flag belong to?</h2>
          {group.map(country => {
            option++

            return <button
              key={country.maps?.googleMaps}
              countryid={country.maps?.googleMaps}
              value={country?.flag}
              onClick={checkHandler}
              style={
                showNext || questionCounter > 9 ? { cursor: 'initial' } : null
              }
              className={
                answerClicked
                  ?
                  country.maps?.googleMaps === selectedId
                    ?
                    correctAnswer
                      ?
                      'select correctAnswer'
                      :
                      'select wrongAnswer'
                    :
                    question?.flag === country?.flag
                      ?
                      'select showCorrect'
                      :
                      'select'
                  :
                  'select select-hover'
              }
            >
              <p className='option'>{String.fromCharCode(option)}</p>
              <p className='country'>{country.name?.common}</p>
              {
                answerClicked
                  ?
                  country.maps?.googleMaps === selectedId
                    ?
                    correctAnswer
                      ?
                      <IoCheckmarkCircleOutline className='icon-wrapper' />
                      :
                      <MdOutlineCancel className='icon-wrapper' />
                    :
                    null
                  :
                  null
              }
            </button>
          })}
          {
            showNext && <motion.button
              className='next'
              onClick={nextQuestion}
              variants={nextVariants}
              initial="initial"
              animate="animate">Next</motion.button>
          }
        </motion.div >
      )
    }


    case 2: {
      const checkHandler = (e) => {
        if (!showNext) {
          if (questionCounter < 10) {
            e.preventDefault()
            setAnswerClicked(!answerClicked)
            setSelectedId(e.target.getAttribute('countryid'))

            if (question?.capital.toString() === e.target.value) {
              setCorrectAnswer(true)
              setCorrect(prev => prev + 1)
            }
            setQuestionCounter(prev => prev + 1)
            if (questionCounter < 9) {
              setShowNext(true)
            }
          }
        }
      }

      let option = 64

      return (
        <motion.div
          variants={questionVariants}
          initial={counter > 0 ? "initial" : "load"}
          animate={counter > 0 ? "animate" : "load"}
          key={counter}>
          <h2 className='question'>{question?.capital} is capital of</h2>
          {group.map(country => {
            option++

            return <button
              key={country.maps?.googleMaps}
              countryid={country.maps?.googleMaps}
              value={country?.capital}
              onClick={checkHandler}
              style={
                showNext || questionCounter > 9 ? { cursor: 'initial' } : null
              }
              className={
                answerClicked
                  ?
                  country.maps?.googleMaps === selectedId
                    ?
                    correctAnswer
                      ?
                      'select correctAnswer'
                      :
                      'select wrongAnswer'
                    :
                    question?.capital === country?.capital
                      ?
                      'select showCorrect'
                      :
                      'select'
                  :
                  'select select-hover'
              }
            >
              <p className='option'>{String.fromCharCode(option)}</p>
              <p className='country'>{country.name?.common}</p>
              {
                answerClicked
                  ?
                  country.maps?.googleMaps === selectedId
                    ?
                    correctAnswer
                      ?
                      <IoCheckmarkCircleOutline className='icon-wrapper' />
                      :
                      <MdOutlineCancel className='icon-wrapper' />
                    :
                    null
                  :
                  null
              }
            </button>
          })}
          {showNext && <motion.button
            className='next'
            onClick={nextQuestion}
            variants={nextVariants}
            initial="initial"
            animate="animate">Next</motion.button>}
        </motion.div>
      )
    }


    case 3: {
      const checkHandler = (e) => {
        if (!showNext) {
          if (questionCounter < 10) {
            e.preventDefault()
            setAnswerClicked(!answerClicked)
            setSelectedId(e.target.getAttribute('countryid'))

            if (question?.area.toString() === e.target.value) {
              setCorrectAnswer(true)
              setCorrect(prev => prev + 1)
            }
            setQuestionCounter(prev => prev + 1)
            if (questionCounter < 9) {
              setShowNext(true)
            }
          }
        }
      }

      const convertArea = (area) => {
        return area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }

      let option = 64

      return (
        <motion.div
          variants={questionVariants}
          initial={counter > 0 ? "initial" : "load"}
          animate={counter > 0 ? "animate" : "load"}
          key={counter}>
          <h2 className='question'>{convertArea(question?.area)} km<sup>2</sup> of land is owned by</h2>
          {group.map(country => {
            option++

            return <button
              key={country.maps?.googleMaps}
              countryid={country.maps?.googleMaps}
              value={country?.area}
              onClick={checkHandler}
              style={
                showNext || questionCounter > 9 ? { cursor: 'initial' } : null
              }
              className={
                answerClicked
                  ?
                  country.maps?.googleMaps === selectedId
                    ?
                    correctAnswer
                      ?
                      'select correctAnswer'
                      :
                      'select wrongAnswer'
                    :
                    question?.area === country?.area
                      ?
                      'select showCorrect'
                      :
                      'select'
                  :
                  'select select-hover'
              }
            >
              <p className='option'>{String.fromCharCode(option)}</p>
              <p className='country'>{country.name?.common}</p>
              {
                answerClicked
                  ?
                  country.maps?.googleMaps === selectedId
                    ?
                    correctAnswer
                      ?
                      <IoCheckmarkCircleOutline className='icon-wrapper' />
                      :
                      <MdOutlineCancel className='icon-wrapper' />
                    :
                    null
                  :
                  null
              }
            </button>
          })}
          {showNext && <motion.button
            className='next'
            onClick={nextQuestion}
            variants={nextVariants}
            initial="initial"
            animate="animate">Next</motion.button>}
        </motion.div>
      )
    }


    case 4: {
      const checkHandler = (e) => {
        if (!showNext) {
          if (questionCounter < 10) {
            e.preventDefault()
            setAnswerClicked(!answerClicked)
            setSelectedId(e.target.getAttribute('countryid'))

            if (question?.population.toString() === e.target.value) {
              setCorrectAnswer(true)
              setCorrect(prev => prev + 1)
            }
            setQuestionCounter(prev => prev + 1)
            if (questionCounter < 9) {
              setShowNext(true)
            }
          }
        }
      }

      const convertPopulation = (population) => {
        const sign = Math.sign(Number(population));
        // Nine Zeroes for Billions
        return Math.abs(Number(population)) >= 1.0e9
          ? (sign * (Math.abs(Number(population)) / 1.0e9)).toFixed(3) + " billion"
          : // Six Zeroes for Millions
          Math.abs(Number(population)) >= 1.0e6
            ? (sign * (Math.abs(Number(population)) / 1.0e6)).toFixed(3) + " million"
            : // Three Zeroes for Thousands
            Math.abs(Number(population)) >= 1.0e3
              ? sign * (Math.abs(Number(population)) / 1.0e3) + " thousand"
              : Math.abs(Number(population));
      }

      let option = 64

      return (
        <motion.div
          variants={questionVariants}
          initial={counter > 0 ? "initial" : "load"}
          animate={counter > 0 ? "animate" : "load"}
          key={counter}>
          <h2 className='question'>Which country has population of {convertPopulation(question?.population)}?</h2>
          {group.map(country => {
            option++

            return <button
              key={country.maps?.googleMaps}
              countryid={country.maps?.googleMaps}
              value={country?.population}
              onClick={checkHandler}
              style={
                showNext || questionCounter > 9 ? { cursor: 'initial' } : null
              }
              className={
                answerClicked
                  ?
                  country.maps?.googleMaps === selectedId
                    ?
                    correctAnswer
                      ?
                      'select correctAnswer'
                      :
                      'select wrongAnswer'
                    :
                    question?.population === country?.population
                      ?
                      'select showCorrect'
                      :
                      'select'
                  :
                  'select select-hover'
              }
            >
              <p className='option'>{String.fromCharCode(option)}</p>
              <p className='country'>{country.name?.common}</p>
              {
                answerClicked
                  ?
                  country.maps?.googleMaps === selectedId
                    ?
                    correctAnswer
                      ?
                      <IoCheckmarkCircleOutline className='icon-wrapper' />
                      :
                      <MdOutlineCancel className='icon-wrapper' />
                    :
                    null
                  :
                  null
              }
            </button>
          })}
          {showNext && <motion.button
            className='next'
            onClick={nextQuestion}
            variants={nextVariants}
            initial="initial"
            animate="animate">Next</motion.button>}
        </motion.div >
      )
    }
  }
}

export default QuestionType