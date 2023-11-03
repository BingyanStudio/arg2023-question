import Btn from "@/component/Btn";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState("");

  const submitHandler = () => {
    axios
      .post("https://api.hust.online/arg2023/api/v1/questionnaire/contact", {
        contact,
      })
      .then((res) => {
        if (res.data.code === 200) navigate("/about");
      })
      .catch(() => {
        console.log("提交失败");
      });
  };

  const inputHandler = (e: any) => {
    setContact(e.target.value);
  };

  return (
    <div className="contact">
      <p className="contact-text">请留下你的联系方式：QQ/微信</p>
      <p className="contact-text">方便我们与你联系</p>
      <div className="contact-input">
        <input onChange={inputHandler}></input>
      </div>
      <p className="contact-desc">格式：WX+xxxxxx/QQ+xxxxxx</p>
      <Btn
        text="提交"
        onClick={submitHandler}
        style={{ width: "7.3rem", height: "3rem", marginTop: "2rem" }}
      ></Btn>
    </div>
  );
}
