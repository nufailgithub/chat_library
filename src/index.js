export function chatBubble() {
  const htmlStructure = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Chat Interface</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #141414;
        }
        .chat-container {
            max-width: 500px;
            margin: 20px auto;
            background-color: #1f1f1f;
            border-radius: 8px;
            overflow: hidden;
        }
        .chat-header {
            background-color: #333;
            color: white;
            padding: 10px;
            text-align: center;
            font-size: 18px;
        }
        .chat-messages {
            height: 300px;
            overflow-y: auto;
            padding: 10px;
        }
        .message {
            margin-bottom: 10px;
            padding: 8px 12px;
            border-radius: 20px;
            max-width: 70%;
        }
        .sent {
            background-color: #DCF8C6;
            align-self: flex-end;
            margin-left: auto;
        }
        .received {
            background-color: #333;
            align-self: flex-start;
        }
        .chat-input {
            display: flex;
            padding: 10px;
            background-color: #333;
        }
        #message-input {
            flex-grow: 1;
            padding: 8px;
            background-color: #FFFFFF;
            margin-right: 10px;
        }
        #send-button {
            padding: 8px 15px;
            background-color: #FFFFFF;
            color:#141414 ;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <div class="chat-header">Live Chat</div>
        <div class="chat-messages" id="chat-messages">
            <!-- Messages will be added here -->
        </div>
        <div class="chat-input">
            <input type="text" id="message-input" placeholder="Type a message...">
            <button id="send-button">Send</button>
        </div>
    </div>

    <script>
        document.getElementById('send-button').addEventListener('click', sendMessage);
        document.getElementById('message-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        function sendMessage() {
            const input = document.getElementById('message-input');
            const message = input.value.trim();
            if (message) {
                const chatMessages = document.getElementById('chat-messages');
                const messageElement = document.createElement('div');
                messageElement.classList.add('message', 'sent');
                messageElement.textContent = message;
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                input.value = '';
            }
        }
    </script>
</body>
</html>
`;

  if (typeof window !== "undefined") {
    window.htmlStructure = htmlStructure;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = htmlStructure;
  }

  document.getElementById("app").innerHTML = htmlStructure;

  return htmlStructure;
}

chatBubble();
