import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className=" relative w-full p-5 min-h-screen pb-40 flex px-5 flex-col justify-center items-center bg-gray-900 shadow-2xl text-white">
      <div className="border-2 m-5 p-5 rounded-2xl">
        <h1 className="text-3xl leading-10 ">
          Welcome to{" "}
          <Link to={"/"}>
            <span className="self-center leading-3 text-blue-200 font-bold text-2xl border-2 p-1 rounded-lg  whitespace-nowrap">
              Quizzie
            </span>
          </Link>
          , built by Tanishq Jaiswal, a fun way to challenge yourself, kill
          time, and have fun! <br /> <br />I built this app as a personal
          challenge to myself, and to provide others with a simple and enjoyable
          game to play. <br />
          With the ability to select various categories, you can test your
          knowledge and see how much you know on a variety of topics.
          <br />
          Please note that only 10 questions are randomly selected from the
          chosen category for each quiz. <br /> <br /> You'll receive feedback
          on your performance at the end of the quiz. So why wait? Challenge
          yourself, have some fun, and see how well you do!{" "}
          <Link to={"/"} className="font-bold underline text-blue-400">
            Start your quiz today!
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default About;
