import { AbstractControlOptions, AsyncValidatorFn, UntypedFormArray, UntypedFormGroup, ValidatorFn } from "@angular/forms";

export class FormTable extends UntypedFormArray {

  constructor(private rowTemplate: () => UntypedFormGroup, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super([], validatorOrOpts, asyncValidator);
  }

  createRowControl(): UntypedFormGroup {
    return this.rowTemplate();
  }

  pushRowControl(): UntypedFormGroup {
    const control = this.createRowControl();
    this.push(control);
    return control;
  }

  get rowControls(): UntypedFormGroup[] {
    return this.controls.select(c => c as UntypedFormGroup);
  }

  override reset(value?: any, options?: Object): void {
    this.clear();

    if (Array.isArray(value)) {      
      for (let i = 0; i < value.length; i++)
        this.pushRowControl();
    }

    super.reset(value, options);
  }
}
