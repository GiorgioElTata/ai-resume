async function sendMessage() {
  const input = document.getElementById("userInput");
  const userMessage = input.value;

  if (userMessage.trim() === "") return;

  addMessage("Tu", userMessage);
  input.value = "";

  try {
    const response = await fetch("https://ai-resume-backend-alpha.vercel.app/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        role: "user",
        content: userMessage
      })
    });
 
    const data = await response.json();
 
    // Mostriamo la risposta dell'AI
    addMessage("AI", data.content);
 
  } catch (error) {
    addMessage("Errore", "Impossibile contattare il server.");
  }
}

function addMessage(author, text) {
  const messagesDiv = document.getElementById("messages");

  const messageElement = document.createElement("div");
  messageElement.className = "message";

  messageElement.innerHTML = `<span class="user">${author}:</span> ${text}`;
  messagesDiv.appendChild(messageElement);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
