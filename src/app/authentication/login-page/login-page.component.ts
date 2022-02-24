import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../../services/users/user.service';
import * as data from 'src/app/shared/data/widgets/widgets';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public _saludo:string='HOLA UN SALUDO';

  public formSubmitted = false;

  active:any;
  constructor(
    private authservice: AuthService,
     private router: Router,
      private formBuilder : FormBuilder,
      private _userService:UserService
      ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : [localStorage.getItem('email')||'',[Validators.required, Validators.email]],
      password : ['userPassword2*', Validators.required],
      remember : [true],
   
    });
  }

  // firebase
  //email = "admin@demo.com";
  email = "jose@jose";
  password = "admindemo";
  errorMessage = ''; // validation _error handle
  _error: { name: string, message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login()
  {
    console.log(this.loginForm.value);
    this.formSubmitted = true;

    if( this.loginForm.valid )
    {
      console.log('Formulario validado exitosamente');
      this._userService.loginUser(this.loginForm.value)
      .subscribe(
        resp=>{           
          console.log('Valor que trae el remember');
          console.log( this.loginForm?.value.remember);
           // En caso de que el usuarion quiera que se recuerde  email
            if ( this.loginForm?.value.remember )
            {
              //Guardo en el local storage el email.
              localStorage.setItem('email',this.loginForm?.get('email')?.value);
            }
            else
            {
             //en caso contrario elimino el del local storage.
              localStorage.removeItem('email');
            }        
          console.log(resp);
           const { isVerified  } = resp.data;
           if( isVerified )
           {
            this.router.navigate(['/dashboard'])
            console.clear();
           }
           else{
            this.router.navigate(['/'])

           }
        }
        ,error=>{
          console.warn( error.error.Message );
           Swal.fire('Error',error.error.Message, 'error');
        }
        )
    } else
    {
      console.log('ERROR EN EL LOGIN');
    }
    // this.clearErrorMessage();
    // if (this.validateForm(this.email, this.password)) {
    //   this.authservice.loginWithEmail(this.email, this.password)
    //     .then(() => {
    //      this.router.navigate(['/dashboard'])
    //      console.clear()
    //     }).catch((_error:any)=> {
    //       this._error = _error
    //       this.router.navigate(['/'])
    //     })
    // }
    
  }

  validateForm(email:string, password:string) {
    if (email.length === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

  //angular
  public loginForm! : FormGroup;
  public error:any = '';

  get form(){
    return this.loginForm.controls;
  }
  
  Submit(){
    if (this.loginForm.controls['username'].value === "admin@demo.com" && this.loginForm.controls['password'].value === "admindemo" )
    {
      this.router.navigate(['/dashboard']);
    }
    else{
      this.error = "Please check email and passowrd"
    }
  }

  invalidField(field:string):boolean{

    if( this.loginForm.get(field)?.invalid && this.formSubmitted )
    {
      return true;
    }
   return false;
  }
  

}
