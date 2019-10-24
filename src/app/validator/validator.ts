import { ValidatorFn, AbstractControl } from "@angular/forms";

export function dateValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (control && control.value) {
    const start = control.root.get("startDate").value;
    const end = control.root.get("endDate").value;
    const startDate = new Date(start);
    const endDate = new Date(end);
    if (startDate < endDate) {
      return null;
    } else {
      return { dateError: true };
    }
  }
}
