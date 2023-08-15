import React from "react";
import "./ChatImg.css";
function ChatImg() {
  const fun_click = () => {
    var link_chat = document.getElementById("wccht");
    link_chat.href =
      "";
  };
  return (
    <div className="chat_section">
      <div className="whatsapp_chat" id="wccht" onClick={fun_click}>
        <img
          src=""
          alt=""
        />
      </div>
    </div>
  );
}

export default ChatImg;
