import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FormEventsType } from "./models/events_type";
import { FieldEvent, FormEvent } from "./models/form_event.model";
import { FORM_EVENT } from "./utils/constants";

@customElement("braver-form")
export class Form extends LitElement {
  FORM_EVENT = FORM_EVENT;
  @state()
  private formGroup: { [key: string]: any };
  @state()
  private isSubmitted: boolean;
  @state()
  private isPristine: boolean;
  @state()
  private isTouched: boolean;
  @state()
  private isValid: boolean;
  @state()
  private isDisabled: boolean;
  @state()
  private errors?: any[];

  @property({ type: Function })
  onSubmit;

  constructor() {
    super();
    this.formGroup = {};
    this.isSubmitted = false;
    this.isValid = false;
    this.isTouched = false;
    this.isPristine = false;
    this.isDisabled = false;

    this.onSubmit = () => console.log("Submitted", this.formGroup);
  }

  private handleFormEvents(event: CustomEvent) {
    event.stopPropagation();
    const formEvent = event.detail as FormEvent;
    switch (formEvent.type) {
      case FormEventsType.CHANGE: {
        const fieldEvent = formEvent as FieldEvent;
        const payload = fieldEvent.payload;
        this.formGroup[payload.formControlName] = payload.value;
        this.isPristine ? (this.isPristine = false) : null;
        this.requestUpdate();
        break;
      }
      case FormEventsType.SUBMIT: {
        this.handleSubmit(event);
        //TRIGGERA LA VALIDAZIONE
        // this.requestUpdate();
        break;
      }
      default:
        console.log("Evento non gestito");
    }
  }
  handleSubmit(evt: Event) {
    evt.preventDefault();
    this.onSubmit();
  }

  reset() {}
  render() {
    return html`<form
      @braver-form-events="${this.handleFormEvents}"
      @submit="${this.handleSubmit}"
    >
      ${JSON.stringify(this.formGroup)}
      <slot></slot>
    </form>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "braver-form": Form;
  }
}
