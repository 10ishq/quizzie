import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { Link } from "react-router-dom";
import {
  useWindowSize,
} from "@react-hook/window-size";
import Confetti from "react-confetti";

const Score = () => {
  const { totalScore, viewResult } = useContext(QuizContext);
  const [width, height] = useWindowSize();
  return (
    <div className="flex h-full pb-60 w-full justify-center items-center bg-gray-900 shadow-2xl text-white">
      <Confetti width={width} height={height} />
      <div className="text-center">
        <h1 className="text-5xl">
          Congratulations!! Your Score is: {totalScore}/10
        </h1>
        <Link to="/">
          <button
            onClick={() => window.location.reload()}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-3xl px-5 py-5 m-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Restart
          </button>
          <button
            onClick={() => {
              viewResult();
            }}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-3xl px-5 py-5 m-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            View Detailed Result
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Score;
