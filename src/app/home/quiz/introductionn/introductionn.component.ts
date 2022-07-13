
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizService } from 'src/app/_services/quiz.service';

@Component({
  selector: 'app-introductionn',
  templateUrl: './introductionn.component.html',
  styleUrls: ['./introductionn.component.css']
})
export class IntroductionnComponent implements OnInit {
  id:any;
  quizz:any;
  constructor(private router:Router, private activatedRouter:ActivatedRoute,private quizService: QuizService) {

    
    console.log("id from activate router ",this.activatedRouter.snapshot.params["id"])
    this.id=this.activatedRouter.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.getQuizById();
  }
  getQuizById(){
    this.quizService.getquizById( this.id	).subscribe(res=>{
     
      this.quizz = res.data;
   
  
  
  
    
    })
  }

  startQuiz(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
     
      showCancelButton: true,
      confirmButtonText: `Start`,
     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/home/quiz',this.id]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
