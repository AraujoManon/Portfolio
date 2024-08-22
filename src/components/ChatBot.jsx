import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/reducers/ChatBotSlice';  

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [isActive] = useState(false); 
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chatbot.messages);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage({ message: input }));
    setInput('');
  
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
 
  };

  return (
    <div className={`chatbot ${isActive ? 'active' : ''}`}>
      <div className={`chat-window ${isActive ? 'active' : ''}`}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type} ${isActive ? 'active' : ''}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={isActive ? 'active' : ''}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Posez-moi une question..."
          className={isActive ? 'active' : ''}
        />
        <button type="submit" className={isActive ? 'active' : ''}>Envoyer</button>
      </form>
    </div>
  );
};

export default Chatbot;
