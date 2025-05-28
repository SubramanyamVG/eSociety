import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  submitted = false;
  errorMessage: string | null = null;
  userTypes = ['Admin', 'Checker', 'Member'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['Member', Validators.required]  // default: 'Member'
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginFormGroup?.invalid) return;
    else {
      const { username, password, userType } = this.loginFormGroup.value;
      console.log('Logging in:', { username, password, userType });
      if (userType === 'Admin') {
      this.router.navigate(['/member-details']);
    } else if (userType === 'Checker') {
      this.router.navigate(['/approval-dashboard']);
    } else {
      this.router.navigate(['/family']);
    }
    }
    
    // this.authService.login(this.loginForm.value).subscribe({
    //   next: () => {
    //     this.router.navigate(['/dashboard']); // Replace with actual route
    //   },
    //   error: err => {
    //     this.errorMessage = 'Invalid username or password';
    //     console.error(err);
    //   }
    // });
  }
}
