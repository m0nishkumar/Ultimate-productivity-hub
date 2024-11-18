import React from 'react';
import Widget from 'rasa-webchat';

export const Chatbot = () => {
  return (
    <div className="App">
      <Widget
        socketUrl="http://0.0.0.0:5005"
        socketPath="/socket.io/"
        customData={{ language: "en" }} // arbitrary custom data
        title="Rasa Chatbot"
        inputTextFieldHint="Type a message..."
        hideWhenNotConnected={false}
        embedded={false}
      />
    </div>
  );
};
