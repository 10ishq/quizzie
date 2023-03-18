import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

interface ViewResultProps {
  question: string | null;
  answer: string | null;
  options: string[] | null;
  q_no: number | null;
}

const ViewResult = ({ question, options, q_no }: ViewResultProps) => {
  const { nextQ, prevQ, goToQ, answerList, quizList } = useContext(QuizContext);

  function decodeString(str: string) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div className=" relative w-full  h-full pb-40 flex px-5 flex-col justify-center items-center bg-gray-900 shadow-2xl text-white">
      {/* render 10 elements each showing number as text */}
      <div className="relative w-[99%] md:absolute md:top-[-10px] ">
        <div className="flex justify-center items-center w-full ">
          {Array(10)
            .fill("")
            .map((_, index) => {
              const color =
                answerList[index] !== quizList[index].correct_answer
                  ? "bg-red-500"
                  : "bg-green-500";
              const selectedOptionColor =
                index + 1 === q_no
                  ? " border-solid border-8 border-sky-500 "
                  : " ";
              return (
                <button
                  onClick={() => goToQ(index + 1)}
                  className={
                    color +
                    selectedOptionColor +
                    ` flex mx-1 w-10 h-10 md:mx-1.5 justify-center items-center md:w-20 md:h-20 text-black rounded-lg shadow-sm shadow-slate-300 hover:shadow-2xl hover:shadow-slate-200 hover:scale-110 transition-all duration-200 active:scale-105  cursor-pointer`
                  }
                >
                  <h1 className="text-xl font-bold">{index + 1}</h1>
                </button>
              );
            })}
        </div>
      </div>
      <h1 className=" flex w-[99%] text-start text-2xl md:text-4xl mt-32  pb-5 font-bold mx-3 px-3 border-solid border-2 border-green-500 p-3 mb-5 rounded-lg">
        Q{q_no}. {decodeString(question!)}
      </h1>
      {/* <h1 className="text-2xl font-bold">{q_no}</h1>  */}

      <div className="flex flex-col max-w-5 justify-center items-center">
        {options?.map((option: string) => {
          const color =
            option === quizList[q_no! - 1]!.correct_answer
              ? "bg-green-500"
              : "bg-red-500";
          const selectedOptionColor =
            option === answerList[q_no! - 1] ? " bg-blue-500 " : " ";
          return (
            <div className=" flex z-20 justify-center w-[400px] items-center mb-5">
              <button
                onClick={() => {}}
                className={
                  selectedOptionColor +
                  color +
                  ` text-white w-[90%] md:w-full transition-all duration-200 font-medium rounded-lg text-xl md:text-2xl px-5 py-2.5 mr-2 mb-2 `
                }
              >
                {decodeString(option)}
              </button>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-1 md:bottom-1/4 ">
        <div className="flex justify-between mx-5 px-10 w-screen">
          <button
            className=" h-[70px] w-[150px] md:h-[100px] text-white   hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl md:text-3xl px-5 py-2.5 mr-2 mb-2 bg-green-600 dark:hover:green-700 focus:outline-none dark:focus:ring-green-800"
            onClick={prevQ}
          >
            Prev
          </button>
          {!(q_no === 10) && (
            <button
              className=" h-[70px] w-[150px] md:h-[100px] text-white   hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl md:text-3xl px-5 py-2.5 mr-2 mb-2 bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
              onClick={nextQ}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewResult;
