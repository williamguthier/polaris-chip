import { LitElement, html, css } from 'lit';

export class AlertHeader extends LitElement {

    static get tag() {
        return 'alert-header';
    }


constructor() {
    super();
    this.date = "date";
    this.amessage = "";
    this.status = "status";
    this.open = true;
    this.sticky = false;


}

static get styles() {
    return css`

  

    .alert--wrapper {

    }

    .alert-button {
        
    }

    .date {

    }

    .alert-icon {

    }

    .alert-message {

    }



    `;
    }   

    alertButton(){
        if (this.sticky && !this.open) {
            this.open = true;
            localStorage.removeItem('alertStatus');
        } else {
            this.open = !this.open;
            localStorage.setItem('alertStatus', this.open ? 'open' : 'closed');
        }

        this.style.setProperty('--alert-height', this.open ? this.openHeight : this.closedHeight);
        
    }
    

render(){
    return html`
       <div class="alert-wrapper ${this.open ? '' : 'closed'}" ?sticky="${this.sticky}">
        <button class="alert-button" @click="${this.alertButton}">
          ${this.open ? 'Close' : 'Open'} Alert
        </button>
            <svg class="alert-icon"></svg>
            <div class="alert-message">${this.amessage}</div>
            <div class="date">${this.date}</div>
            </div>

    `}

static get properties() {
    return{
        open: { type: Boolean},
        status: { type: String},
        amessage: { type: String},
        date: { type: String},
        sticky: { type: Boolean, reflect: true},

        
    }
}

}

globalThis.customElements.define(AlertHeader.tag, AlertHeader);