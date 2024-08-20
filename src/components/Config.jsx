import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "BuddyBot",
  initialMessages: [createChatBotMessage("Hey! Posez une question sur moi, mon assistant vous repondra.")],
  state: {},
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;