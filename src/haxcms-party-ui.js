import {html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";


class Haxcms extends DDD {
  static properties = {
    users: { type: Array },
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

  constructor() {
    super();
    this.users = [];
  }

  render() {
    return html`
      <div class="card">
      <div class="input-container">
        <input type="text" id="usernameInput" placeholder="Enter username">
        <button @click="${this.addUser}">Add user</button>
      </div>
      <div class="party-list"></div>
      <button class="save-button" @click="${this.saveParty}">Save party members</button>
      </div>
      
    `;
  }
}


globalThis.customElements.define('haxcms-party-ui', Haxcms);



