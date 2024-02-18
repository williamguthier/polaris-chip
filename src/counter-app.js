import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
        return 'counter-app';
}
constructor() {
    super();
    this.counter = 0;
    this.min = 0;
    this.max = 100;
    
}


    
  static get styles() {
    return css`

    :host {
      display: block;
      text-align: center;
    }

    #counter {
      font-size: 64px;
      font-weight: bold;
      color: red;
      background-color: black;
     
     
    }

    #buttons {
      display: inline-flex;
      justify-content: center;
      padding: 10px;
      gap: 10px;
    }

    .button {
      color: white;
      font-size: 24px;
      padding: 12px 24px;
      font-weight: bold;
      cursor: pointer;
    }

    #increment {
        background-color: green;
    }

    #decrement {
        background-color: red;
    }

    

    .button:hover {
      background-color: red;
    }

    .button:disabled {
      background-color: white;
      cursor: not-allowed;
    }

      `;
  }

  render() {
    return html`
        <div id="counter">${this.counter}</div>
        <div id="buttons">
            <button id="decrement" class="button" ?disabled="${this.min === this.counter}">-</button>
            <button id="increment" class="button" ?disabled="${this.max === this.counter}">+</button>
      </div>
    `}

    static get properties() {

        return {  
        counter: { type: Number},
        min: { type: Number},
        max: { type: Number},
        }
    }  
    
    
}
globalThis.customElements.define(CounterApp.tag, CounterApp);