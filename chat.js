// Questa funzione viene chiamata quando clicchi "Invia"
async function sendMessage() {
  // Prendiamo il testo scritto dall'utente
  const input = document.getElementById("userInput");
  const userMessage = input.value;
 
  // Se l'utente non ha scritto nulla, fermiamo tutto
  if (userMessage.trim() === "") {
    return;
  }
 
  // Mostriamo il messaggio dell'utente nella chat
  addMessage("Tu", userMessage);
 
  // Puliamo il campo di input
  input.value = "";
 
  // === CHIAMATA AL BACKEND (PLACEHOLDER) ===
  // try {
    // const response = await fetch("https://TUO-PROGETTO.vercel.app/api/chat", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     message: userMessage
    //   })
    // });
 
    // const data = await response.json();
 
    // Mostriamo la risposta dell'AI
    // addMessage("AI", data.reply);
    addMessage("AI", userMessage);
 
  } catch (error) {
    addMessage("Errore", "Impossibile contattare il server.");
  }
}
 
// Questa funzione aggiunge un messaggio alla chat
function addMessage(author, text) {
  const messagesDiv = document.getElementById("messages");
 
  const messageElement = document.createElement("div");
  messageElement.className = "message";
 
  messageElement.innerHTML = `<span class="user">${author}:</span> ${text}`;
 
  messagesDiv.appendChild(messageElement);
 
  // Scroll automatico verso il basso
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
