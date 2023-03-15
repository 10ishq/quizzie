import {useContext} from 'react'
import {QuizContext} from '../context/QuizContext'

interface QuizCardProps {
    question: string
    answer: string
    options: string[]
    q_no: number
}
const QuizCard = ({question, answer, options, q_no}: QuizCardProps) => {
    const {nextQ, prevQ,  updateAnswerList} = useContext(QuizContext)

    function decodeString(str:string){
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
    }

    const decodedQuestion = decodeString(question)
    
    return (
        <div className=" h-screen pb-40 flex px-5 flex-col justify-center items-center bg-gray-900 shadow-2xl text-white">
            
            <h1 className=" flex text-start text-2xl md:text-4xl  pb-5 font-bold  w-full mx-3 px-2 border-solid border-2 border-green-500 p-3 mb-5 rounded-lg">Q{q_no}. {decodedQuestion}</h1>
            {/* <h1 className="text-2xl font-bold">{q_no}</h1>  */}
            
            <div className='flex flex-col mr-10 max-w-5 justify-center items-center'>
            {options?.map((option: string) => {
                
                return (
                    <div className=" z-20 justify-center w-[400px] items-center mb-5">
                        <button onClick={()=>{updateAnswerList(option,q_no-1)}} className="text-white w-full mx-5   focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl md:text-2xl px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-green-700 focus:outline-none focus:bg-green-500  cursor-pointer">{option}</button>
                    </div>
                )
            })
            }
            
            </div>
            <div className='absolute bottom-1 md:bottom-1/4 '>
            <div className='flex justify-between mx-5 px-10 w-screen'>
                <button className=' h-[70px] w-[150px] md:h-[100px] text-white    hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl md:text-3xl px-5 py-2.5 mr-2 mb-2 bg-green-600 dark:hover:green-700 focus:outline-none dark:focus:ring-green-800' onClick={prevQ}>Prev</button>
                <button className=' h-[70px] w-[150px] md:h-[100px] text-white   hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl md:text-3xl px-5 py-2.5 mr-2 mb-2 bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800' onClick={nextQ}>Next</button>
            </div>
            
            </div>
        </div>
    )
}

export default QuizCard