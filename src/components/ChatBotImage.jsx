import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import robo from "../assets/images/robo.png";
import roboColor from '../assets/images/roboColor.png';
import { toggleChatBot } from '../redux/reducers/ChatBotSlice.jsx';

const ChatBotImage = () => {
    const isActive = useSelector((state) => state.button.isActive);
    const dispatch = useDispatch();
  
    const handleImageClick = () => {
      dispatch(toggleChatBot()); 
    };
  
    return (
      <img 
        src={isActive ? roboColor : robo} 
        alt="Robo" 
        className={isActive ? 'active' : ''} 
        onClick={handleImageClick} 
      
      />
    );
  };
  
  export default ChatBotImage;