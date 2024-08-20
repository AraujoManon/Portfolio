import React from "react";
import Introduction from "./Introduction.jsx";
import ChatBotImage from "./ChatBotImage.jsx";
import ChatBotInfo from "./ChatBotInfo.jsx";
import ChatBot from './ChatBot.jsx';
import { useSelector } from 'react-redux';

const APropos = () => {
  const isChatBotVisible = useSelector((state) => state.chatbot.isVisible);
  const isActive = useSelector((state) => state.button.isActive); 

  return (
    <div id="qui-suis-je" className={`a-propos ${isActive ? 'active' : ''}`}>
      {!isChatBotVisible && <Introduction />}
      {isChatBotVisible && <ChatBot />}
      <div className={`chatbot-container ${isActive ? 'active' : ''}`}>
        <ChatBotImage />
        <ChatBotInfo />
      </div>
    </div>
  );
};

export default APropos;
