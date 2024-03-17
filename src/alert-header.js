import { LitElement, html, css } from 'lit';

export class AlertHeader extends LitElement {

    static get tag() {
        return 'alert-header';
    }


constructor() {
    super();
    this.date = '';
    this.amessage = '';
    this.status = 'status';
    this.open = true;
    this.sticky = false;
    this.closedHeight = '28px';
    this.openHeight = '56px';
    this.atitle = '';


}

static get styles() {
    return css`

    :host([sticky]) .alert-wrapper {
        position: sticky;
        top: 0;
        z-index: 100;


    }   

    :host([status="alert"]) .alert-wrapper {
        background-color: var(--noticeBC, #1daa18)
    }

    :host([status="warning"]) .alert-wrapper {
        background-color: var(--warningBC, #1815a4)
    }

    :host([status="emergency"]) .alert-wrapper {
        background-color: var(--emergencyBC, #c81111)
    }
    

    .alert-wrapper {
        padding: 12px;
        color: black;
        
    }

    .alert-button {
        background-color: white;
        color: black;
        font-weight: bold;
        font-size: 12px;
        border: 1px solid black;
        border-radius: 8px;
        cursor: pointer;
    }

    .closed .alert-wrapper {
        max-height: var(--alert-height);
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
            <div class= "alert-title">${this.atitle}</div>
            ${this.open ? html`<div class="alert-message">${this.amessage}</div>` : ``}
            <div class="date">${this.date}</div>
            <button class="alert-button" @click="${this.alertButton}">
          ${this.open ? 'Close' : 'Open'} Alert
        </button>
            </div>

    `}

static get properties() {
    return{
        open: { type: Boolean},
        status: { type: String},
        amessage: { type: String},
        date: { type: String},
        sticky: { type: Boolean, reflect: true},
        closedHeight: { type: String},
        openHeight: { type: String},
        atitle: { type: String},

        
        }
    }

}

globalThis.customElements.define(AlertHeader.tag, AlertHeader);