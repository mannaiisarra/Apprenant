import {Formation } from 'src/app/model/formation';
import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/_services/formation.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formFormation !: FormGroup;
  fileToUpload: File | null = null;
  formations:any ;
  base_picture=environment.base_picture;
  
  id:any;
  demande:any;
  constructor(private fb: FormBuilder,private formationService: FormationService,private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.formationService.getAll().subscribe(res=>{
     console.log("res formation : ",res.data)
    this.formations=res.data;
    })
  }
}
