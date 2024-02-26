import { LitElement, html, css } from 'lit';

export class AlertWrapper extends LitElement {

    static get tag() {
        return 'alert-wrapper';
    }


constructor() {
    super();
    this.date = "date";
    this.amessage = "message";


}

static get styles() {
    return css`

    .header {

    }

    #alerts-content-wrapper {

    }
    
    .expand-alert {

    }

    .date {

    }

    .alert-message-wrap {

    }

    .alert-icon {

    }

    .alert-message {

    }

    .minimize-alert {
        
    }



    `;
    }   
   
render(){
    return html`
        <header class= "header">
        <div id="alerts-content-wrapper">
            <button class="expand-alert"></button>
            <div class="date">${this.date}</div>
            <div class="alert-message-wrap">
                <svg class="alert-icon"></svg>
                <div class="alert-message">${this.amessage}</div>
            </div>
            <div class="minimize-alert">
                <button>
                    <span>::before</span>
                    <span>:after</span> 
                    "Close"
                </button>
            </div>
        </div> 
    </header>



    `}

static get properties() {
    return{
    
        date: { type: String},
        amessage: { type: String},
    }
}

}

globalThis.customElements.define(AlertWrapper.tag, AlertWrapper);