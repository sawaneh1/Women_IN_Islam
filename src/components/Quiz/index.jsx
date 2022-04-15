import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useRoutes, useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";
import logo from "../assests/new.jpg";

const questions = [
  {
    question: "whta is what ?",

    answers: [
      {
        answer: " good ene that",
        isCorrect: true,
      },
      {
        answer: "not bad ",
        isCorrect: false,
      },
      {
        answer: "be yoyur djd",
        isCorrect: false,
      },
      {
        answer: "356i89393 ",
        isCorrect: false,
      },
    ],
  },

  {
    question: "who killed you?",
    answers: [
      {
        answer: "how can i know",
        isCorrect: false,
      },
      {
        answer: "not bad ",
        isCorrect: false,
      },
      {
        answer: "be yoyur djd",
        isCorrect: false,
      },
      {
        answer: "356i89393 asgfst999999 hgerythyfhiuriueruiuieriutruiiu ",
        isCorrect: true,
      },
    ],
  },

  {
    question: "whta is what dgdgggd?",
    answers: [
      {
        answer: "not good enshjuuhjuaewe that",
        isCorrect: false,
      },
      {
        answer: "not bad ",
        isCorrect: false,
      },
      {
        answer: "be yoyur djd",
        isCorrect: false,
      },
      {
        answer: "356i89393 asgfst999999 hgerythyfhiuriueruiuieriutruiiu ",
        isCorrect: true,
      },
    ],
  },
];

const Quiz = () => {
  const naviage = useNavigate();
  const [scoreRate, setScoreRate] = useState(0);
  const [progress, setProgress] = useState(0);
  console.log("progress", progress);
  const [selected, setSelected] = useState(false);
  const [score, setScore] = useState(0);
  const [left, setLeft] = useState(questions.length);

  const [next, setNext] = useState(0);
  const handleAnswer = (e, answer) => {
    if (e.target) {
      // e.target.style.backgroundColor = 'red'
      e.target.className = "bg-blue-500";
      if (e.target) {
      }
      console.log("class");
    }
  };

  const calculateProgress = 100 / questions.length;
  const calScoreRate = questions.length * 10;

  const handleNext = () => {
    console.log(next);
    console.log("left", left);

    if (questions.length == next + 1) {
      setScore((prev) => prev + 10);
      setProgress((prev) => prev + calculateProgress);

      setTimeout(() => {
        return naviage("/scoreboard");
      }, 1000);

      return;
    }

    if (selected.isCorrect == true) {
      console.log("loo");
      setScore((prev) => prev + 10);
    }
    setProgress((prev) => prev + calculateProgress);
    setLeft((prev) => prev - 1);

    setNext((prev) => prev + 1);
    setSelected(false);
    console.log("this selected whites", selected, selected.isCorrect);
  };

  // useEffect(() => {
  //   if (secondsCounter == 0) {
  //     return naviage("/scoreboard");
  //   }
  // });

  const [secondsCounter, setSecondsCounter] = useState(60);
  const [minutesCounter, setminutesCounter] = useState(2);
  useEffect(() => {
    if (secondsCounter == 0) setSecondsCounter(60);
    const secondstimer =
      secondsCounter > 0 &&
      setInterval(() => setSecondsCounter(secondsCounter - 1), 1000);

    //  const munitesTimer = munitesTimer > 0 &&

    return () => {
      clearInterval(secondstimer);
    };
  }, [secondsCounter]);

  useEffect(() => {
    if (minutesCounter == 0) return naviage("/scoreboard");
    const minutesTimer =
      minutesCounter > 0 &&
      setInterval(() => setminutesCounter(minutesCounter - 1), 60000);
    return () => clearInterval(minutesTimer);
  }, [minutesCounter]);

  return (
    <div>
      <div className="flex  text-white justify-between px-5 mt-5 mb-3 sm:mt-3 sm:mb-2">
        <span className="font-extrabold gap-2 items-center flex text-lg text-gray-900 ">
          <img src={logo} height="70" width="70" className="rounded-full" />{" "}
          <span>Ul-Nisa</span>
        </span>
        <div className="flex items-center gap-1 bg-red-600 rounded-xl  px-3 p-0 text-gray-300">
          <span className="   items-center   cursor-pointer">end </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="w-full px-4 py-4">
        <div className="flex justify-center relative">
          <nav className=" text-pink-600  align-middle -top-4 w-4/5  md:w-1/2  lg:w-1/2   absolute content-center place-content-center place-items-center rounded-full px-5 bg-neutral-900 shadow-md flex justify-between    ">
            <span className="">
              {" "}
              Score: <span className="font-bold text-xl">{score}</span>
            </span>
            <span className="rounded-full shadow-2xl  px-0.5  text-center  py-2  h-12  w-auto">
              <span className="font-bold text-xl">
                {minutesCounter}:{secondsCounter}
              </span>{" "}
              min
            </span>
            <span className="">
              {" "}
              <span className="font-bold text-xl">{left}</span> left
            </span>
          </nav>
        </div>

        {/* <QuizCard  questions={questions[0 + count]} /> */}
        <div className="w-full px-4 py-10">
          <div className="w-full max-w-md mx-auto">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Server size
              </RadioGroup.Label>
              <div className="space-y-1">
                {
                  <div>
                    <h1 className="text-gray-300 font-bold  text-xl text-center">
                      {questions[0 + next].question}
                    </h1>
                    {questions[0 + next].answers.map((q, i) => (
                      <div>
                        <RadioGroup.Option
                          key={q.answer}
                          value={q}
                          onChange={() => console.log(q.answer)}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-offset-2  ring-offset-sky-300 ring-white ring-opacity-60"
                                : ""
                            }
                  ${
                    checked
                      ? "bg-sky-900 bg-opacity-75 text-white"
                      : "bg-neutral-900"
                  }
                    mt-5 sm:mt-2 relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium  ${
                                        checked ? "text-white" : "text-pink-600"
                                      }`}
                                    >
                                      {q.answer}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="span"
                                      className={`inline m-10 ${
                                        checked
                                          ? "text-sky-100"
                                          : "text-gray-500"
                                      }`}
                                    >
                                      <span className="">
                                        {/* {plan.ram}/{plan.cpus} */}
                                      </span>{" "}
                                      <span aria-hidden="true">&middot;</span>{" "}
                                      {/* <span>{plan.disk}</span> */}
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="flex-shrink-0 text-white">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      </div>
                    ))}
                  </div>
                }
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="w-full -mt-7">
          <div className="">
            <div className="flex justify-center ">
              <button
                onClick={handleNext}
                className="bg-slate-900 text-center px-10 text-white rounded-lg font-bold "
              >
                next
              </button>
            </div>
            <div className="bg-neutral-900 rounded-full w-full h-5 m-auto mt-4">
              <div
                className="bg-gray-800 h-5 rounded-full "
                style={{ width: progress + "%" }}
              ></div>
            </div>

            {/* <div className="bg-white flex gap-5 mb-6 relative">
              <div>back</div>
              <div className="text-green-700">
                ..................................
              </div>
              <div
                className="absolute right-1 cursor-pointer "
                onClick={handleNext}
              >
                next
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <footer>
        <h3 className="font-bold text-gray-900 italic  text-xl text-center">
          &copy; SawanehTech LTD 2022.
        </h3>
      </footer>
    </div>
  );
};
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Quiz;
