import { LitElement, html, css } from 'lit';


export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Title";
    this.image = "Image";
    this.link = "Link";
    
  }

  static get styles() {
    return css`

      :host {
        display: inline-flex;
        background-color: black;
        padding: 16px;
        border: 8px solid red;
        border-radius: 16px;
        margin: 8px;
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

      .card:hover {
        border: 5px solid transparent;
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

    `;
  }

  render() {
    return html`
    <div id="cardlist" class="card-list">
      <section class="card">
        <img src="${this.image}" alt="${this.title}" class="card-img">
        <div class="card-content">
          <h2 class="card-title">${this.title}</h2>
          <a href="${this.link}"><button style="--button-color: ${this.buttonColor};">Details</button></a>
        </div>
      </section>
  </div>`
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String, attribute: "img"}, 
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
