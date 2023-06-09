import { createContext, useReducer } from "react";

interface QuizContextTypes {
  quizList: [
    {
      category: string | null;
      correct_answer: string | null;
      incorrect_answers: string[] | null;
      question: string | null;
      options: string[] | null;
    }
  ];
  loading: boolean;
  error: boolean;
  fetchQuizData: () => void;
  fetchCategories: () => void;
  currentSlide: number;
  answerList: Array<string>;
  totalScore: number;
  nextQ: () => void;
  prevQ: () => void;
  goToQ: (index: number) => void;
  updateAnswerList: (answer: string, index: number) => void;
  isQuizCompleted: boolean;
  categories: [] | any;
  chosenCategory: number;
  isCategorySelected: boolean;
  selectCategory: (id: number) => void;
  viewResultBoolean: boolean;
  viewResult: () => void;
}

const QuizContext = createContext<QuizContextTypes>({
  quizList: [
    {
      category: null,
      correct_answer: null,
      incorrect_answers: null,
      question: null,
      options: null,
    },
  ],
  loading: false,
  error: false,
  fetchQuizData: () => {},
  fetchCategories: () => {},
  currentSlide: 1,
  answerList: new Array(10).fill("0"),
  totalScore: 0,
  nextQ: () => {},
  prevQ: () => {},
  goToQ: (index: number) => {},
  updateAnswerList: (answer: string, index: number) => {},
  isQuizCompleted: false,
  categories: [],
  chosenCategory: 9,
  isCategorySelected: false,
  selectCategory: (id: number) => {},
  viewResultBoolean: false,
  viewResult: () => {},
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_QUIZ_DATA":
      return {
        ...state,
        quizList: action.payload,
        loading: false,
        error: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "NEXT_Q":
      // if current slide is less than quizList length, increment current slide and calculate score based on answerList and quizList
      if (state.currentSlide <= state.quizList.length - 1) {
        return {
          ...state,
          currentSlide: state.currentSlide + 1,
        };
      } else {
        // calculate totalScore and update the variable in state
        let score = 0;
        state.answerList.forEach((answer: string, index: number) => {
          if (answer === state.quizList[index].correct_answer) {
            score += 1;
            console.log(state.quizList[index].correct_answer === answer);
          }
        });
        console.log("The is the score", score);
        console.log("is the quiz completed", state.isQuizCompleted);
        // console.log(state.quizList)
        return {
          ...state,
          isQuizCompleted: true,
          totalScore: score,
        };
      }

    case "PREV_Q":
      // if current slide is greater than 1, decrement current slide
      if (state.currentSlide > 1) {
        return {
          ...state,
          currentSlide: state.currentSlide - 1,
        };
      } else {
        return {
          ...state,
        };
      }

    case "UPDATE_ANSWER_LIST":
      // update answerList with new answer accoriding to index and string in payload
      return {
        ...state,
        answerList: state.answerList.map((answer: string, index: number) => {
          if (index === action.payload.index) {
            return action.payload.answer;
          } else {
            return answer;
          }
        }),
      };
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
        loading: false,
        error: false,
      };
    case "SELECT_CATEGORY":
      return {
        ...state,
        chosenCategory: action.payload,
        isCategorySelected: true,
      };
    case "GO_TO_Q":
      return {
        ...state,
        currentSlide: action.payload,
      };
    case "VIEW_RESULT":
      return {
        ...state,
        viewResultBoolean: true,
        currentSlide: 1,
      };

    default:
      return state;
  }
};
const QuizContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, {
    quizList: [],
    loading: false,
    error: false,
    currentSlide: 1,
    answerList: new Array(10).fill("0"),
    totalScore: 0,
    isQuizCompleted: false,
    chosenCategory: 9,
    isCategorySelected: false,
    viewResultBoolean: false,
  });

  const fetchQuizData = async () => {
    dispatch({ type: "LOADING" });

    try {
      // fetch response from API for 10 questions according to category
      // convert state.chosenCategory to string to use in fetch
      console.log("Fetching this Category", state.chosenCategory);
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${state.chosenCategory}`
      );
      const data = await response.json();
      const parsedData = data.results.map((quiz: any) => {
        const { category, question, correct_answer, incorrect_answers } = quiz;
        // randomly shuffle correct answer and incorrect answers and return one array
        const options = [...incorrect_answers, correct_answer].sort(
          () => Math.random() - 0.5
        );
        // add id as index for each quiz element
        const id = data.results.indexOf(quiz);
        return { category, question, correct_answer, options, id };
      });
      dispatch({ type: "FETCH_QUIZ_DATA", payload: parsedData });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.log("error", error);
    }
  };

  const fetchCategories = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      const data = await response.json();
      console.log("Categories", data.trivia_categories);
      dispatch({ type: "FETCH_CATEGORIES", payload: data.trivia_categories });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const selectCategory = (id: number) => {
    dispatch({ type: "SELECT_CATEGORY", payload: id });
    state.chosenCategory = id;
    console.log(id);
  };

  const nextQ = () => {
    dispatch({ type: "NEXT_Q" });
    console.log(state.currentSlide);
    console.log(state.answerList);
  };

  const prevQ = () => {
    dispatch({ type: "PREV_Q" });
    console.log(state.currentSlide);
    console.log(state.answerList);
  };

  const goToQ = (index: number) => {
    dispatch({ type: "GO_TO_Q", payload: index });
  };

  const updateAnswerList = (answer: string, index: number) => {
    // update answerList with answer and index
    dispatch({ type: "UPDATE_ANSWER_LIST", payload: { answer, index } });
  };

  const viewResult = () => {
    dispatch({ type: "VIEW_RESULT" });
  };

  return (
    <QuizContext.Provider
      value={{
        ...state,
        fetchQuizData,
        nextQ,
        prevQ,
        updateAnswerList,
        fetchCategories,
        selectCategory,
        goToQ,
        viewResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizContextProvider };
