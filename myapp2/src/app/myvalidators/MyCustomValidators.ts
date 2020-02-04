import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MyCustomValidators{
    public static shouldNotContainSpace(control:AbstractControl):ValidationErrors | null{
        if( (control.value as string).indexOf(' ')>0){
          return {shouldNotContainSpaces:true}
        }
  
        return null;
    }
}