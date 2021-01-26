import React from "react";
import "./ToggleSwitch.css";
function ToggleSwitch({ isOn, handleToggle }) {
  return (
    <div className="toggle_switch">
      <div className="toggle-label">Light</div>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#8ad4eb" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      <div className="toggle-label">Dark</div>
    </div>
  );
}

export default ToggleSwitch;
