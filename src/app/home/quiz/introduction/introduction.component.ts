import { Component, OnInit,ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question';
import { QuizResultResponse } from 'src/app/model/quizResultResponse';
import { environment } from 'src/environments/environment.prod';
import { LocationStrategy } from '@angular/common';
import { QuestionService } from 'src/app/_services/question.service';
import { QuizService } from 'src/app/_services/quiz.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { HostListener} from '@angular/core';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  id:any;
  questions:any;
  correct: any = {};
  formQuestion:FormGroup;
  styleBar:string="";

  timer=0;
  allTimer=0;
  mark=0;
  quizz:any;
  question: Question = {} as Question;
  
  result:any;
  attempted:any;
  marksObtained:any;
  correctAnswers:any;
  quizResultResponse:QuizResultResponse;
  isSubmit=false;
  currentUser: any;
  warningCount=0;
  resultt:any;
  constructor(  private token: TokenStorageService,private locationStrategy:LocationStrategy,private questionService:QuestionService,private router:Router, private activatedRouter:ActivatedRoute,private fb: FormBuilder,private quizService: QuizService)  { 


    console.log("id from activate router ",this.activatedRouter.snapshot.params["id"])
    this.id=this.activatedRouter.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getquzqtionByid();
    this.getById();
    this.getQuizById();
    this.preventbackbutton();

    this.currentUser = this.token.getUser();

    console.log("user in local storage is : ",this.currentUser.id)
  
  }

  public preventbackbutton(){
    this.warningCount++;
    history.pushState(null,null,location.href);
    this.locationStrategy.onPopState(()=>{
      history.pushState(null,null,location.href);
      Swal.fire("warning","you can't navigate back","warning");
      if(this.warningCount>5){
        //this.submitQuiz();
        Swal.fire("warning","This is your last warning now your exam gets automatically submitted!!","warning");

      }
      
    })
  }
  

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    Swal.fire("warning","You can't right click if u will do so your exam will be cancalled!!","warning");
    this.warningCount++;
    if(this.warningCount>5){
      console.log("warning count number is:"+this.warningCount);
      //this.submitQuiz();
      Swal.fire("warning","This is your last warning now your exam gets automatically submitted!!","warning");

    }

}


  getquzqtionByid(){
    this.questionService.getQuestion(this.id).subscribe(res=>{
      console.log("question by id quiz  ",res.data);
      this.questions = res.data;    
      this.timer=this.questions.length*5;
      this.allTimer=this.questions.length*5;
      this.startTimer();
       
  
    })
    this.formQuestion = this.fb.group({
      quesId:'',
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      image:'',
      answer:'',
      givenAnswer:''



    })


  }


  getAll() {


    this.questionService.getAll().subscribe(
      res => {
     
        console.log('all demande By question',  res.data );
  
        //this.isSuccessful = true;
       // this.isSignUpFailed = false;
       // this.getAll();
  
      }
      
      
     
     );
  
    }



    getById() {


      this.questionService.getQuestion(this.id).subscribe(
        res => {
       
          console.log('Question By Id quiz',  res.data );
    
          //this.isSuccessful = true;
         // this.isSignUpFailed = false;
         // this.getAll();
    
        }
        
        
       
       );
    
      }
  
     


   

setResponse() {
  this.question.correct = this.correct;
 }

 
 startTimer(){
  let t= window.setInterval(()=>{
     if(this.timer<=0){
      // code question 
       clearInterval(t);
     }
     console.log("time : ",this.timer)
     if(this.timer == 0){

        this.questionService.getQuestion(this.id).subscribe(res=>{
        console.log("question by id quiz  ",res.data);
        this.questions = res.data;        

        this.questionService.evaluateQuiz(this.currentUser.id,this.questions).subscribe((res)=>{
        console.log("resulttttttttttttttttttttt  ",res);
        this.resultt=res.data;    
      
        },
        (error)=>{
          Swal.fire("error","Quiz can't be evaluated try again to submit","error");
        })        
    
      })

      console.log("here timer 0")
       //this.quizResultResponse.marksObtained=0
      Swal.fire('Any fool can use a computer')      
     }
          else{
       this.timer--;
       let nuber:number = this.timer/this.allTimer*100;
       this.styleBar="width: "+nuber.toString()+"%"
      // console.log("timer :",this.styleBar)
      
     }
     
   },1000);
 }

 getQuizById(){
  this.quizService.getquizById( this.id	).subscribe(res=>{
   
    this.quizz = res.data;
 



  
  })
}
 



submitQuiz(){
  Swal.fire({
    title: 'Do you want to submit the quiz?',
   
    showCancelButton: true,
    confirmButtonText: `Submit`,
   
  }).then((result)=>{
    this.isSubmit=true;
     this.evaluateQuiz();
  })
}

 evaluateQuiz() {
  console.log(this.questions);
  this.questionService.evaluateQuiz(this.currentUser.id,this.questions).subscribe((res)=>{
    console.log(res);
    Swal.fire("Success","Quiz is successfully submitted you can now download your result with response!!","success");
this.resultt=res.data;

console.log("quiz result",this.resultt);
    this.quizResultResponse.marksObtained;
    this.quizResultResponse.correctAnswers;
    this.quizResultResponse.attempted;
    // if(this.timer == 0){

    //   this.quizResultResponse.marksObtained==0user
    //   Swal.fire("warning","This is your last warning now your exam gets automatically submitted!!","warning");
    // }

  },
  (error)=>{
    Swal.fire("error","Quiz can't be evaluated try again to submit","error");
  })
}








}
