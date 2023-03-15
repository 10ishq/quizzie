import React from 'react'
import {useContext, useEffect} from 'react'
import {QuizContext} from '../context/QuizContext'
import QuizCard from './QuizCard'
import Score from './Score'


const Home = () => {
  const {quizList, loading, error, fetchQuizData, answerList, currentSlide, nextQ, prevQ, isQuizCompleted} = useContext(QuizContext)
  // console.log(quizList)
  
  useEffect(() => {
    fetchQuizData()
    console.log('fetching data')
    console.log(quizList)
  }, [])
  return (
    <div className=' h-screen snap-x ...' >
      
      {/* display the currentSlide in h1 tag */}

      {/* display loading if loading true and error if error true otherwise display QuizCard with detals of quizList element with index = currentSlide-1 */}
      {loading && <h1 className="text-3xl font-bold w-full text-center">
        Loading...
      </h1>}
      {error && <h1 className="text-3xl font-bold w-full text-center">
        Error
      </h1>}
      {!loading && !error && !isQuizCompleted && <QuizCard question={quizList[currentSlide-1]?.question} answer={quizList[currentSlide-1]?.correct_answer} options={quizList[currentSlide-1]?.options} q_no={currentSlide}/>}
      {!loading && !error && isQuizCompleted && <Score/> }
      
    </div>
  )
}

export default Home