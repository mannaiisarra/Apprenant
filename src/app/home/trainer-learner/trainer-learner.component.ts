import { FormationService } from './../../_services/formation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-learner',
  templateUrl: './trainer-learner.component.html',
  styleUrls: ['./trainer-learner.component.css']
})
export class TrainerLearnerComponent implements OnInit {

  constructor(private FormationService:FormationService) { }

  ngOnInit(): void {
  }
  


}