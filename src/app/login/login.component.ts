import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  islogin = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private router:Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
//       this.authService.islogin = false;
//     if (this.tokenStorage.getToken()) {
//       this.islogin = true;
//       this.roles = this.tokenStorage.getUser().roles;
   
// if(this.roles.includes('APPRENANT')){
//   this.router.navigate(['/']);
// }
// else if  (this.roles.includes('FORMATEUR')) {

//   this.router.navigate(['/']);
// }
// else if  (this.roles.includes('ADMIN')){
//   this.router.navigate(['/']);
// }

     
//     }
//  
 }
  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.islogin = true;
        const user = this.tokenStorage.getUser();
        this.roles = user.roles;
        
        this.router.navigateByUrl('home')  
       // this.reloadPage();
      },
   
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

}
