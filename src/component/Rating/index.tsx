import { Question } from "@/type";
import "./index.scss";
import { useState } from "react";

type RatingProps = {
  question: Question;
  setIsAnswer: () => void;
  callback: (value: number) => void;
  id: string;
  scrollFn: () => void;
};

export default function Rating(props: RatingProps) {
  const { question, callback, setIsAnswer, id, scrollFn } = props;

  const [active, setActive] = useState(0);

  return (
    <div className="rating" id={id}>
      <p className="rating-desc">{question.desc}</p>
      <div className="rating-title">
        <p>非常不认同</p>
        <div className="spacer"></div>
        <p>非常认同</p>
      </div>
      <div className="rating-answer">
        {Array.from({ length: 5 }, (_item, index) => index + 1).map((item) => {
          return (
            <div
              className={`rating-item ${active === item ? "active" : ""}`}
              onClick={() => {
                if (active === 0) scrollFn();
                setActive(item);
                setIsAnswer();
                callback(item);
              }}
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
