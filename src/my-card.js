import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Title";
    
  }

  static get styles() {
    return css`

      :host {
        background-color: black;
        display: inline-flex;
        padding: 16px;
        border: 5px solid red;
        border-radius: 8px;
        margin: 8px;
        
      }
   
      .card-wrapper:hover {
        border: 5px solid transparent;
      }
      .card-wrapper {
        text-align: center;


      }


      .title {
        font-size: 24px;
        font-weight: bold;
        color: white;
      
      }

      img {
        max-width: 200px;
        height: 300px;
        margin: auto;
      }
      

    `;
  }

  render() {
    return html`
    <a href="${this.link}" rel="noopener noreferrer"></a>
    <div class="card-wrapper">
    <img src="${this.img}" alt="playing card image">
    <div class="title">${this.title}</div>
  </div>`
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      img: { type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
