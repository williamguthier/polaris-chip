import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Title";
    this.image = "Image";
    this.link = "Link";
    this.fancy = false;
    this.description ='';
    this.top = '';
    this.bottom = '';
    

    
  }

  static get styles() {
    return css`

      :host {
        display: inline-flex;
        
      }
      :host([fancy]) {
        display: inline-block;
          background-color: black;
          margin: 0px;
          border: 16px solid black;
          box-shadow: 10px 10px 10px 10px black;
          border-radius: 16px;
      }   


      .card {
        padding: 16px;
        background-color: black;
        border: 8px solid red;
        border-radius: 16px;
        margin: 24px;
        text-align: center;
      }

      #cardlist {
        display: inline-flex;
      }


      .card-img {
        max-width: 200px;
        height: 300px;
        margin: auto;
      }

      .card-title {
        font-size: 24px;
        font-weight: bold;
        color: white;
        text-align: center;
      }

      .card-description {
        font-size: 16px;
        color: white;
        text-align: center
        
      }

      .card:hover {
        border: 12px solid red;
      }

      .card button {
        background-color: white;
        color: black;
        font-weight: bold;
        font-size: 16px;
        border: 3px solid white;
        border-radius: 16px;
        display: inline-block;
        background-color: red;
        margin: 10px;
      }

      .card button:hover {
        background-color: white;
        transition: background-color 0.5s ease;
      }

      .change-color {
        background-color: red;
      }

      @media screen and (max-width: 800px) {
        .button{
          visibility: hidden;
    }
}
      @media screen and (maxwidth: 500px) {
          .card {
            max-width: 300px;
     }

} 
      details summary {
        text-align: center;
        font-size: 20px;
        padding: 8px 0;
        color: white;
  }

      details[open] summary {
        font-weight: bold;
  }
  
      details div {
        border: 2px solid red;
        border-radius: 16px;
        text-align: center;
        padding: 8px;
        height: 70px;
        overflow: auto;
  }

    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }


  render() {
    return html`
    <div id="cardlist" class="card-list">
      <section class="card">
        
        <meme-maker alt="Cat stalking a small toy" image-url="${this.image}" top-text="${this.top}" bottom-text="${this.bottom}" class="card-img"></meme-maker>
        <div class="card-content">
          <h2 class="card-title">${this.title}</h2>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
              <div>
                <slot class="card-description">${this.description}</slot>
              </div>
          </details>

          <a href="${this.link}"><button style="--button-color: ${this.buttonColor};">Details</button></a>
        </div>
      </section>
  </div>`
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String, attribute: "img"}, 
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
      bottom: { type: String},
      top: { type: String},
      
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

