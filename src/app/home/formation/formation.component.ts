import {Formation } from 'src/app/model/formation';
import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/_services/formation.service';
import { DemandeService } from 'src/app/_services/demande.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formFormation !: FormGroup;
  fileToUpload: File | null = null;
  formations:any ;
  base_picture=environment.base_picture;
  currentUser: any;
  form:any;
  id:any;
  demande:any;
  demandes:any;
  formationActive:any;
  constructor(private token: TokenStorageService,private fb: FormBuilder,private formationService: FormationService,private demandeService: DemandeService,private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.getAllFormationByAprnt();
    console.log("user in local storage is : ",this.currentUser.id)
    console.log("hereeeeeeeeeeeee1")
 this.getAllFormationByUsers();
 console.log("hereeeeeeeeeeeee2")
 this.AllFormationByUser();


  }

  getAllFormationByUsers(){
    this.demandeService.getAllDemandeByUsers(this.currentUser.id).subscribe(res=>{

     this.demande=res.data;
     console.log("getAllDemandeByUsers: ",this.demande)
     })
   }

  
  getAll(){
    this.formationService.getAll().subscribe(res=>{
     console.log("res formation : ",res.data)
    this.formations=res.data;
    })
  }


  
  AllFormationByUser(){
    console.log("hereeeeeeeeeeeee3")
    this.demandeService.AllFormationByUser(this.currentUser.id).subscribe(res=>{
     console.log("all demandeeeeeeeeeee : ",res.data)
    this.demandes=res.data;
    })
  }

  getAllFormationByAprnt(){

    this.demandeService.getAllFormationActiveByUser(this.currentUser.id).subscribe(res=>{
      this.formationActive=res.data;
      console.log("res formation Active By user: ", this.formationActive)
      this.formationActive= this.formationActive.filter(item =>
        {
          console.log("res formation Active By userrrrrrrrrr: ",item)
          return item.formationn.archiver == false ;
      
        }
        );

        
      // this.formations = this.formations.filter( item=>{
      //   console.log("filtre condition ",item.id !== element.formationn.id);
      //   return item.id !== element.formationn.id;
      //    }
      //    )   
 
      // this.formationActive.forEach(element =>{
 

      // element= element.filter( item=>{
      //   return item.demandes[0].active==1
      
      
      //      }
      //      )   
    
                
      // } ) 
      
     
    })
  }
}