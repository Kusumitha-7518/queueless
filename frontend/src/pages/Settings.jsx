import { useState } from "react";
import "../styles/Settings.css";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>

      <div className="settings-card">
        <div className="setting-item">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="setting-item">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <button className="save-btn" onClick={handleSave}>
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;