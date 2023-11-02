import Btn from "@/component/Btn";
import "./index.scss";
import { useLocation, useNavigate } from "react-router-dom";
import result from "@/utils/result";
import { useState } from "react";

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [isShowContent, setIsShowContent] = useState(
    query.get("result") === "-1" ? true : false
  );

  const resultData = result.get(query.get("result"));
  console.log(resultData);

  return (
    <div className="result">
      <div className="result-loading">
        <p>Loading...</p>
        <div className="loading-line"></div>
      </div>
      <div className="result-content">
        {query.get("result") === "-1" ? (
          <div>
            <div className={`result-title active`}>
              <p>你是</p>
              <p className="title-bottom" style={{ marginTop: 0 }}>
                {"—— " + resultData.desc}
              </p>
            </div>
            <div
              className={`result-text active`}
              style={{ marginTop: "2rem" }}
              dangerouslySetInnerHTML={{ __html: resultData.text }}
            ></div>
          </div>
        ) : (
          <div>
            <div className={`result-title ${isShowContent ? "active" : ""}`}>
              <p>你是</p>
              <p>{resultData.title}</p>
              <p className="title-bottom">{"——" + resultData.desc}</p>
            </div>
            <div className="result-img" onClick={() => setIsShowContent(true)}>
              <img src={resultData.img}></img>
            </div>
            <div
              className={`result-text ${isShowContent ? "active" : ""}`}
              dangerouslySetInnerHTML={{ __html: resultData.text }}
            ></div>
          </div>
        )}
      </div>
      <div className={`result-tip ${isShowContent ? "hidden" : ""}`}>
        -点击图片查看结果-
      </div>
      <div className={`result-desc ${isShowContent ? "" : "hidden"}`}>
        <p>
          感谢你对My own sea
          ARG游戏的关注。现在，我们有一个针对ARG游戏体验的研究，需要招募有意愿的玩家/观众参与到我们的访谈中。访谈内容包括游戏体验、游戏建议等，访谈参与者可免费获得茶点和瑞幸咖啡一份。
        </p>
        <p>
          如果你有意愿成为我们的访谈对象，请按下按钮，留下你的联系方式，方便我们后续与您取得联系。
        </p>
        <Btn
          text="我有意向"
          onClick={() => navigate("/contact")}
          style={{ width: "12rem", height: "3rem", marginTop: "1.5rem" }}
        ></Btn>
      </div>
    </div>
  );
}
