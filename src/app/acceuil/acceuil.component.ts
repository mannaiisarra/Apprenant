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
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  formFormation !: FormGroup;
  fileToUpload: File | null = null;
  formations:any ;
  base_picture=environment.base_picture;
  currentUser: any;
  id:any;
  demande:any;
  formationActive:any;
  formationActiveDemande:any;
  formationByUser:any;
  constructor(private token: TokenStorageService,private fb: FormBuilder,private formationService: FormationService,private demandeService: DemandeService,private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    // Get All Formation
    this.getAll();
    
   // this.getAllFormationActive();
    console.log(" NEW user in local storage is : ",this.currentUser.id)
    
  //  this.getAllFormationByUsers();

   this.getAllFormationByAprnt();
  }

  clickQuiz(){

    // verif id_user id_quiz mawjoudin fel table quiz_resulte_response 'query'

    // si null donc navigae By Url ver quiz Test

    // sinon msg Alert bous avez deja passez test
  }



  
  getAll(){
    this.formationService.getAll().subscribe(res=>{
     console.log(" NEW Get All Formation  : ",res.data)
    this.formations=res.data;

    this.demandeService.getAllDemandeByUsers(this.currentUser.id).subscribe(res=>{

      this.demande=res.data;
      console.log("NEW get All demande By id User : ",this.demande)
 
       
      this.demande.forEach(element =>{
    
      /*  console.log("demande ajouter is ",element.users.id);
       C*/

        this.formations = this.formations.filter( item=>{
          console.log("filtre condition ",item.id !== element.formationn.id);
          return item.id !== element.formationn.id;
           }
           )              
      } )
      

    })
  })
  }

 /* getAllFormationActive(){
    let formation={
      fin_date:new Date()
    }
    this.formationService.FormationActive(formation).subscribe(res=>{
      this.formationActive=res.data;
      console.log("formation active issssssss :",this.formationActive);
      this.formationActive= this.formationActive.filter(item =>
        {   
          return item.formationn.demandes.active == 1;
          console.log("filtre condition ",item.demandes);
        }
        );
    })
  } */

  
  /* getAllFormationActivePasdemande(){
    let formation={
      fin_date:new Date()
    }
    this.formationService.FormationActive(formation).subscribe(res=>{
      this.formationActiveDemande=res.data;
      console.log("formation active et  demande False:",this.formationActiveDemande);
      // this.formationActiveDemande= this.formationActiveDemande.filter(item =>
      //   {   
          
      //     return item.demandes[0].active == 0   ;
      //     console.log("filtre condition ",item.demandes);
      //   }
      //   );
    })
  } */
  // AllFormationByUser(){
  //   console.log("hereeeeeeeeeeeee3")
  //   this.demandeService.AllFormationByUser(this.currentUser.id).subscribe(res=>{
  //    console.log("all demandeeeeeeeeeee : ",res.data)
  //   this.formationByUser=res.data;
  //   })
  // }



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



  DemandeEnvoyer(id:any){
    this.demandeService.addDemande({date:new Date()},id,this.currentUser.id).subscribe(
      ress => {
        console.log("Demande envoyer",ress.data);
 
     
      })
  }
}