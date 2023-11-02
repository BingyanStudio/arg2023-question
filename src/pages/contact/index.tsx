import Btn from "@/component/Btn";
import "./index.scss";

export default function Contact() {
  const submitHandler = () => {};

  return (
    <div className="contact">
      <p className="contact-text">请留下你的联系方式：QQ/微信</p>
      <p className="contact-text">方便我们与你联系</p>
      <div className="contact-input">
        <input></input>
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
