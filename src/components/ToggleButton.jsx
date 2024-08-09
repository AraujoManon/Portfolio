import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleButton } from "../redux/reducers/ButtonActions";

const ToggleButton = () => {
  const dispatch = useDispatch();

  const isActive = useSelector((state) => state.button.isActive);

  const handleClick = () => {
    dispatch(toggleButton());
  };

  return (
    <button onClick={handleClick} className={isActive ? "active" : ""}>
      
    </button>
  );
};

export default ToggleButton;
