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
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  formFormation !: FormGroup;
  fileToUpload: File | null = null;
  formations:any ;
  base_picture=environment.base_picture;
  currentUser: any;
  id:any;
  demande:any;
  formationActive:any;
  constructor(private token: TokenStorageService,private fb: FormBuilder,private formationService: FormationService,private demandeService: DemandeService,private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();


    console.log("user in local storage is : ",this.currentUser.id)
this.getAllFormationByAprnt();
  }

  

  
  getAllFormationByAprnt(){

    this.demandeService.getAllFormationActiveByUser(this.currentUser.id).subscribe(res=>{
      this.formationActive=res.data;
      console.log("res formation Active By user: ", this.formationActive)
      this.formationActive= this.formationActive.filter(item =>
        {
          console.log("res formation Active By userrrrrrrrrr: ",item)
          return item.formationn.archiver == true ;
      
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