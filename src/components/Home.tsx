import React from "react";
import { useContext, useEffect, CSSProperties, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import QuizCard from "./QuizCard";
import Score from "./Score";
import Category from "./Category";
import ViewResult from "./ViewResult";
import PacmanLoader from "react-spinners/PacmanLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const {
    quizList,
    isCategorySelected,
    viewResultBoolean,
    loading,
    error,
    currentSlide,
    isQuizCompleted,
    fetchCategories,
    categories,
  } = useContext(QuizContext);
  // console.log(quizList)
  let [color] = useState("#F6E25F");
  useEffect(() => {
    // fetchQuizData()
    console.log("Fetching Categories");
    // console.log(quizList)
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-wrap justify-center items-center w-full min-h-screen bg-gray-900 shadow-2xl text-white">
      {/* display the currentSlide in h1 tag */}

      {/* display loading if loading true and error if error true otherwise display QuizCard with detals of quizList element with index = currentSlide-1 */}
      {loading && (
        <div>
          <PacmanLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1 className="text-3xl font-bold w-full text-center my-3 py-3">
            Loading...
          </h1>
        </div>
      )}
      {error && (
        <h1 className="text-3xl font-bold w-full text-center">Error</h1>
      )}
      {/* if the loading is done and no error, render Category card for each category in categories list */}
      <div className="flex flex-wrap justify-center items-center w-full">
        {!loading && !error && !isCategorySelected && (
          <h1 className="w-full animate-pulse text-center p-2 mb-5 font-extrabold text-white  text-3xl md:text-4xl">
            Please Choose a Category to Play
          </h1>
        )}
        {!loading &&
          !error &&
          !isCategorySelected &&
          categories?.map((category: any) => {
            return (
              <div className="p-2 ">
                <Category
                  categoryName={category.name}
                  key={category.id}
                  categoryId={category.id}
                />
              </div>
            );
          })}{" "}
      </div>
      {!loading &&
        !error &&
        !isQuizCompleted &&
        !viewResultBoolean &&
        isCategorySelected && (
          <QuizCard
            question={quizList[currentSlide - 1]?.question}
            answer={quizList[currentSlide - 1]?.correct_answer}
            options={quizList[currentSlide - 1]?.options}
            q_no={currentSlide}
          />
        )}
      {!loading && !error && isQuizCompleted && !viewResultBoolean && <Score />}
      {!loading && !error && viewResultBoolean && (
        <ViewResult
          question={quizList[currentSlide - 1]?.question}
          answer={quizList[currentSlide - 1]?.correct_answer}
          options={quizList[currentSlide - 1]?.options}
          q_no={currentSlide}
        />
      )}
    </div>
  );
};

export default Home;
