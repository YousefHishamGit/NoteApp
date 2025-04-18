import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../shared/services/user/user.service';
import { log } from 'console';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  private readonly router = inject(Router)
  private readonly userService=inject(UserService)
  loading:boolean = false;
  errorCondition:boolean = false;
  errorMsg:string = '';



  LoginForm:FormGroup=new FormGroup({
    
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9]{8,}$/)]),

    
  });

  loginSubmit() {
    this.loading = true;
    if (this.LoginForm.valid) {
      this.userService.signIn(this.LoginForm.value).subscribe({
        next: (res) => {
          this.loading = false;
          if(res.msg=='done'){
            localStorage.setItem('token',res.token)
            this.router.navigate(['/blank']);
            
          }
          
        }
        ,error: (err) => {
          this.loading = false;
          this.errorCondition = true;
          this.errorMsg = err.error.msg;
          setTimeout(() => {
            this.errorCondition = false;
            
          }, 2000);
        }
      })
  
    } else {
      
      this.loading = false;
    }
  }

}
