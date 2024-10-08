import { chatBubble } from "chat";

const appDiv = document.getElementById("app");
if (appDiv) {
  appDiv.innerHTML = chatBubble();
}
