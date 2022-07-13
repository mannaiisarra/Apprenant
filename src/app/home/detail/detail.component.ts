import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/_services/formation.service';
import { ThemeService } from 'src/app/_services/theme.service';
import { StepsService } from 'src/app/_services/steps.service';
import { DemandeService } from 'src/app/_services/demande.service';
import { CoursService } from 'src/app/_services/cours.service';
import { environment } from 'src/environments/environment.prod';
import { QuizService } from 'src/app/_services/quiz.service';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  panelOpenState = false;
  formations:any;
  themes:any;
  cours:any;
  listUser:any;
  id:string=this.activatedRouter.snapshot.params["id"];
  base_picture=environment.base_picture;
  quizz:any;

  constructor(private router:Router,private activatedRouter:ActivatedRoute,private formationService: FormationService,private themeService: ThemeService,private stepsService:StepsService,private demandeService:DemandeService,private coursService:CoursService,private quizService: QuizService,private userService:UserService) { }

  ngOnInit(): void {
    console.log("id from activate router ",this.id) 
    this.getFormationById();
    this.getAllThemeByFormation();
   
this.getAllCours();
this. allusers();
  }

  getFormationById(){
    this.formationService.getFormationbyId(this.id).subscribe(res=>{
    this.formations=res.data;
    console.log("Get Formation By Id  : ",  this.formations)
    })
  }

  getAllThemeByFormation(){
    this.themeService.getThemeByFormation(this.id).subscribe(res=>{
    this.themes=res.data;
    console.log("Get All Theme By Formation  : ",  this.themes)
    })
  }


 



    getAllCours(){
      this.coursService.getAll().subscribe(res=>{
      this.cours=res.data;
      console.log("All Cours : ",this.cours)
      })
    }


           
  getQuizById(id:any){
    this.quizService.getquizById( id	).subscribe(res=>{
     
      this.quizz = res.data;
      console.log("get quiz By id  ", this.quizz.maxMarks);
    
       if( this.quizz.maxMarks == null){
        this.router.navigateByUrl("/home/intro");
       
       }else{
        this.router.navigateByUrl("/home");
       }
  
    })
  }




  
  allusers() {

      


        this.demandeService.getActive(this.id).subscribe(
          res => {
            console.log(res.data);
            this.listUser=res.data;  
            console.log("ggggggggggggggggg",this.listUser);
           
            }
            
            )
      
  

  
      
      
     

    
    
    }

    // GetVideoBYTheme(id:any){
   
       
    //     this.coursService.getAllCoursByEtape( this.etapess.idEtape	).subscribe(res=>{
         
    //       this.coursByEtape = res.data;
    //       console.log("get all cours by etape  ", this.coursByEtape);
        
           
      
    //     })
      
         
    getAllThemesByFormation(){
      this.themeService.getThemeByFormation(this.id).subscribe(res=>{
      this.themes=res.data;
      console.log("Get All Themes By Formation  : ",  this.themes)
      this.router.navigateByUrl("/home/videos");
      })
    }



}
