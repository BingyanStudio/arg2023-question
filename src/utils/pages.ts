import { ChoiceQuestion, Question } from "@/type";

interface PageInfo {
  questionList: Question[] | ChoiceQuestion[];
  type: "choice" | "rating";
  isEnd?: boolean;
}

const pages: PageInfo[] = [
  {
    questionList: [
      {
        id: 0,
        type: "choice",
        desc: "在本次ARG中，你是否亲自成功登陆了ARG社团木子的账号？",
        choice: ["是", "不是"],
      },
    ],
    type: "choice",
  },
  {
    questionList: [
      {
        id: 1,
        type: "rating",
        desc: "1. 在玩ARG时，如果我自己发现了新线索，我会比从别人那里知道更开心。",
      },
      {
        id: 2,
        type: "rating",
        desc: "2. 我认为在ARG的过程中和群里的人一起讨论的过程很有趣",
      },
      {
        id: 3,
        type: "rating",
        desc: "3. 我认为破解整个ARG得到最后的结果是最重要的",
      },
      {
        id: 4,
        type: "rating",
        desc: "4. 在玩ARG时，我总是喜欢自己去寻找各种各样的线索，而不是在聊天群中等待其他玩家。",
      },
      {
        id: 5,
        type: "rating",
        desc: "5. 我认为对于一个ARG来说，通过推理解谜来解决谜题比知道谜题的答案更重要",
      },
      {
        id: 6,
        type: "rating",
        desc: "6. ARG提供了一个自由开放的游戏世界，在找线索时，我会因为游戏中信息量太大而感到开心",
      },
    ],
    type: "rating",
  },
  {
    questionList: [
      {
        id: 7,
        type: "rating",
        desc: "7. 我喜欢在ARG的玩家群中聊天，哪怕有时内容和正在进行的游戏无关",
      },
      {
        id: 8,
        type: "rating",
        desc: "8. 我在玩ARG时，从不参与玩家群",
      },
      {
        id: 9,
        type: "rating",
        desc: "9. 我认为在ARG的解谜过程中，通过某些非正常推理手段来解决谜题并且跳过故事剧情部分或推理部分，是可以接受的（比如看网页的源代码，解包等）",
      },
      {
        id: 10,
        type: "rating",
        desc: "10. 在玩ARG时，我总是喜欢自己去寻找各种各样的线索，而不是在聊天群中等待其他玩家。",
      },
      {
        id: 11,
        type: "rating",
        desc: "11. 比起用推理手段，我喜欢通过技术手段（如查看源代码，开发解题工具）得到谜题答案",
      },
      {
        id: 12,
        type: "rating",
        desc: "12. 我非常享受去浏览ARG包含的各种社交账户和网络平台，来寻找线索。",
      },
    ],
    type: "rating",
  },
  {
    questionList: [
      {
        id: 13,
        type: "rating",
        desc: "13. 我认为对于一个ARG来说，通过推理解谜来解决谜题比知道谜题的答案更重要",
      },
      {
        id: 14,
        type: "rating",
        desc: "14. ARG提供了一个自由开放的游戏世界，在找线索时，我会因为游戏中信息量太大而不知所措",
      },
      {
        id: 15,
        type: "rating",
        desc: "15. 我喜欢去尝试寻找游戏线索",
      },
      {
        id: 16,
        type: "rating",
        desc: "16. 我在玩ARG时，经常参与玩家群",
      },
      {
        id: 17,
        type: "rating",
        desc: "17. 我喜欢在ARG的玩家群中聊天，哪怕有时内容和正在进行的游戏无关",
      },
      {
        id: 18,
        type: "rating",
        desc: "18. 比起用技术手段（如查看源代码，开发解题工具），我更喜欢通过推理手段得到谜题答案",
      },
    ],
    type: "rating",
  },
  {
    questionList: [
      {
        id: 19,
        type: "rating",
        desc: "19. 在玩ARG时，如果我自己发现了新线索，我会比从别人那里知道更开心。",
      },
      {
        id: 20,
        type: "rating",
        desc: "20.我在玩ARG时，总是想成为最先发现新线索的人之一",
      },
      {
        id: 21,
        type: "rating",
        desc: "21. 当其他人发现新的线索并将其发送到玩家群时，我愿意参与讨论",
      },
      {
        id: 22,
        type: "rating",
        desc: "22.相比于得到结果，我更享受整个ARG的推理过程",
      },
      {
        id: 23,
        type: "rating",
        desc: "23.在我玩ARG的时候，我使用了一些技术手段来解谜，虽然我不认为这是设计者的本意。",
      },
    ],
    type: "rating",
    isEnd: true,
  },
];

export default pages;
