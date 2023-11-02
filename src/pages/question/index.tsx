import List from "@/component/List";
import "./index.scss";
import useAnswer from "@/hooks/useAnswer";
import pages from "@/utils/pages";

export default function question() {
  const { createAnswerCallback, activePage, setActivePage, submitAnswer } =
    useAnswer();

  return (
    <div className="question">
      <div className="content">
        {pages.map((item, index) => {
          return (
            <List
              isShow={activePage === index}
              setActivePage={setActivePage}
              submitAnswer={submitAnswer}
              questionList={item.questionList}
              createAnswerCallback={createAnswerCallback}
              type={item.type}
              isEnd={item.isEnd ? true : false}
            ></List>
          );
        })}
      </div>
    </div>
  );
}
