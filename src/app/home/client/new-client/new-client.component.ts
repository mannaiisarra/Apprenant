import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/_services/user.service';
import { Users } from 'src/app/model/users';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  formCategory!: FormGroup;
  users:Users[] | undefined=[];
  fileToUpload: File | null = null;
 
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private userService: UserService,private fb: FormBuilder, private router:Router) { }
  ngOnInit(): void {

    this.formCategory = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      adress: ['', [Validators.required]],
      photo: ['', [Validators.required]],

    });
  } 
  onSubmit(): void {
    console.log('Done ', this.formCategory.value);
    const formdata = new FormData();
    formdata.append("username", this.formCategory.get('username')!.value)
    formdata.append("email", this.formCategory.get('email')!.value)
    formdata.append("password", this.formCategory.get('password')!.value)
    formdata.append("phone", this.formCategory.get('phone')!.value)
    formdata.append("adress", this.formCategory.get('adress')!.value)
    formdata.append("file", this.fileToUpload!);

    this.userService.addCategory(formdata).subscribe(
      data => {
        console.log(data);
        //this.isSuccessful = true;
       // this.isSignUpFailed = false;
       // this.getAll();
        Swal.fire('Good job!', 'You clicked the button!', 'success');

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
      
      
     
     );

    }

    /*this.AuthService.addCategory(username, email, password,phone,adress,photo).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        Swal.fire('Good job!', 'You clicked the button!', 'success');

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
      
      
     
    );
    */
  

  handleFileInput(e: any) {
    console.log("Fine Input Done ", e.target.files[0])

    this.fileToUpload = e.target.files[0]

  }
}
