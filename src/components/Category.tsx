import React from 'react'
import {useContext, useEffect} from 'react'
import {QuizContext} from '../context/QuizContext'

interface CategoryProps {
    categoryName: string,
    categoryId: number,
}

const Category = ({categoryName,categoryId}:CategoryProps) => {
  const{selectCategory, fetchQuizData}=useContext(QuizContext)
  const handleCategorySelected =  () => {
    // console.log('Category Selected', categoryId)
    selectCategory(categoryId)
    fetchQuizData()
  }
  return (
    <div className='w-[300px] h-[100px] border-4 border-blue-500 flex items-center justify-center rounded-lg shadow-sm shadow-slate-300 hover:shadow-2xl hover:shadow-slate-200 hover:scale-110 transition-all duration-200 active:scale-105  cursor-pointer'>
      <button onClick={handleCategorySelected} className='text-2xl font-bold p-1 focus:scale-110'>{categoryName}</button>
    </div>
    
  )
}

export default Category