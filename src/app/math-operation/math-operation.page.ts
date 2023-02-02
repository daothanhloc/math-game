import { Component, OnInit } from '@angular/core';
import { MathOperation } from './models/math-operation';
import { MathOperationService } from './services/math-operation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-math-operation',
  templateUrl: './math-operation.page.html',
  styleUrls: ['./math-operation.page.scss'],
})
export class MathOperationPage implements OnInit {
  mathOperations:MathOperation[];
  constructor(private mathOperationService:MathOperationService,
    private router:Router) { }

  ngOnInit() {
    this.mathOperations=this.mathOperationService.getAllMathOperation();
  }
  clickOpeartion(id){
    console.log("idddd",id);
    this.router.navigate(['math-operation/operation-item-quiz',id]);
  }

}
