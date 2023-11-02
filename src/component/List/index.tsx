import { ChoiceQuestion, Question } from "@/type";
import "./index.scss";
import Choice from "../Choice";
import Rating from "../Rating";
import Btn from "../Btn";
import { useRef, useState } from "react";

type ListProps = {
  isShow: boolean;
  isEnd: boolean;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  submitAnswer: () => void;
  questionList: Question[] | ChoiceQuestion[];
  type: string;
  createAnswerCallback: (
    questionId: number,
    nextPage?: boolean
  ) => (value: number) => void;
};

export default function List(props: ListProps) {
  const {
    questionList,
    type,
    createAnswerCallback,
    isShow,
    setActivePage,
    isEnd,
    submitAnswer,
  } = props;

  const listRef = useRef<HTMLInputElement>(null);

  const [isAnswer, setIsAnswer] = useState<boolean[]>(
    Array.from({ length: questionList.length }, () => false)
  );

  const continueHandler = () => {
    if (isAnswer.find((item) => !item) !== undefined)
      alert("你还未完成本页的所有问题");
    else setActivePage((value) => value + 1);
  };

  const scrollHandler = (index: number) => {
    let item = document.getElementById(`${index + 1}`);
    if (index % 6)
      return () => {
        if (item && listRef.current) {
          listRef.current.scrollTo({
            top: item?.offsetTop - 64,
            left: 0,
            behavior: "smooth",
          });
        }
      };
    else return () => {};
  };

  return (
    <div
      className={`list ${"list-" + type} ${isShow ? "" : "hidden"}`}
      ref={listRef}
    >
      {questionList.map((item, index) => {
        return item.type === "choice" ? (
          <Choice
            question={item as ChoiceQuestion}
            callback={createAnswerCallback(item.id)}
            setActivePage={setActivePage}
          ></Choice>
        ) : (
          <Rating
            question={item as Question}
            callback={createAnswerCallback(item.id)}
            setIsAnswer={() => {
              let copy = [...isAnswer];
              copy[index] = true;
              setIsAnswer(copy);
            }}
            id={`${item.id}`}
            scrollFn={scrollHandler(item.id)}
          ></Rating>
        );
      })}
      {type === "rating" && !isEnd ? (
        <Btn
          text="继续"
          onClick={continueHandler}
          style={{
            width: "7.785rem",
            height: "2.25rem",
            marginTop: "4rem",
            marginBottom: "6rem",
          }}
        ></Btn>
      ) : (
        ""
      )}
      {isEnd ? (
        <Btn
          text="提交"
          onClick={() => submitAnswer()}
          style={{
            width: "7.785rem",
            height: "2.25rem",
            marginTop: "4rem",
            marginBottom: "6rem",
          }}
        ></Btn>
      ) : (
        ""
      )}
    </div>
  );
}
