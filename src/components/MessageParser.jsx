import { useSelector } from "react-redux";
import natural from "natural";

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const userInfo = useSelector((state) => state.chatbot.userInfo);

    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(message.toLowerCase());

    const intents = [
      { pattern: "nom", response: `Je m'appelle ${userInfo.name}.` },
      { pattern: "âge", response: `J'ai ${userInfo.age} ans.` },
      { pattern: "hobby", response: `Mon passe-temps favori est ${userInfo.hobby}.` },
    ];

    const response = this.matchIntent(tokens, intents);
    if (response) {
      this.actionProvider.sendMessage(response);
    } else {
      this.actionProvider.sendMessage("Aïe, votre question est trop difficile, je ne sais quoi dire...");
    }
  }

  matchIntent(tokens, intents) {
    for (const intent of intents) {
      if (tokens.includes(intent.pattern)) {
        return intent.response;
      }
    }
    return null;
  }
}

export default MessageParser;
