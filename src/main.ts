import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('main-app')
export class App extends LitElement {
  render() {
    return html`
    <h1>FORM - LIB</h1>
      <braver-theme-provider>
        <braver-form>
          <braver-text-input
            formControlName="name"
            label="name"
          ></braver-text-input>
          <braver-text-input
            formControlName="surname"
            label="surname"
          ></braver-text-input>
          <braver-button type="submit"></braver-button>
        </braver-form>
      </braver-theme-provider>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': App;
  }
}
