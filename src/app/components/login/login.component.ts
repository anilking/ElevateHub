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
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.checkUserLogin();
  }

  // Getter methods to access form controls
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    localStorage.setItem('UserDetails', JSON.stringify({...this.loginForm.value, "isLogedIn": true}))
    this.commonService.openSnackBar('Login Success!!')
    this.commonService.checkLogin(this.loginForm.value).subscribe((userDetails) => {
      if(userDetails.user){
        localStorage.setItem('UserDetails', JSON.stringify({...userDetails.user, "isLogedIn": true}))
        localStorage.setItem('bearerToken', userDetails.token);
        this.dataService.updateUserDetails(userDetails.user);
        this.router.navigate(['/overview']);
      }
    });        
  }

  checkUserLogin() {
    const userDetails = JSON.parse(localStorage.getItem('UserDetails') || '');
    if(userDetails.isLogedIn) {
      this.dataService.updateUserDetails(userDetails);
      this.router.navigate(['/overview']);
    }
  }

}
