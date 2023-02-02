import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
import { MathOperation } from '../models/math-operation';
import { ActivatedRoute, Router } from '@angular/router';
import { MathOperationService } from '../services/math-operation.service';
import { ResponseQuiz } from '../models/ResponseQuiz.model';

@Component({
  selector: 'app-operation-item-quiz',
  templateUrl: './operation-item-quiz.page.html',
  styleUrls: ['./operation-item-quiz.page.scss'],
})
export class OperationItemQuizPage implements OnInit {
  mathOperation:MathOperation;
  value1:number=0;
  value2:number=0;
  operation:string="";
  response:number=0;
  responseList:ResponseQuiz[]=[];
  countNbrCorrect:number=0;
  countNbrNotCorrect:number=0;
  nbrQuestionPassed:number=1;
  progressValue:number=0.1;
  timeLeft: number = 15;
  interval;
  constructor(private activatedRouter:ActivatedRoute,
    private mathOperationService:MathOperationService,private router:Router) { }

  ngOnInit() {
 
      const id=this.activatedRouter.snapshot.params['id'];
      console.log(id);
      this.mathOperation=this.mathOperationService.getMathOperationById(+id);
      console.log(this.mathOperation);
      this.generateNumberRandom();
      this.getOperation();
      this.generateResponses();
  }

  generateNumberRandom(){
    switch(this.mathOperation.symbol){
      case("+"):
               this.value1=Math.floor(Math.random()*100); 
               this.value2=Math.floor(Math.random()*100);
               break;
       case("-"):
               this.value1=Math.floor(Math.random()*100); 
               this.value2=Math.floor(Math.random()*(this.value1));
               break;     
      case("x"):
               this.value1=Math.floor(Math.random()*100); 
               this.value2=Math.floor(Math.random()*100);
               break; 
      case("/"):
               this.value1=Math.floor(Math.random()*100); 
               this.value2=Math.floor(Math.random()*(this.value1));
               break;              
    }
    console.log(this.value1,this.value2);
  }

  getOperation(){
    this.operation=this.mathOperation.symbol;
  }

  generateResponses(){
    this.startTimer();
    this.initResponses();
    switch(this.mathOperation.symbol){   
      case "+":this.response=this.value1+this.value2;break;
      case "-":this.response=this.value1-this.value2;break;
      case "x":this.response=this.value1*this.value2;break;
      case "/":this.response=this.value1/this.value2;break;
    }
    let index=Math.floor(Math.random()*4);
    for(let i=0;i<4;i++){
      if(i==index){
        this.responseList[i]={id:i,value:this.response,isCorrect:true};
      }
      else{
        let value=Math.floor(Math.random()*100);
        this.responseList[i]={id:i,value:value,isCorrect:false};
      }
    }
   
}
initResponses(){
for(let i=0;i<4;i++){
  this.responseList.push({id:0,value:0,isCorrect:false});
}

}
checkIfCorrectAnsewrs(value){
  console.log(value);
if(value==this.response){
this.countNbrCorrect++;
}
else{
  this.countNbrNotCorrect++;
}
if(this.nbrQuestionPassed==10){
  console.log('navigate');
  this.router.navigate(['math-operation']);

  console.log("master");
}
this.generateNumberRandom();
 this.getOperation();
this.generateResponses();
this.nbrQuestionPassed++;
this.progressValue=this.nbrQuestionPassed/10;
}

startTimer() {
  this.pauseTimer();
  this.timeLeft=15;
  this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.timeLeft = 15;
    }
  },1000)
}

pauseTimer() {
  clearInterval(this.interval);
}

}
