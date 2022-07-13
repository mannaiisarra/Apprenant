import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  base_picture=environment.base_picture;
  currentUser: any;
  user:any;
  formUser!: FormGroup;
  constructor(private router:Router ,private tokenStorageService: TokenStorageService,private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.getUserById();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }

  getUserById() {
    this.userService.getUser(this.currentUser.id).subscribe((res) => {
      console.log('id from get by id  ', res.data);
      this.user = res.data;
      console.log('id from get by id  ', this.user.username);
      this.formUser.patchValue({
        username: this.user.username,
        email: this.user.email,
        phone: this.user.phone,
        adress: this.user.adress,
        // role: this.user.roles,
      });
    });
  }
}
