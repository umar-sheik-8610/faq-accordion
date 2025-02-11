import { useState } from "react";
import "./App.css";

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={() => setShow(!show)}>
        {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">{answer}</div>
      </div>
    </div>
  );
};

const FaqAccordion = ({ data }) => {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};
const data = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language used to create dynamic and interactive web content.",
  },
  {
    id: 2,
    question: "What is the difference between let, var, and const?",
    answer:
      "var is function-scoped, let is block-scoped, and const is block-scoped but cannot be reassigned.",
  },
  {
    id: 3,
    question: "How do you create an array in JavaScript?",
    answer:
      "You can create an array using square brackets like this: let arr = [1, 2, 3];",
  },
  {
    id: 4,
    question: "What is the DOM?",
    answer:
      "The DOM (Document Object Model) is a programming interface that represents the structure of a web page as a tree of objects.",
  },
  {
    id: 5,
    question: "What is event delegation in JavaScript?",
    answer:
      "Event delegation is a technique where a parent element handles events for its child elements, improving performance by reducing the number of event listeners.",
  },
  {
    id: 6,
    question: "How does async/await work in JavaScript?",
    answer:
      "Async/await allows you to write asynchronous code in a synchronous style. The 'async' function always returns a promise, and 'await' pauses execution until the promise resolves.",
  },
];
function App() {
  return (
    <>
      <div className="App">
        <FaqAccordion data={data} />
      </div>
    </>
  );
}

export default App;
