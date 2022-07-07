import { FormEventsType } from "./events_type";

export interface FormEvent {
  type: FormEventsType;
  payload: any;
}

export interface FieldEvent extends FormEvent {
  payload: {
    formControlName: string;
    value?: any;
  };
}
