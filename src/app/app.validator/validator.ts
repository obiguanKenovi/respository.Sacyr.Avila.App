import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class CustomValidators {

        static passwordsAreTheSame( control: AbstractControl) {
	
        const password = control.get("password")
        const confirmPassword = control.get("confirmarPassword")
      
        return password?.value === confirmPassword?.value ? null: { theyAreDifferent: true }
      }

}
