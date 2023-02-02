import { Injectable } from '@angular/core';
import { MathOperation } from '../models/math-operation';

@Injectable({
  providedIn: 'root'
})
export class MathOperationService {
  mathOperations: MathOperation[] = [
    {
      id: 1,
      operation: "Cộng",
      symbol: "+",
      image: "add-outline"
    },
    {
      id: 2,
      operation: "Trừ",
      symbol: "-",
      image: "remove-outline"
    },
    {
      id: 3,
      operation: "Nhân",
      symbol: "x",
      image: "close-outline"
    },
    {
      id: 4,
      operation: "Chia",
      symbol: "/",
      image: "pencil"
    }
  ];

  constructor() { }

  getAllMathOperation() {
    return this.mathOperations;
  }

  getMathOperationById(id) {
    return this.mathOperations.find(element => element.id === id);
  }


}
