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
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      span {

      }
    `;
  }

  render() {
    return html`<a href="${this.link}" rel="noopener noreferrer"></a>
      <div>${this.img}</div>
      <div>${this.title}</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
