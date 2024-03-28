import {html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";


class Haxcms extends DDD {

  constructor() {
    super();
    this.users = [];
    this.userIdCounter = 0;
  }

  addUser() {
    const usernameInput = this.shadowRoot.getElementById('usernameInput');
    const username = usernameInput.value.trim().toLowerCase();
    if (/^[a-z0-9]+$/.test(username)) {
      const user = {
        id: this.userIdCounter++,
        username: username
      };
      this.users.push(user);
      this.renderUser(user);
      usernameInput.value = '';
    } else {
      alert('Enter only lowercase letters and numbers.');
    }
  }
 
  renderUser(user) {
    const partyList = this.shadowRoot.querySelector('.party-list');
    const characterCard = document.createElement('div');
    characterCard.classList.add('character-card');
    characterCard.innerHTML = `
      <rpg-character character="${user.username}"></rpg-character>
      <div>${user.username}</div>
      <button class="delete-button">Delete</button>
    `;
    const deleteButton = characterCard.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => this.deleteUser(user.id));
    partyList.appendChild(characterCard);
  }

  deleteUser(userId) {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
      const partyList = this.shadowRoot.querySelector('.party-list');
      const characterCards = partyList.querySelectorAll('.character-card');
      characterCards[index].remove();
    }
  }


  makeItRain() {
    import('@lrnwebcomponents/multiple-choice/lib/confetti-container.js').then((module) => {
        setTimeout(() => {
            this.shadowRoot.querySelector('#confetti').setAttribute("popped", "");
        }, 0);
    });
}


  static styles = css`

  .card {
    padding: 24px;
    border-radius: var(--ddd-radius-md);
    background-color: var(--ddd-theme-default-beaver70)
  }

  :host {
    display: block;
    padding: 24px;
  }

  .input-container {
    margin-bottom: 24px;
  }

  input {
    padding: 12px;
    margin-right:12px;
    border: 2px solid var(--ddd-theme-default-nittanyNavy);
    border-radius: var(--ddd-radius-sm);
  }

  button {
    padding: 12px 24px;
    background-color: var(--ddd-theme-default-nittanyNavy);
    color: white;
    border: 1px solid white;
    border-radius: var(--ddd-radius-sm);
    cursor: pointer;
  }

  .party-list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  .character-card {
    padding: 12px;
    border: 2px solid var(--ddd-theme-default-nittanyNavy);
    background-color: var(--ddd-theme-default-slateMaxLight);
    border-radius: var(--ddd-radius-sm);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .delete-button {
    margin-top: 12px;
    background-color: var(--ddd-theme-default-landgrantBrown);
    color: white;
    border: none;
    border-radius: var(--ddd-radius-sm);
    cursor: pointer;
  }

  .save-button {
    margin-top: 12px;
    border-radius: var(--ddd-radius-sm);
    cursor: pointer;
  }

  `;


  render() {
    return html`
    <confetti-container id="confetti">
      <div class="card">
      <div class="input-container">
        <input type="text" id="usernameInput" placeholder="Enter username">
        <button @click="${this.addUser}">Add user</button>
      </div>
      <div class="party-list"></div>
      <button class="save-button" @click="${this.makeItRain}">Save party members</button>
      </div>
      </confetti-container>
      
    `;
  }
}


globalThis.customElements.define('haxcms-party-ui', Haxcms);



