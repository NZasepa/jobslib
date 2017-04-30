import { DynamicField } from '../common/dynamic-form/fields/dynamic-field.model';

export interface Site {
  id: string;
  name: string;
  queryForm: Array<DynamicField>;
}
