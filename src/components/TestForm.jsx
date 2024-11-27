import React, { useState } from "react";
import { questions } from "../data/questions";
import "../tailwindcss/TestPage.css";

const TestForm = ({ onSubmit }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer: value };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Answers:", answers);
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="test-form space-y-6 p-6 bg-white rounded-lg"
    >
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={`mb-20 transition-all duration-300 ${
            activeQuestion === index ? "opacity-100" : "opacity-20"
          }`}
        >
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block py-6 p-2 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === q.type.split("/")[i]
                    ? "bg-gray-100"
                    : ""
                } hover:bg-gray-100 w-2/4 mx-auto`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={q.type.split("/")[i]}
                  checked={answers[index]?.answer === q.type.split("/")[i]}
                  onChange={() => {
                    handleChange(index, q.type.split("/")[i]);
                    if (index < questions.length - 1) {
                      setActiveQuestion(index + 1);
                    }
                  }}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-primary-color text-[#FF5A5F] py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
