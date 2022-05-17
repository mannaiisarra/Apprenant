import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { UserService } from 'src/app/_services/user.service';

import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-formateur-apprenant',
  templateUrl: './formateur-apprenant.component.html',
  styleUrls: ['./formateur-apprenant.component.css']
})
export class FormateurApprenantComponent implements OnInit {
  users:Users[] | undefined=[];
  base_picture=environment.base_picture;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.userService.getAll().subscribe(res=>{
     console.log("res categories : ",res.data)
    this.users=res.data;
    })
  }
}
