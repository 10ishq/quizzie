import React from 'react'
import {useContext, useEffect} from 'react'
import {QuizContext} from '../context/QuizContext'
import QuizCard from './QuizCard'
import Score from './Score'
import Category from './Category'

const Home = () => {
  const {quizList, isCategorySelected, loading, error, fetchQuizData, answerList, currentSlide, nextQ, prevQ, isQuizCompleted, fetchCategories, categories, chosenCategory} = useContext(QuizContext)
  // console.log(quizList)
  
  useEffect(() => {
    // fetchQuizData()
    console.log('Fetching Categories')
    // console.log(quizList)
    fetchCategories()
  }, [])
  return (
    <div className='flex flex-wrap justify-center items-center w-full min-h-screen bg-gray-900 shadow-2xl text-white' >
      
      {/* display the currentSlide in h1 tag */}

      {/* display loading if loading true and error if error true otherwise display QuizCard with detals of quizList element with index = currentSlide-1 */}
      {loading && <h1 className="text-3xl font-bold w-full text-center">
        Loading...
      </h1>}
      {error && <h1 className="text-3xl font-bold w-full text-center">
        Error
      </h1>}
      {/* if the loading is done and no error, render Category card for each category in categories list */}
      <div className='flex flex-wrap justify-center items-center w-full'>
        {!loading && !error && !isCategorySelected && <h1 className='w-full text-center pb-3 font-extrabold  text-3xl'>Please Choose Category</h1>}
      {!loading && !error && !isCategorySelected &&  categories?.map((category: any) => {
        return (
          <div className='p-2 '>
            <Category categoryName={category.name} key={category.id} categoryId={category.id}/>
            </div>
        )
      }   
      )} </div>  
      {!loading && !error && !isQuizCompleted && isCategorySelected && <QuizCard question={quizList[currentSlide-1]?.question} answer={quizList[currentSlide-1]?.correct_answer} options={quizList[currentSlide-1]?.options} q_no={currentSlide}/>}
      {!loading && !error && isQuizCompleted && <Score/> } 
      
    </div>
  )
}

export default Home