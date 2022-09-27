import { global_styles, chat_styles, message_styles } from "./style.js";
import { iconSend } from "./message.js";

export class chatBot extends HTMLElement{

  constructor() {
    super();
    this.fitstTime = true;
  }

  connectedCallback() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.render();
    this.openCloseEvent();
    this.sendMessageEvent();
  }

  static get styles() { return global_styles + chat_styles + message_styles; }

  static get iconSend() { return iconSend; }

  render() {
    return `
      ${ chatBot.styles }
      <section class="chat__position">
        <button id="chat-button" type="button" class="collapsible">Chatbot webcomponent </button>
        <div class="chat__content_toogle">
          <div class="chat__content_body">
            <div id="chatbox" class="chat__messages">
              <p id="botLoadingMessage" class="botText"><span>Loading...</span></p>
            </div>
            <div class="chat__input_bar">
              <input id="textInput" class="chat__input" type="text" name="msg" placeholder="Message" />
              <span id="chat-icon" class="chat__icon">${ chatBot.iconSend }</span>
            </div>
            <div id="chat-scroll"></div>
          </div>
        </div>
      </section>
    `;
  }

  getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let repeat = 2;

    hours = hours.toString().padStart(repeat, "0");
    minutes = minutes.toString().padStart(repeat, "0");

    let time = hours + ":" + minutes;
    return time;
  }

  openCloseEvent() {
    let chatCollapse = this.shadowRoot.querySelector(".collapsible");

    chatCollapse.addEventListener("click", element => {
      if (this.fitstTime) {
        this.botMessage({ userText: "first message" });
        this.fitstTime = false;
      }

      let content = element.target.nextElementSibling;
      content.classList.toggle("active");

      if ( content.classList.contains("active") )
        this.shadowRoot.querySelector("#textInput").focus();
    });
  }

  botMessage({ userText }) {
    if ( userText === "first message" ) {
      let element = this.shadowRoot.getElementById("botLoadingMessage");
      element.innerHTML = "";
    }

    let botResponse = this.getBotResponse(userText);
    let chatBox = this.shadowRoot.getElementById("chatbox");

    let botTextTitle = document.createElement("div");
    botTextTitle.innerHTML = `<p class="botText"><span>${ botResponse }</span></p>`;

    chatBox.append(botTextTitle);

    let messageTime = document.createElement("div");
    messageTime.innerHTML = `<p class="timeResponse">${ this.getTime() }</p>`;
    chatBox.append(messageTime);

    let options = ["hi", "$%#$%^$%a", "bye"];

    for ( let option of options ) {
      let botTextOption = document.createElement("div");
      botTextOption.innerHTML = `<p class="botText botOption"><span> ${ option } </span></p>`;

      chatBox.append(botTextOption);

      botTextOption.addEventListener("click", () => {
        this.userMessage({ option });
      });
    }

    if ( userText === "bye" ) this.clearOptions();

    this.shadowRoot.getElementById("chat-scroll").scrollIntoView(true);
  }

  clearOptions() {
    let options = this.shadowRoot.querySelectorAll(".botOption");
    for (let element of options) element.remove();
  }

  userMessage({ option }) {
    this.clearOptions();
    let userText = this.shadowRoot.querySelector("#textInput").value || "Send messsage empty";
    if ( option ) userText = option;

    this.shadowRoot.querySelector("#textInput").value = "";

    let chatBox = this.shadowRoot.querySelector("#chatbox");
    let div = document.createElement("div");
    div.innerHTML = `<p class="userText"><span>${ userText }</span></p>`;
    chatBox.append(div);

    let messageTime = document.createElement("div");
    messageTime.innerHTML = `<p class="timeResponse userTime">${ this.getTime() }</p>`;
    chatBox.append(messageTime);

    this.shadowRoot.getElementById("chat-scroll").scrollIntoView(true);

    let oneSecond = 1000;
    setTimeout(() => {
      this.botMessage({ userText });
    }, oneSecond);
  }

  sendMessageEvent() {
    let enterKeyCode = 13;

    let buttonSend = this.shadowRoot.querySelector(".chat__icon");
    buttonSend.addEventListener("click", () => {
      this.userMessage({});
    });

    let textInput = this.shadowRoot.querySelector("#textInput");
    textInput.addEventListener("keydown", event => {
      if (event.keyCode != enterKeyCode ) return;
      this.userMessage({});
    });
  }

  getBotResponse(input) {
    if (input === "hi")
      return "Hi pick one option please";
    else if (input === "first message")
      return "First message, please select one option";
    else if (input === "bye")
      return "goodbye!";

    return "I don't understand!";
  }
}

customElements.define("chatbot-component", chatBot);
