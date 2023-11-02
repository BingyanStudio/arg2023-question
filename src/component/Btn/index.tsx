import "./index.scss";

type BtnProps = {
  onClick: () => void;
  text: string;
  style?: React.CSSProperties | undefined;
};

export default function Btn(props: BtnProps) {
  const { onClick, text, style } = props;
  return (
    <div className="btn" onClick={onClick} style={style}>
      <p>{text}</p>
    </div>
  );
}
