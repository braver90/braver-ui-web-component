import { html, LitElement, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { EventCreator } from "../../form/utils/event_dispatcher";

@customElement("braver-button")
export class Button extends LitElement {
  @property({ type: String })
  label: string;

  @property({ type: Function })
  onClick: Function;

  @property({ type: Boolean })
  disabled: boolean;

  @property({ type: String })
  type: "button" | "submit" | "reset" | "menu";
  constructor() {
    super();
    this.label = "";
    this.onClick = () => console.log("Clicked");
    this.disabled = false;
    this.type = "button";
  }
  static styles?: CSSResultGroup | undefined = css`
    button {
      background-color: var(--primary);
    }
  `;

  handleClick(evt: Event) {
    if (this.type == "submit") {
      // this.fo
      // this.dispatchEvent();
      this.dispatchEvent(EventCreator.submit());
    } else {
      this.onClick(evt);
    }
  }
  render() {
    return html`<button type="${this.type}" @click="${this.handleClick}">
      Clikka
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "braver-button": Button;
  }
}
