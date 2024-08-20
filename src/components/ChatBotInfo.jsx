import React, { useState } from "react";
import { useSelector } from 'react-redux';

const ChatBotInfo = () => {
  const isChatBotVisible = useSelector((state) => state.chatbot.isVisible);
  const [showExamples, setShowExamples] = useState(false); 

  const handleExamplesClick = () => {
    setShowExamples(!showExamples); 
  };

  const renderExamples = () => (
    <div className="questions">
      <p>Bonjour ?</p>
      <p>Comment t'appelles-tu ?</p>
      <p>Quel âge a Manon ?</p>
      <p>Quelle est sa dernière formation ? </p>
      <p>Quel est son dernier emploi ?</p>
      <p>Qu'est-ce qu'elle aime dans le développement ?</p>
      <p>Quelles sont ses qualités ?</p>
      <p>Qu'attend-elle dans son travail ?</p>
      <p>Qu'est-ce qu'elle aime faire dans la vie ? </p>
    </div>
  );

  return (
    <div className="chatbot-info">
      {isChatBotVisible ? (
        <>
          <p>
            Pour que je comprenne vos questions, piochez dans la liste disponible sous moi.
          </p>
          <a href="#examples" onClick={handleExamplesClick}>Par ici les questions!</a>
          {showExamples && renderExamples()} 
        </>
      ) : (
        <>
          <p>
            Des questions? Cliquez sur moi, je connais Manon comme ma poche!
          </p>
          <a href="#examples" onClick={handleExamplesClick}>Par ici les questions!</a>
          {showExamples && renderExamples()} 
        </>
      )}
    </div>
  );
};

export default ChatBotInfo;
