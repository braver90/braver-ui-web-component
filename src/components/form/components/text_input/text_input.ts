import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FieldEvent } from "../../models/field_event.model";
import { EventCreator } from "../../utils/event_dispatcher";

@customElement("braver-text-input")
export class TextInput extends LitElement {
  @property({ type: String })
  formControlName: string = "";

  @property({ type: String })
  label: string = "";

  private handleChange(evt: Event) {
    const element = evt?.target as HTMLInputElement;
    const field: FieldEvent = {
      formControlName: this.formControlName,
      value: element.value,
    };
    const formEvent = EventCreator.change(field);
    this.dispatchEvent(formEvent);
  }
  render() {
    return html` <div class="form-group">
      <label>${this.label}</label>
      <input type="text" class="form-control" @change="${this.handleChange}" />
      <!-- <error-label
        [errors]="formControl.errors"
        [errorsLabels]="plainErrorsLabels"
        [showErrors]="formControl.touched && formControl.invalid"
      ></error-label> -->
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "braver-text-input": TextInput;
  }
}
