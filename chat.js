async function sendMessage() {
  const input = document.getElementById("userInput");
  const userMessage = input.value;

  if (userMessage.trim() === "") return;

  addMessage("Tu", userMessage);
  input.value = "";

  // Echo diretto
  addMessage("AI", userMessage);
}

function addMessage(author, text) {
  const messagesDiv = document.getElementById("messages");

  const messageElement = document.createElement("div");
  messageElement.className = "message";

  messageElement.innerHTML = `<span class="user">${author}:</span> ${text}`;
  messagesDiv.appendChild(messageElement);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
