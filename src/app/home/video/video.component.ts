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
import { VideoService } from 'src/app/_services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  id:string=this.activatedRouter.snapshot.params["id"];
  base_picture=environment.base_picture;
  themes:any;
  videoo:any;
  constructor(private videoService:VideoService,private router:Router,private activatedRouter:ActivatedRoute,private formationService: FormationService,private themeService: ThemeService,private stepsService:StepsService,private demandeService:DemandeService,private coursService:CoursService,private quizService: QuizService,private userService:UserService) { }


  ngOnInit(): void {
    this.getAllThemesByFormation();
    console.log("id from activate router ",this.id) 
  }
  getAllThemesByFormation(){
    this.themeService.getThemeByFormation(this.id).subscribe(res=>{
    this.themes=res.data;
    console.log("Get All Themes By Formation videooooo  : ",  this.themes)

    })
  }

  GetVideoByID(id:any){

    this.videoService.getVideoyId(id).subscribe(res=>{

    this.videoo=res.data;

    console.log("video by id : ",this.videoo.photo)
    })
  }


}
