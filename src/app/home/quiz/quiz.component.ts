import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/_services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/_services/question.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizz:any;
  questionsList:any=[];
  currentQuestion:number =0;
  id:string=this.activatedRouter.snapshot.params["id"];
  progress:string="0"
  timer=0;
  questions:any;
  constructor(private questionService:QuestionService, private router:Router, private activatedRouter:ActivatedRoute,private quizService: QuizService) { }

  ngOnInit(): void {
    console.log("id quiz ",this.id) 
 
    this.getQuizById();
  }

  getQuizById(){
    this.quizService.getquizById( this.id	).subscribe(res=>{
     
      this.quizz = res.data;
  
    
    })
  }
 
}
