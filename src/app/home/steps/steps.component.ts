import { Component, OnInit,ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StepsService } from 'src/app/_services/steps.service';
import { Etape } from 'src/app/model/etape';
import { CoursService } from 'src/app/_services/cours.service';
import {MatAccordion} from '@angular/material/expansion';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  panelOpenState = false;
  etape:any;
  base_picture=environment.base_picture;
  id:string=this.activatedRouter.snapshot.params["id"];
  constructor(private stepService: StepsService,private fb: FormBuilder, private router:Router, private activatedRouter:ActivatedRoute,private coursService:CoursService){ }

  ngOnInit(): void {
    this.getEtapeByTheme();
  }
  getEtapeByTheme(){
    this.stepService.getEtapeByTheme(this.id).subscribe(res=>{
      console.log("etape by idddd  ",res.data);
      this.etape = res.data;
    
    
       
  
    })
  
  }
}
