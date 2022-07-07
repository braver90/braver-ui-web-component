import { html, LitElement, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("braver-theme-provider")
export class ThemeProvider extends LitElement {
  constructor() {
    super();
  }
  static styles: CSSResultGroup | undefined = css`
    :host {
      --primary: var(--primary-color, blue);
      --on-primary: var(--on-primary, white);
    }
  `;
  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "braver-theme-provider": ThemeProvider;
  }
}
