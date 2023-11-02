export interface Question {
  id: number;
  desc: string;
  type: "choice" | "rating";
}

export interface ChoiceQuestion extends Question {
  choice: string[];
}
