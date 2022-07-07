import { FormEventsType } from "../models/events_type";
import { FieldEvent } from "../models/field_event.model";
import { FORM_EVENT } from "./constants";

export const EventCreator = {
  change: (field: FieldEvent) =>
    new CustomEvent(FORM_EVENT, {
      bubbles: true,
      composed: false,
      detail: {
        type: FormEventsType.CHANGE,
        payload: {
          formControlName: field.formControlName,
          value: field.value,
        },
      },
    }),
  submit: () =>
    new CustomEvent(FORM_EVENT, {
      bubbles: true,
      composed: false,
      detail: {
        type: FormEventsType.SUBMIT,
        payload: null,
      },
    }),
};
