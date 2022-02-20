import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../../services/users/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from '../../app.validator/validator';

//SweeAlert
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email="";
  password="";
  message = '';

  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  errorMessage = 'Por favor introduzca un nombre'; // validation error handle

  constructor(
    private authservice: AuthService, 
    private router:Router,
    private _userService:UserService,
    private _fb:FormBuilder
    ) { }


    //Inicio de codigo nuevo //
  errorEmail = "El email es obligatorio y debe ser valido";
  errorPassword= "El password es obligatorio";
  errorConfirmPassword="La confimacion del password es obligatoria";
  errorPasswordsAreNotTheSame="Las contraseñas deben ser iguales";
  errorLastName='Por favor introduzca un apellido';
  errorUserName='Por favor introduzca un nombre de usuario';

  public registerForm:FormGroup = this._fb.group(
    {
      name:['jose',Validators.required],
      lastName:['matos',Validators.required],
      email:['jose@jose',[Validators.required, Validators.email]],
      userName:['joseg',Validators.required],
      password:['userPassword2*',Validators.required],
      confirmPassword:['userPassword2*',Validators.required],
     // validators:CustomValidators.passwordsAreTheSame

    },
    {
      validators: this.passwordsAreSame('password','confirmPassword') 
    }
   
  );

  public formSubmitted = false;

  ngOnInit(): void {
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

  register()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "you are register with data on firbase"
          this.router.navigate(['/dashboard'])
        }).catch((_error:any) => {
          this.error = _error
          this.router.navigate(['/auth/register'])
        })
    }
  }

  validateForm(email:string, password:string)
  {
    if(email.length === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
  
  invalidField(field:string):boolean{

    if( this.registerForm.get(field)?.invalid && this.formSubmitted )
    {
      return true;
    }
   return false;
  }
  
  aceptarTerminos():boolean{

    return !this.registerForm.get('terminos')?.value && this.formSubmitted 
  }

  passwordsAreNotTheSame(){
    const passW = this.registerForm.get('password')?.value;
    const passWC= this.registerForm.get('confirmPassword')?.value;
    if( (passW !== passWC) && this.formSubmitted )
    {
       return true;
    }
    return false;
  }

  passwordsAreSame(password:string, confimPassword:string)
  {
     return (formGroup:FormGroup)=>{

      const passwordControl=formGroup.get(password);
      const confimPasswordControl=formGroup.get(confimPassword);
       if(passwordControl?.value === confimPasswordControl?.value)
       {
        confimPasswordControl?.setErrors(null);
       }
       else
       {
        confimPasswordControl?.setErrors({notAreSame: true})
       }

     }
  }

  createUser(){

    this.formSubmitted=true;

     console.log( this.registerForm.value );
     if(this.registerForm.valid)
     {
       console.log('Posteando formulario...');
       this._userService.createUser(this.registerForm.value)
       .subscribe(resp=>{
         console.log('Usuario creado');
         console.log(resp);
         
       },
       error=>{
           console.warn( error.error.Message );
           Swal.fire('Error',error.error.Message, 'error');
       });       
     }
     else{
       console.log('Formulario no es correcto...');
     }
  }
}
