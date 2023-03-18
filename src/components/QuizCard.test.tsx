// Test for QuizCard component

import { render } from "@testing-library/react";
import QuizCard from "./QuizCard";

test("QuizCard component renders correctly", () => {
  const { getByText } = render(
    <QuizCard
      question={"TestQuestion"}
      answer={"TestAnswer"}
      options={["TestOption1", "TestOption2", "TestOption3", "TestOption4"]}
      q_no={1}
    />
  );
  expect(getByText("Q1. TestQuestion")).toBeInTheDocument();
  expect(getByText("TestOption1")).toBeInTheDocument();
  expect(getByText("TestOption2")).toBeInTheDocument();
  expect(getByText("TestOption3")).toBeInTheDocument();
  expect(getByText("TestOption4")).toBeInTheDocument();
});
