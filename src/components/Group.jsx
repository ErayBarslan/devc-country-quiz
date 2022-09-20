import React, { useState, useEffect, useRef } from 'react'
import Question from './Question'
import styled from 'styled-components'

const Group = ({ data, loading, setLoading }) => {
  const [group, setGroup] = useState([])
  const effectUsed = useRef(false)

  const createGroup = () => {
    setGroup([])
    setLoading(true)
    const indexSet = new Set
    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * data.length - 1)
      while (indexSet.has(random)) {
        random = Math.floor(Math.random() * data.length - 1)
      }
      indexSet.add(random)
      const country = data[random]
      if (!country?.capital) {
        return createGroup()
      }
      setGroup(curr => [...curr, country])
    }
    setLoading(false)
  }

  useEffect(() => {
    if (effectUsed.current === false) {
      createGroup()
    }
    return () => effectUsed.current = true
  }, [])

  return (
    <>
      <StyledMain>
        {!loading &&
          <Question group={group} createGroup={createGroup} setGroup={setGroup} />
        }
      </StyledMain>
    </>
  )
}


//STYLES
const StyledMain = styled.main`
background: white;
max-width: 464px;
border-radius: 24px;
margin: 100px 10px 0 10px;
position: relative;

.question-overflow {
  background: transparent;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  padding: 48px 22px 72px 22px;
}

.result-container {
  max-width: 464px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.flag {
  width: 84px;
  height: 54px;
  box-shadow: 0 0 10px 2px #eeee
}

h1 {
  font-size: min(8.5vw, 30px);
  font-weight: 700;
  position: absolute;
  left: 0;
  top: -54px;
  color: white;
}

.question {
  color: #2F527B;
}

.result-overflow {
  overflow: hidden;
}

.results {
  color: #1D355D;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  margin: 72px auto 0 auto;
}

.corrects {
  font-weight: 400;
  font-size: 18px;
  color: #1D355D;
  margin: 0 auto;
}

span {
  display: inline-block;
  font-size: 36px;
  color: #6FCF97;
}

.img-quiz {
  position: absolute;
  top: -74px;
  right: 0;
  width: 30%;
}

.img-result {
  margin: 50px auto 0 auto;
}

button {
  background: white;
  border-radius: 10px;
  color: #6066D0;
  padding: 11px;
  cursor: pointer;
}

.select {
  width: 100%;
  border: 2px solid #6066D0;
  margin: 30px 0 0 0;
  text-align: start;
  position: relative;
}

.select-hover:hover {
    color: white;
    background-color: #F9A826;
    border: 2px solid #F9A826;
   }

.correctAnswer {
  animation: 1s 1 normal correctAnim;
  animation-fill-mode: forwards;
}

.correctAnswer:after {
  
}

@keyframes correctAnim {
  from {
    border: 2px solid #6066D0;
  }

  50% {
    background-color: #60BF88;
  }

  to {
    border: 2px solid #60BF88;
    background-color: #60BF88;
    color: white;
  }
}

.wrongAnswer {
  animation: .75s 1 normal wrongAnim;
  animation-fill-mode: forwards;
}

@keyframes wrongAnim {
  0% { transform: skewX(-15deg); }
 10% { transform: skewX(15deg); }
 20% { transform: skewX(-10deg); }
 30% { transform: skewX(10deg); }
 40% { transform: skewX(-5deg); }
 50% { transform: skewX(5deg);   }
 60% { transform: skewX(-5deg); }
 70% { transform: skewX(0deg); }
 100% { transform: skewX(0deg);
  color: white;
  background-color: #EA8282;
  border: 2px solid #EA8282;  }
}

.showCorrect {
  animation: 2s 1 normal showCorrectAnim;
  animation-fill-mode: forwards;
  animation-delay: .5s;
}

@keyframes showCorrectAnim {

  15% {
    scale: 1.02;
  }

  30% {
    scale: 1;
    border: 2px solid #60BF88;
    background-color: #60BF88;
    color: white;
  }

  45% {
    scale: 1.02;
  }

  60% {
    scale: 1;
  }

  75% {
    scale: 1.02;
  }

  100% {
    scale: 1;
    border: 2px solid #60BF88;
    background-color: #60BF88;
    color: white;
  }
}

.next {
  width: 116px;
  position: absolute;
  right: 22px;
  bottom: 10px;
  color: white;
  background-color: #F9A826;
  border: 2px solid #F9A826;
  font-size: 18px;
  font-weight: 700;
  padding: 15px;
  margin: 10px 0 0 0;
}

.again {
  width: 206px;
  border: 2px solid #1D355D;
  color: #1D355D;
  margin: 30px auto;
  font-size: 18px;
}

p.option {
  display: inline-block;
  margin-left: 9px;
  font-size: 24px;
  font-weight: 500;
}

p.country {
  display: inline-block;
  font-size: 18px;
  margin-left: 5vw;
}

.icon-wrapper {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: calc(50% - 10px);
}

@media screen and (min-width:600px){
  max-width: 464px;

  .overflow {
    padding: 68px 32px 76px 32px;
  }

  h1 {
    font-size: 36px;
  }

  .img-quiz {
    width: auto;
  }

  p.country {
    margin-left: 46px;
  }
}

@media screen and (min-height: 900px) {
  margin-top: 23vh;
}
`

export default Group