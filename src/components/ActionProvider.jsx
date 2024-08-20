class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    sendMessage = (message) => {
      const botMessage = this.createChatBotMessage(message);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  }
  
  export default ActionProvider;