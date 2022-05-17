import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router ,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
