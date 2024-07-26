import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _toastre: ToastrService, private _AuthService: AuthService, private _Router: Router) {
    if (_AuthService.isLogged.value) {
      _toastre.warning("Already logged in!")
      _Router.navigate(['/home'])
    }
  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
  })
  rePasswordValue!: string;
  rePasswordIsValid: boolean = false;
  errorMsg: string = ''
  login(formData: FormGroup) {
    if (formData.valid) {
      console.log(formData.value);
      this._AuthService.login(formData.value).subscribe({
        next: (response) => {
          this._toastre.success(response.message)
          if (response.message == 'success') {
            this._AuthService.isLogged.next(true)
            console.log(response);
            localStorage.setItem('token', response.token)
            this._Router.navigate(['/home'])
          } else {
            this.errorMsg = response.message
          }
        }
      })
    } else {
      this.errorMsg = 'Incorrect email or password'
    }
  }
}
// {
//     email: new FormControl(null, [Validators.required, Validators.email]),
//     password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
//   }