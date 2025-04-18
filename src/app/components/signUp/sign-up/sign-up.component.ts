import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../shared/services/user/user.service';
import { Router, RouterLink } from '@angular/router';
import { error, log } from 'node:console';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  private readonly userService = inject(UserService)
  private readonly router = inject(Router)

  registerForm:FormGroup=new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9]{8,}$/)]),
    age: new FormControl(null, [Validators.required,Validators.min(20)]),
    phone: new FormControl(null, [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });
  errorMsg: string = '';
  errorCondition: boolean = false;
  

  submitForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.userService.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log("enter Error");
          this.errorCondition = true;
          setTimeout(() => {
            this.errorCondition = false;}, 2000);  
            this.registerForm.reset();
          
          this.errorMsg = err.error.msg;
          
          console.log('Error:', err);
          
          
          
        }
      });
    } else {
      console.log('Form is invalid');
     
    }
  }
  

}
