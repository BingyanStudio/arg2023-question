import { useNavigate } from "react-router-dom";
import "./index.scss";
import Btn from "@/component/Btn";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="content">
        <Btn
          style={{ top: "75vh", width: "11rem", height: "3.5rem" }}
          onClick={() => navigate("/question")}
          text="开始测试"
        ></Btn>
      </div>
    </div>
  );
}
