import { FormGroup } from "@angular/forms";

export class Validatedata {
    ValidateField(form: FormGroup, field: string): boolean {
        return form.controls[field].errors && form.controls[field].touched ? true : false;
    }
}