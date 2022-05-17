import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showFormateurBoard = false;
  username?: string;


 constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
       this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showFormateurBoard = this.roles.includes('FORMATEUR');

      this.username = user.username;
    }
  }

}
