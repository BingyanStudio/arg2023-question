import { ChoiceQuestion } from "@/type";
import "./index.scss";
import Btn from "../Btn";
import { useNavigate } from "react-router-dom";

type ChoiceProps = {
  question: ChoiceQuestion;
  callback: (value: number) => void;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Choice(props: ChoiceProps) {
  const { question, callback, setActivePage } = props;
  const navigate = useNavigate();

  return (
    <div className="choice">
      <p className="desc">{question.desc}</p>
      {/* <div className="answer">
        {question.choice.map((item, index) => {
          return (
            <Btn
              text={item}
              onClick={() => callback(index)}
              style={{ width: "16.25rem", height: "3rem" }}
            ></Btn>
          );
        })}
      </div> */}
      <div className="answer">
        <Btn
          text="是"
          onClick={() => {
            callback(1);
            setActivePage((value) => value + 1);
          }}
          style={{ width: "16.25rem", height: "3rem" }}
        ></Btn>
        <Btn
          text="不是"
          onClick={() => {
            callback(0);
            navigate("/result?result=-1");
          }}
          style={{ width: "16.25rem", height: "3rem" }}
        ></Btn>
      </div>
    </div>
  );
}
