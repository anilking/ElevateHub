import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service.service';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private commonService: CommonService,
    private router: Router, private dataService: DataService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.checkUserLogin();
  }

  // Getter methods to access form controls
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Login Successful!', this.loginForm.value);
    localStorage.setItem('UserDetails', JSON.stringify({...this.loginForm.value, "isLogedIn": true}))
    this.commonService.checkLogin(this.loginForm.value).subscribe((userDetails) => {
      this.dataService.updateUserDetails(userDetails);
      this.router.navigate(['/overview']);
    });
                  
  }

  checkUserLogin() {
    const userDetails = JSON.parse(localStorage.getItem('UserDetails') || '');
    if(userDetails.isLogedIn) {
      this.router.navigate(['/overview']);
    }
  }

}
