import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
        return 'counter-app';
}

constructor() {
    super();
    this.counter = "Counter";
    this.min = "0";
    this.max = "100";
    
    
  }
  static get styles() {
    return css`

    :host {
        display: inline-flex;
        
    #countercontainer {
       display: inline-flex;
    }
    .counter {
        padding: 16px;
        background-color: black;
        border: 8px solid red;
        border-radius: 16px;
        margin: 24px;
        text-align: center;
        
       
    }
      
      }
      `;
  }

  render() {
    return html`
        <div id="countercontainer">
            <section class="counter">

      </section>
  </div>
    `}

    static get properties() {

        return {  
        counter: { type: String},
        min: { type: String},
        max: { type: String},
        }
    }  
    
    
}
globalThis.customElements.define(CounterApp.tag, CounterApp);