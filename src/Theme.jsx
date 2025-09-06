import { motion } from "framer-motion";
import { useState } from "react";

function Theme({ theme, setTheme }) {
  const isDark = theme === "dark";
  const [isOn, setIsOn] = useState(isDark);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
    setIsOn(!isOn); 
  };

  const container = {
    width: 130,
    height: 65,
    backgroundColor: isDark ? "#7f6775ff" : "#F75270",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
  };

  const handle = {
    width: 50,
    height: 50,
    backgroundColor: "#67485A",
    borderRadius: "50%",
  };

  return (
    <button
      style={{
        ...container,
        justifyContent: isOn ? "flex-end" : "flex-start",
      }}
      onClick={toggleTheme}
    >
      <motion.div
        style={handle}
        layout
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}

export default Theme;
