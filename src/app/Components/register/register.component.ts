import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _toastre: ToastrService, private _AuthService: AuthService, private _Router: Router) {
    if (_AuthService.isLogged.value) {
      _toastre.warning("Logout First!")
      _Router.navigate(['/home'])
    }
  }

  rePasswordValue!: string;
  rePasswordIsValid: boolean = false;

  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Z][a-zA-Z]{0,}$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  register(formData: FormGroup) {
    if (formData.valid) {
      // console.log(formData.value);
      this._AuthService.register(formData.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this._toastre.success(response.message)
            // console.log(response);
            localStorage.setItem('token', response.token)
            this._Router.navigate(['/home'])
          } else {
            this._toastre.warning(response.message)
          }
        }
      })
    }
  }
  matchRepassword() {
    if (this.registerForm.value.password == this.registerForm.value.rePassword) {
      this.rePasswordIsValid = true;
    } else {
      this.rePasswordIsValid = false;
    }
  }
}
