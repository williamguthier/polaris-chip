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

incrementMethod() {
  if (this.counter < this.max) {
    this.counter += 1;
  }
  this.updateColor();

}

decrementMethod(){
  if (this.counter > this.min) {
    this.counter -= 1;
  }
  this.updateColor();
}

updateColor() {
  if (this.counter === 18 || this.counter === 21 || this.counter === this.min || this.counter === this.max) {
    this.style.setProperty('--counter-color', 'white');
  } else {
    this.style.removeProperty('--counter-color');
  }
  }

  updated(changedProperties) {
    if (changedProperties.has('counter')) {
      if (this.counter === 21){
        this.makeItRain();
      }
    }
    }


  makeItRain() {
    import('@lrnwebcomponents/multiple-choice/lib/confetti-container.js').then((module) => {
        setTimeout(() => {
            this.shadowRoot.querySelector('#confetti').setAttribute("popped", "");
        }, 0);
    });
}


    
  static get styles() {
    return css`

    :host {
      display: block;
      text-align: center;
    }

    .counter {
      font-size: 64px;
      font-weight: bold;
      color: var(--counter-color, red);
      background-color: black;
     
     
    }

    .buttons {
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
        <confetti-container id="confetti">
        <div class="counter">${this.counter}</div>
        <div class="buttons">
            <button id="decrement" class="button" ?disabled="${this.min === this.counter}" @click="${this.decrementMethod}">-</button>
            <button id="increment" class="button" ?disabled="${this.max === this.counter}" @click="${this.incrementMethod}">+</button>
            
      </div>
      </confetti-container>
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