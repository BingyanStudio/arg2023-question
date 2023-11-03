import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useAnswer() {
  const [answer, setAnswer] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(0);
  const navigate = useNavigate();

  const createAnswerCallback = (questionId: number, nextPage?: boolean) => {
    return (value: number) => {
      let copy = [...answer];
      copy[questionId] = value;
      setAnswer(copy);
      if (nextPage) setActivePage((value) => value + 1);
    };
  };

  const submitAnswer = () => {
    axios
      .post("https://api.hust.online/arg2023/api/v1/questionnaire", {
        answers: answer,
      })
      .then((res) => {
        console.log(res);
        navigate(
          `/result?result=${`${res.data.data.autonomy}${res.data.data.competence}${res.data.data.relatedness}`}`
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  return {
    answer,
    activePage,
    submitAnswer,
    setActivePage,
    createAnswerCallback,
  };
}
